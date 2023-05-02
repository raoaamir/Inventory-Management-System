import { IsNumber, IsString } from "class-validator";

export class CreateRequestDto {
    @IsString()
    itemName: string;
    @IsString()
    requestType: 'acquired' | 'faulty';
    @IsString()
    faultyRequestType: 'repair' | 'replace';
    @IsString()
    description : string
    @IsString()
    status : string;
    @IsNumber()
    itemId: number;


   
}
