import { Product } from "@/app/generated/prisma";
import { Order, OrderProducts } from "@/generated/prisma";

export type OrderItem = Pick<Product, "id" | "name" | "price"> & {
    quantity: number,
    subtotal: number
}


export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}