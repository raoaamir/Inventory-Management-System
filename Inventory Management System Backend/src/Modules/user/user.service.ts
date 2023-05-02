import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { RolesService } from '../roles/roles.service';
import { SendGridService } from '../sendGrid-Api /sendgrid-api-service';
import { OrganizationService } from '../organization/organization.service';
const otpGenerator = require('otp-generator')

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository : Repository<User> ,
  private rolesService : RolesService,
  private sendGridService :SendGridService ,
  private organizationService : OrganizationService 
  ){

  }
  async create(createUserDto: CreateUserDto, logInUser: any):Promise<User>{
    const CurrentUser = logInUser.role == 'superAdmin'? 'Admin': 'Employee';
    // const CurrentUser = 'superAdmin'
    const role = await this.rolesService.findOneByName(CurrentUser)
    const organization = await this.organizationService.findOne(createUserDto.orgId)
    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(createUserDto.password , salt)
    let user : User = new User();
    user.firstName = createUserDto.firstName
    user.lastName = createUserDto.lastName
    user.email = createUserDto.email
    user.password = hashedPass
    user.contactNumber = createUserDto.contactNumber
    user.role= role
    user.first_login = true
    user.org = organization
    await this.sendGridService.sendEmail(createUserDto.email , 'User Credential' , `Hi ${logInUser.role},<br/><br/>
    A new ${user.role.name} user has been created with the following credentials:<br/><br/>
    Username: ${createUserDto.email}<br/>
    Password: ${createUserDto.password}<br/><br/>
    Please ask the user to change their password as soon as possible.<br/><br/>
    Regards,<br/>
    Your App Team`,)
    this.userRepository.save(user)
    return user
    
  }
  async getUserByEmail(email :string):Promise<User> {
    return this.userRepository.findOne({relations:{role: true}, where :{email}});

  }
  async findAdminByOrganizationId(organizationId: number): Promise<User[]> {
  return this.userRepository.createQueryBuilder('user')
    .innerJoinAndSelect('user.role', 'role')
    .innerJoinAndSelect('user.org', 'org')
    .where('org.id = :orgId', { orgId: organizationId })
    .andWhere('role.id = :roleId', { roleId: 2 })
    .select(['user.id', 'user.firstName', 'user.lastName', 'user.email', 'user.contactNumber']).getMany()
}

async findEmployeesByOrganizationId(organizationId: number): Promise<User[]> {
  return this.userRepository.createQueryBuilder('user')
    .innerJoinAndSelect('user.role', 'role')
    .innerJoinAndSelect('user.org', 'org')
    .where('org.id = :orgId', { orgId: organizationId })
    .andWhere('role.id = :roleId', { roleId: 3 })
    .select(['user.id', 'user.firstName', 'user.lastName', 'user.email', 'user.contactNumber']).getMany()
}

async getAllOrganization(){
  const org = await this.userRepository.find({relations : {org : true}})
  console.log(org[0].org);
  return org
}

async varifyEmail(email : string , otp : string , newpassword : string):Promise<User>{

    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(newpassword , salt)
    const user = await this.userRepository.findOne({where :{email}});
    console.log(user)
    if(!user){
      throw new NotFoundException("error : user not found")
    }

    const varifyotp = user.otp === otp;
    if(varifyotp){
     user.password = hashedPass
     return this.userRepository.save(user)
    }
  }

  async varifyuser(email : string){
    console.log(email)
    const user = await this.userRepository.findOne({where :{email}})
    if(!user){
      throw new NotFoundException({error :"user not found"})
    }
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false })
    user.otp =otp
    await this.sendGridService.sendEmail(email , 'Otp Verify','<h1> '+otp+' </h1>')
    return this.userRepository.save(user)
  }

  find(email:string){
    return this.userRepository.find({where : {email}})
  }

  findAll() : Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number):Promise<User> {
    
    return this.userRepository.findOne({relations :{ org :true , request : true}, where :{id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user : User = new User();
    user.id = id;
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.contactNumber = updateUserDto.contactNumber;

    return this.userRepository.save(user)
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
