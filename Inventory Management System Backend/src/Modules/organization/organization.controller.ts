import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Roles } from 'src/decorater/roles-decorator';
import { Role } from 'src/decorater/roles-enum';
import { RolesGuard } from 'src/auth/roles-Guard';
import { CurrentUser } from 'src/decorater/current-user-decorater';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';


@UseGuards(JwtAuthGuard , RolesGuard)
@Roles(Role.SuperAdmin)
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

 
  @Post()
 
  create(@Body() createOrganizationDto: CreateOrganizationDto, @CurrentUser() user :any) {
    return this.organizationService.create(createOrganizationDto , user);
  }

  @Get()
  findAll() {
    return this.organizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.organizationService.findOne(id);
  }
 
  @Patch(':id')

  update(@Param('id') id: string, @Body() updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationService.update(+id, updateOrganizationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationService.remove(+id);
  }
}
