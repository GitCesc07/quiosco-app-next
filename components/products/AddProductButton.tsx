"use client";

import { Product } from "@/generated/prisma";
import { useStore } from "@/src/store";

type AddProductButtonProps = {
  product: Product;
};

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToOrder = useStore((state) => state.addToOrder);
  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-150 text-white w-full mt-4 py-2 px-4 uppercase rounded-md font-bold cursor-pointer"
      type="button"
      onClick={() => addToOrder(product)}
    >
      Agregar pedido
    </button>
  );
}
