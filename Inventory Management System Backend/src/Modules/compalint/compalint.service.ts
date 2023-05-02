import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesService } from '../roles/roles.service';
import { UserService } from '../user/user.service';
import { CreateCompalintDto } from './dto/create-compalint.dto';
import { UpdateCompalintDto } from './dto/update-compalint.dto';
import { Compalint } from './entities/compalint.entity';

@Injectable()
export class CompalintService {
  constructor(@InjectRepository(Compalint) 
  private readonly complaintRepo : Repository<Compalint> , 
  private roleService : RolesService,
  private userService: UserService

  ){}
  async create(createCompalintDto: CreateCompalintDto  , loginUser : any):Promise<Compalint>{
    const user = await this.userService.findOne(loginUser.id)

    let complaint : Compalint = new Compalint();
    complaint.image = createCompalintDto.image
    complaint.description = createCompalintDto.description
    complaint.status = createCompalintDto.status
    complaint.user = user
    return this.complaintRepo.save(complaint)
  }

  async getAdminComplaints(){
 
  const complaints = await this.complaintRepo.find({relations: ['user','user.role'],where :{user :{role:{id:2}}}})
  return complaints
}
      
async getEmployeeComplaints(){
 
  const complaints = await this.complaintRepo.find({relations: ['user','user.role'],where :{user :{role:{id:3}}}})
  return complaints
}  

findAll():Promise<Compalint[]>{
    return this.complaintRepo.find({relations :{ user :true}});
  }

  findOne(id: number):Promise<Compalint>{
    return this.complaintRepo.findOne({relations :{ user :true}, where :{id}});
  }

  update(id: number, updateCompalintDto: UpdateCompalintDto) {
    let compalaint :Compalint = new Compalint();
    compalaint.id = id
    compalaint.status ="Resolved"
    return this.complaintRepo.save(compalaint);
  }

  remove(id: number) {
    return this.complaintRepo.delete(id);
  }
}
