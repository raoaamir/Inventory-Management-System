import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';


@Injectable()
export class OrganizationService {
  constructor(@InjectRepository(Organization) private readonly organizationRepo : Repository<Organization>){}
  async create(createOrganizationDto: CreateOrganizationDto , logInUser : any) {
    let organization  = new Organization()
    organization.name = createOrganizationDto.name
    organization.email = createOrganizationDto.email
    organization.location = createOrganizationDto.location
    organization.contactNumber = createOrganizationDto.contactNumber
    organization.bio = createOrganizationDto.bio
    organization.representative_Name = createOrganizationDto.representative_Name
    organization.representative_ContactNo = createOrganizationDto.representative_ContactNo
    organization.logo = createOrganizationDto.logo
    return this.organizationRepo.save(organization);
  }

 findAll() {
    return this.organizationRepo.find({relations : {user : true}});
  }

  findOne(id: number) {
    return this.organizationRepo.findOneBy({id});
  }
  findVendors(){
    return this.organizationRepo.find({relations:{category: true}})
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    let organization : Organization =new Organization()
    organization.id = id;
    organization.name = updateOrganizationDto.name
    organization.email = updateOrganizationDto.email
    organization.location = updateOrganizationDto.location
    organization.contactNumber = updateOrganizationDto.contactNumber
    organization.bio = updateOrganizationDto.bio
    organization.representative_Name = updateOrganizationDto.representative_Name
    organization.representative_ContactNo = updateOrganizationDto.representative_ContactNo
    organization.logo = updateOrganizationDto.logo
    return this.organizationRepo.save(organization) ;
  }

  remove(id: number) {
  return this.organizationRepo.delete(id) ;
  }

}