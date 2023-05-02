import { BadRequestException, Injectable} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { RolesService } from '../roles/roles.service';


@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private readonly userRepository : Repository<User> ,private userService: UserService
    , private jwtService: JwtService , private rolesService : RolesService) {}

    async validateUserCred(email: string, password: string) {
        const user = await this.userService.getUserByEmail(email);
        console.log(user);

        if(!user.first_login == true){
            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                throw new BadRequestException();
            }
    
            const token = await this.generateToken(user)
            return { user, token };

        }
      return user.email
   
    }

    async setNewPassword(email : string  , password : string){
        console.log(password);
        
        const user = await this.userService.getUserByEmail(email)
        if(!user){
            throw new BadRequestException()
        }

        const salt = await bcrypt.genSalt(8)
        const hashedPass = await bcrypt.hash(password , salt)
        console.log(hashedPass);
        
        user.password = hashedPass;
        user.first_login =false
        await this.userRepository.save(user)
    }

    async generateToken(user: any) {
       
        return {
            access_token: this.jwtService.sign({
                sub: user.id,
                name: user.email,
                role : user.role.name

            }),
        };

    }
}
