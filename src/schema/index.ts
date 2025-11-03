import { z} from "zod";

export const OrderSchema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    total: z.number(),
    order: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
            price: z.number(),
            quantity: z.number(),
            subtotal: z.number()
        })
    )
})

export const OrderIdSchema = z.object({
    orderId: z.string()
                .transform((value) => parseInt(value))
                .refine((value) => value > 0, {message: "El Id de la orden debe de ser mayor a 0..."})
})