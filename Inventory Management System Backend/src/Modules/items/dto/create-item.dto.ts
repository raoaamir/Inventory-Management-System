import { IsNumber, IsString } from "class-validator";

export class CreateItemDto {
    @IsString()
    itemName : string

    @IsString()
    serialNumber : string

    @IsString()
    description : string

    @IsNumber()
    price : number

    @IsString()
    categoryName : string
}
