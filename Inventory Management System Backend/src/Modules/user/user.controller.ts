import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from './auth.service';
import { CurrentUser } from '../../decorater/current-user-decorater';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { RolesGuard } from 'src/auth/roles-Guard';
import { Roles } from 'src/decorater/roles-decorator';
import { Role } from 'src/decorater/roles-enum';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService, private authService : AuthService){}

  
  @Post('login')
  async login(@Body() body: any ,@CurrentUser() user :any):Promise<any>{
      return this.authService.validateUserCred(body.email, body.password);

  }

  @Post('forgotPassword')
  async forgotPassword(@Body() body:any):Promise<any>{
    return this.userService.varifyuser(body.email)
  }

  @Post('restPassword')
  async resetPassword(@Body() body :any):Promise<any>{
    return this.userService.varifyEmail(body.email,body.otp,body.newpassword)
  }

  @Post('setNewPassword')
  async setNewPassword (@Body() body: any){
    return this.authService.setNewPassword(body.email , body.password)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SuperAdmin, Role.Admin)
  @Post()
  create(@Body() createUserDto: CreateUserDto ,  @CurrentUser() user :any) {
    return this.userService.create(createUserDto, user);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SuperAdmin)
  @Get('organization')
  getAllOrganization(){
    return this.userService.getAllOrganization()
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SuperAdmin)
  @Get('/admin/:id')
  findAdmins(@Param('id') id: string) {
    return this.userService.findAdminByOrganizationId(+id);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Get('/Employee/:id')
  findEmployees(@Param('id') id: string) {
    return this.userService.findEmployeesByOrganizationId(+id);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SuperAdmin , Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SuperAdmin , Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
