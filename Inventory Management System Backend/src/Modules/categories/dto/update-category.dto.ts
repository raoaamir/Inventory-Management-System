import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto{
    id: number
    subCategories: [{Category_Name: string}]
}
