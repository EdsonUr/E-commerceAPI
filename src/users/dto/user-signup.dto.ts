import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserSignUpDto {
    @IsNotEmpty({ message: 'Name is required' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail()
    email: string;

    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(5, { message: 'Password must be at least 5 characters' })
    @IsString()
    password: string;

}