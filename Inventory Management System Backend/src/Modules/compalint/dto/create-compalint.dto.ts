import {IsString } from "class-validator";

export class CreateCompalintDto {

    @IsString()
    image : string

    @IsString()
    description : string

    @IsString()
    status : string


}
