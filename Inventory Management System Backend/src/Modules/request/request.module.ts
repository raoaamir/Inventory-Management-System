import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from './entities/request.entity';
import { UserModule } from '../user/user.module';
import { ItemsModule } from '../items/items.module';
import { CategoriesModule } from '../categories/categories.module';
import { Category } from '../categories/entities/category.entity';

@Module({
  imports :[UserModule,ItemsModule,CategoriesModule,TypeOrmModule.forFeature([Request])],
  controllers: [RequestController],
  providers: [RequestService]
})
export class RequestModule {}
