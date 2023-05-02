import { PartialType } from '@nestjs/mapped-types';
import { CreateCompalintDto } from './create-compalint.dto';

export class UpdateCompalintDto extends PartialType(CreateCompalintDto) {}
