import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { CurrentUser } from 'src/decorater/current-user-decorater';
import { Request } from './entities/request.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { RolesGuard } from 'src/auth/roles-Guard';
import { Roles } from 'src/decorater/roles-decorator';
import { Role } from 'src/decorater/roles-enum';

@UseGuards(JwtAuthGuard)
@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @UseGuards(JwtAuthGuard , RolesGuard)
  @Roles(Role.Employee)
  @Post()
  create(@Body() createRequestDto: CreateRequestDto , @CurrentUser() user : any):Promise<Request>{
    return this.requestService.create(createRequestDto , user);
  }

  @Get('requestPage')
  async getAcquiredRequests(): Promise<any> {
    const request = await this.requestService.findAll();
     return request.filter(r => r.requestType === 'acquired');
      
  }


    @Get('returnsPage')
    async getReturnPage(): Promise<any> {
      const faultyRequests = await this.requestService.findAll();
      return faultyRequests.filter((obj)=>{return obj.faultyRequestType});
    }
    //use group by to seperate repair and replace
    // return faultyRequests.filter(request=> request.faultyRequestType == ('Repair' && 'Replace'));
     
  

  @Get()
  findAll() {
    return this.requestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestService.update(+id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestService.remove(+id);
  }
}
