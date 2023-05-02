import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleDto } from './dto/create-role.dto';
import { Roles } from './entities/roles.entity';





@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private readonly rolesRepository: Repository<Roles>,
  ) {}


  async createRole(roleDto: RoleDto):Promise<Roles> {

    let role : Roles = new Roles();
    role.name = roleDto.name;
    return this.rolesRepository.save(role)
    
  }

  async findOneByName(name: string) {
    return this.rolesRepository.findOneBy({name});
  }
}