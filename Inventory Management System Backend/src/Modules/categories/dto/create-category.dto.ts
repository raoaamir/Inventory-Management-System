import { IsNumber, IsOptional, IsString } from "class-validator";
import { Category } from "../entities/category.entity";


export class CreateCategoryDto {
    @IsString()
    Category_Name: string

    @IsString()
    subcategories : Category[];
    
    @IsOptional()
    @IsNumber()
    orgId : number

}
