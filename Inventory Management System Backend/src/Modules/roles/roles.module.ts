import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from './roles.service';
import { rolesController } from './role.controller';
import { Roles } from './entities/roles.entity';

@Module({
    imports :[TypeOrmModule.forFeature([Roles])],
    providers :[RolesService],
    controllers :[rolesController],
    exports :[RolesService]
})
export class RolesModule {}
