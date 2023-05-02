import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { OrganizationService } from '../organization/organization.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';


@Injectable()
export class CategoriesService {
constructor(@InjectRepository(Category) private readonly categoryRepo : Repository<Category> , 
private organizationService : OrganizationService
){}
async create(CreateCategoryDto : CreateCategoryDto , loginUser :any):Promise<Category>{
    const orgid =await this.organizationService.findOne(loginUser.orgId)
    const category = new Category();
    category.Category_Name = CreateCategoryDto.Category_Name
    category.organization = orgid
    await this.categoryRepo.save(category )

  for(const obj of CreateCategoryDto.subcategories){
      const subCategory = new Category()
      subCategory.Category_Name = obj.Category_Name;
      subCategory.parent = category
      await this.categoryRepo.save(subCategory)
  }
    
    return category
}
  
async findCategoryByOrganization(logInUser:any ){
  const id = logInUser.id
  console.log(id);
  

    const categories = await this.categoryRepo.find({relations: ['organization.category.subcategories'], where: {organization: {id: logInUser.OrgId}}})
    console.log(categories[0].organization.category);
    return categories
}

countSubCategory(){
  return this.categoryRepo.count({relations :['subcategories'], where :{parent :Not(IsNull())}})
}

countCategory(){
  return this.categoryRepo.count({relations:['parent'], where : {parent: IsNull()}});
}


findAll() {
    return this.categoryRepo.find();
  }

findOne(id: number):Promise<Category>{
    return this.categoryRepo.findOne({relations :{organization :true} , where :{id}});
  }

async findOneByName(Category_Name: string) {
    return this.categoryRepo.findOneBy({Category_Name});
  }

async createSubcategory(id: number, data: UpdateCategoryDto) {
  const category = await this.categoryRepo.findOneBy({id})
  console.log(category);
  

    for(const obj of data.subCategories){
      const subCategory = new Category()
      subCategory.Category_Name = obj.Category_Name;
      subCategory.parent = category
      await this.categoryRepo.save(subCategory)
    }
    
return category
}

remove(id: number) {
    return this.categoryRepo.delete(id);
  }
}
