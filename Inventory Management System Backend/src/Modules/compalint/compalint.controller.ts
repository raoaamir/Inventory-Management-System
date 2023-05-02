import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { RolesGuard } from 'src/auth/roles-Guard';
import { Roles } from 'src/decorater/roles-decorator';
import { Role } from 'src/decorater/roles-enum';
import { CurrentUser } from '../../decorater/current-user-decorater';
import { CompalintService } from './compalint.service';
import { CreateCompalintDto } from './dto/create-compalint.dto';
import { UpdateCompalintDto } from './dto/update-compalint.dto';
import { Compalint } from './entities/compalint.entity';


@Controller('compalint')
export class CompalintController {
  constructor(private readonly compalintService: CompalintService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin , Role.Employee)
  @Post()
  create(@Body() createCompalintDto: CreateCompalintDto , @CurrentUser() user :any):Promise<Compalint> {
    return this.compalintService.create(createCompalintDto , user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SuperAdmin)
  @Get('/admin/complaint')
  getAdminComplaints() {
    return this.compalintService.getAdminComplaints();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('/Employee/complaint')
  getEmployeeComplaints() {
    return this.compalintService.getEmployeeComplaints();
  }


  @Get()
  findAll() {
    return this.compalintService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compalintService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompalintDto: UpdateCompalintDto) {
    return this.compalintService.update(+id, updateCompalintDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compalintService.remove(+id);
  }
}
