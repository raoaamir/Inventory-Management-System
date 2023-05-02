import { IsNumber, IsString } from "class-validator";

export class CreateVendorDto {
    @IsString()
    vendorName : string;

    @IsString()
    contactNumber : string;

    @IsString()
    totalSpending : string;

    @IsString()
    categoryName : string
}
