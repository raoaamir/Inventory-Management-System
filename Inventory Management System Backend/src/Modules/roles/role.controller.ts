import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RoleDto } from "./dto/create-role.dto";
import { RolesService } from "./roles.service";


@Controller('roles')
export class rolesController {
  constructor(private readonly rolesService : RolesService ){}

  @Post()
  create(@Body() roleDto:RoleDto ) {
    return this.rolesService.createRole(roleDto);
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.rolesService.findOneByName(name);
  }

}