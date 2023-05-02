import { IsBoolean, isBoolean, IsEmail, IsNumber, isNumber, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsString()
    firstName : string;
    @IsString()
    lastName : string;
    @IsEmail()
    email :string;
    @IsString()
    @IsStrongPassword()
    password : string;
    @IsString()
    @IsPhoneNumber()
    contactNumber :string
    @IsBoolean()
    first_login :boolean
    @IsOptional()
    @IsNumber()
    orgId : number
    
}
