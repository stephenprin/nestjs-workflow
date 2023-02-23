import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumberString, ValidateNested } from "class-validator";
import { createAddressDto } from "src/types/createAddressDto";

export class createCustomerDto {
    @IsNumberString()
    @IsNotEmpty()
     id: number;

    @IsNotEmpty()
    name: string;
   
    @IsEmail()
    @IsNotEmpty()
    email: string;
     
    @IsNotEmpty()
    password: string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => createAddressDto)
    address:createAddressDto

      
}