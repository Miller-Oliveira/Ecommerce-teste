import {IsString, IsFloat } from "class-validator";
import { role } from "../enums/role.enum";

export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsFloat()
    price: float;

    @IsDecimal()
    percentageDiscount: decimal;

    //available
    //imageUrl
    

    role?: role;

    createdAt?: Date;

    updateAt?: Date;
}

function IsDecimal() {
    throw new Error("Function not implemented.");
}
// function IsFloat() {
//     throw new Error("Function not implemented.");
// }

