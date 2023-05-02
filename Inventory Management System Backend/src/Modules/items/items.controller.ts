import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { CurrentUser } from 'src/decorater/current-user-decorater';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { RolesGuard } from 'src/auth/roles-Guard';
import { Roles } from 'src/decorater/roles-decorator';
import { Role } from 'src/decorater/roles-enum';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }



  @Get()
  async findAll() {
     const result = await this.itemsService.findAll();
     return result
     
  }

  @Get('countItems')
  countItems(){
    return this.itemsService.countItems()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }
}
