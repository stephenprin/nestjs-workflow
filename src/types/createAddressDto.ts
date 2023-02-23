import { IsNotEmpty } from "class-validator";

export class createAddressDto{
    @IsNotEmpty()
    street: string;
    @IsNotEmpty()
    state: string;
    @IsNotEmpty() 
    country: string;
    
}