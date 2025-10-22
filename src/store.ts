import { OrderItem } from "@/types";
import { create } from "zustand";

interface Store {
    order: OrderItem[]
    // addToOrder: (item: OrderItem) => void
    // removeFromOrder: (id: string) => void
}

export const useStore = create<Store>(() => ({
    order: []
}))