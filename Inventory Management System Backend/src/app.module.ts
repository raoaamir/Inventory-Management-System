import { Module} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationModule } from './Modules/organization/organization.module';
import { CompalintModule } from './Modules/compalint/compalint.module';
import { UserModule } from './Modules/user/user.module';
import { RolesModule } from './Modules/roles/roles.module';
import { CategoriesModule } from './Modules/categories/categories.module';
import { ItemsModule } from './Modules/items/items.module';
import { VendorModule } from './Modules/vendor/vendor.module';
import { RequestModule } from './Modules/request/request.module';



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal :true,
        envFilePath :".local.env",
      })],
      useFactory:(configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize:configService.get<boolean>('DB_SYNC'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        // logging :true
      }),
      inject: [ConfigService],
      
      
    }),
    UserModule,
    RolesModule,
    OrganizationModule,
    CompalintModule,
    CategoriesModule,
    ItemsModule,
    VendorModule,
    RequestModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
