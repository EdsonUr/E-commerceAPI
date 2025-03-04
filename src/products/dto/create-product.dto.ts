import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty({ message: 'Title is required.' })
    @IsString()
    title: string;

    @IsNotEmpty({ message: 'Description is required.' })
    @IsString()
    description: string;

    @IsNotEmpty({ message: 'Price is required.' })
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Price must be a number and max decimal precision 2' })
    @IsPositive({ message: 'Price must be a positive number.' })
    price: number;

    @IsNotEmpty({ message: 'Stock is required.' })
    @IsNumber()
    @Min(0, { message: 'Stock can not be negative.' })
    stock: number;

    @IsNotEmpty({ message: 'Images are required.' })
    @IsArray({ message: 'Images must be in an array format.' })
    images: string[];

    @IsNotEmpty({ message: 'Category is required.' })
    @IsNumber()
    categoryId: number;

}
