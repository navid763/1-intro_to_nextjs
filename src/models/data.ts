import { IProduct } from "./product-props";
import { Category } from "./categories";
import { IComment } from "./comments";
import { ShippingMethod } from "./product-props";
import { Users } from "./users";
import { Warranty } from "./warranty";
import { Brand } from "./brands";
import { Filters } from "./filters";

export interface IData {
    products: IProduct[];
    users: Users[];
    comments: IComment[];
    brands: Brand[];
    warranties: Warranty[];
    shippingMethods: ShippingMethod[];
    filters: Filters[]
    categories: Category[]
}