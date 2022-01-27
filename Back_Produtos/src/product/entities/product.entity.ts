import { Role } from "../enums/role.enum";

export class Product {
    id?: Number;
    name: String;
    description: String;
    price: Float;
    percentageDiscount: Decimal;
    //Available:
    imageUrl: String;
    
    role?: Role;
    createdAt?: Date;
    updateAt?: Date;
}
