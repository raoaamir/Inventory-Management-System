import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemsService } from '../items/items.service';
import { UserService } from '../user/user.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestService {
  constructor(@InjectRepository(Request) private readonly requestRepo : Repository<Request> ,
  private userService :UserService , private itemService : ItemsService
  ){}
  async create(createRequestDto: CreateRequestDto , loginUser:any ):Promise<Request>{
    
    const user = await this.userService.findOne(loginUser.id)  
    const item = await this.itemService.findOneByName(createRequestDto.itemName);
  
    const request = new Request()
    request.itemName = createRequestDto.itemName
    request.status = createRequestDto.status
    request.requestType = createRequestDto.requestType
    request.faultyRequestType = createRequestDto.faultyRequestType
    request.description = createRequestDto.description
    request.item = item
    request.user = user
    
    return await this.requestRepo.save(request);
  }


  async findAll(): Promise<Request[]> {
 return await this.requestRepo.find({ relations: {item :true , user : true} });  
}
    


async getFaultyRequests(): Promise<Request[]> {
  return this.requestRepo.find({
    where: { requestType: 'faulty' },
    relations: ['item', 'user'],
  });
}


  findOne(id: number) {
    return this.requestRepo.findOne({ relations: ['item', 'user'],where :{id}});
  }

  async update(id: number, updateRequestDto: UpdateRequestDto) {
    const req = new Request();
    req.id = id;
    req.status = updateRequestDto.status;
    return await this.requestRepo.save(req)

  }

  remove(id: number) {
    return this.requestRepo.delete(id);
  }
}
