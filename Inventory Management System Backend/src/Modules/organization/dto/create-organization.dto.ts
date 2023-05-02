import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateOrganizationDto {
    @IsString()
    name :string
    @IsEmail()
    email : string
    @IsString()
    contactNumber:string
    @IsString()
    location : string
    @IsString()
    bio :string
    @IsString()
    representative_Name : string
    @IsString()
    representative_ContactNo :string
    @IsString()
    logo : string
}
