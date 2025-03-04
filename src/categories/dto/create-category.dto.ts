import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({ message: 'Title is required' })
    @IsString()
    title: string;

    @IsNotEmpty({ message: 'Description is required' })
    @IsString()
    description: string;
}
