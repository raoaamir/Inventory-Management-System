import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { RolesGuard } from 'src/auth/roles-Guard';
import { Roles } from 'src/decorater/roles-decorator';
import { Role } from 'src/decorater/roles-enum';
import { CurrentUser } from 'src/decorater/current-user-decorater';

@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}
  @UseGuards(JwtAuthGuard , RolesGuard)
  @Roles(Role.Admin)
  @Post()
  create(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorService.create(createVendorDto);
  }

  @Get()
  findAll() {
    return this.vendorService.findAll();
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('listofvendors')
  findListOfVendors(@CurrentUser() user : any){
    return this.vendorService.findVendorsByOrganization(user)
  }

  @UseGuards(JwtAuthGuard , RolesGuard)
  @Roles(Role.Admin)
  @Get('countVendors')
    countVendor(){
      return this.vendorService.countVendors()
    }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorService.findOne(+id);
  }


  @UseGuards(JwtAuthGuard , RolesGuard)
  @Roles(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorService.update(+id, updateVendorDto);
  }
  @UseGuards(JwtAuthGuard , RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorService.remove(+id);
  }
}
