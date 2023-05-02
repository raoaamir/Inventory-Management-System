import { Module } from '@nestjs/common';
import { CompalintService } from './compalint.service';
import { CompalintController } from './compalint.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compalint } from './entities/compalint.entity';
import { RolesModule } from '../roles/roles.module';
import { UserModule } from '../user/user.module';


@Module({
  imports : [UserModule ,RolesModule , TypeOrmModule.forFeature([Compalint])],
  controllers: [CompalintController],
  providers: [CompalintService]
})
export class CompalintModule {}
