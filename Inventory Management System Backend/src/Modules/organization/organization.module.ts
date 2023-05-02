import { forwardRef, Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { Organization } from './entities/organization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';

@Module({
  imports :[TypeOrmModule.forFeature([Organization])],
  controllers: [OrganizationController],
  providers: [OrganizationService],
  exports :[OrganizationService]
})
export class OrganizationModule {}
