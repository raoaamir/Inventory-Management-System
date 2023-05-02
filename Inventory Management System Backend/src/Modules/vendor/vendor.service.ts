import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { Vendor } from './entities/vendor.entity';

@Injectable()
export class VendorService {
  constructor(@InjectRepository(Vendor) private readonly vendorRepo : Repository<Vendor> ,private categoryService : CategoriesService){}
  async create(createVendorDto: CreateVendorDto):Promise<Vendor>{
    const category = await this.categoryService.findOneByName(createVendorDto.categoryName)
    console.log(category)
    const vendor = new Vendor()
    vendor.vendorName = createVendorDto.vendorName
    vendor.contactNumber = createVendorDto.contactNumber
    vendor.totalSpending = createVendorDto.totalSpending
    vendor.category = [category]
    
    
    

    return await this.vendorRepo.save(vendor)
    
  }

  async findVendorsByOrganization(logInUser:any ){
    const id = logInUser.id
    console.log(id);
    
  
      const vendor = await this.vendorRepo.find({relations: ['category' , 'category.organization'], where: {category: {organization:{id :logInUser.OrgId} }}})
      // console.log(vendor[0].category);
      
      return vendor
  }

  findAll() {
    return this.vendorRepo.find({relations : ['category','category.subcategories']});
  }

  findOne(id: number) {
    return this.vendorRepo.findOneBy({id});
  }
  countVendors(){
    return this.vendorRepo.count()
  }

 async update(id: number, updateVendorDto: UpdateVendorDto) {
    const category = await this.categoryService.findOneByName(updateVendorDto.categoryName)
    const vendor = new Vendor()
    vendor.vendorName = updateVendorDto.vendorName
    vendor.contactNumber = updateVendorDto.contactNumber
    vendor.category = [category]
    return this.vendorRepo.save(vendor) ;
  }

  remove(id: number) {
    return this.vendorRepo.delete(id);
  }
}
