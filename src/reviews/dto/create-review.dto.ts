import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {

    @IsNotEmpty({ message: 'Product is required.' })
    @IsNumber()
    productId: number;

    @IsNotEmpty({ message: 'Ratings is required.' })
    @IsNumber()
    ratings: number;

    @IsNotEmpty({ message: 'Comment is required.' })
    @IsString()
    comment: string;

}
