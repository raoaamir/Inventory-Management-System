import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { RolesModule } from '../roles/roles.module';
import { SendGridService } from '../sendGrid-Api /sendgrid-api-service';
import { JwtStrategy } from 'src/auth/jwt-strategy';
import { OrganizationModule } from '../organization/organization.module';




@Module({
  imports  :[TypeOrmModule.forFeature([User]),
  PassportModule, JwtModule.register({
    secret : 'mysecretkey',
    signOptions : {expiresIn : '1d'},
    
  }),
  RolesModule,
  OrganizationModule

],
  controllers: [UserController],
  providers: [UserService , AuthService , JwtStrategy , SendGridService],
  exports :[UserService]
})
export class UserModule {}
