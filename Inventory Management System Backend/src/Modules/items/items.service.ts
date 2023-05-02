import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { Repository } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectRepository(Item) private readonly itemRepo : Repository<Item> , private categoryService : CategoriesService){}
  async create(createItemDto: CreateItemDto):Promise<Item> {
    const categoryName = await this.categoryService.findOneByName(createItemDto.categoryName)
    const item = new Item()
    item.itemName = createItemDto.itemName
    item.serialNumber = createItemDto.serialNumber
    item.description = createItemDto.description
    item.price = createItemDto.price;
    item.category = categoryName
    
    return await this.itemRepo.save(item);
  }

  countItems(){
    return this.itemRepo.count()
  }

  findAll() {
    return this.itemRepo.find({ relations: ['category', 'category.subcategories']});
  }

  findOne(id: number) {
    return this.itemRepo.findOne({ relations: ['category', 'category.subcategories'],where :{id}});
  }

  findOneByName(itemName : string){
    return this.itemRepo.findOneBy({itemName})
  }



  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = new Item()
    item.id = id
    item.itemName = updateItemDto.itemName
    item.description = updateItemDto.description
    item.serialNumber = updateItemDto.serialNumber
    item.price = updateItemDto.price
    return await this.itemRepo.save(item)
  }

  remove(id: number) {
    return this.itemRepo.delete(id);
  }


  // async getOrganizationCounts() {
  //   const vendorCount = await this.vendorRepository.count();
  //   const employeeCount = await this.employeeRepository.count();
  //   const inventoryItemCount = await this.inventoryItemRepository.count();
  //   const categoryCount = await this.categoryRepository.count();

  //   return {
  //     vendorCount,
  //     employeeCount,
  //     inventoryItemCount,
  //     categoryCount,
  //   };
  }

