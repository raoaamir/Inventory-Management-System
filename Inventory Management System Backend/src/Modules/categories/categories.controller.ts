import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { RolesGuard } from 'src/auth/roles-Guard';
import { CurrentUser } from 'src/decorater/current-user-decorater';
import { Roles } from 'src/decorater/roles-decorator';
import { Role } from 'src/decorater/roles-enum';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post('subcategories')
  createSubcategory(@Body() body: UpdateCategoryDto):Promise<Category>{
    return this.categoriesService.createSubcategory(body.id , body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto , @CurrentUser() user :any) {
    return this.categoriesService.create(createCategoryDto , user);
  }
 
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('/category')
  findItems(@CurrentUser() user : any){
    console.log(user);
    return this.categoriesService.findCategoryByOrganization(user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('countCategory')
  countCategory(){
    return this.categoriesService.countCategory()
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('countSubCategory')
  countSubCat(){
    return this.categoriesService.countSubCategory();
  
}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }

}
