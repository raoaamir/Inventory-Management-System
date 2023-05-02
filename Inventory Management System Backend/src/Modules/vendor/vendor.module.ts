import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entities/vendor.entity';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports :[CategoriesModule, TypeOrmModule.forFeature([Vendor])],
  controllers: [VendorController],
  providers: [VendorService]
})
export class VendorModule {}
