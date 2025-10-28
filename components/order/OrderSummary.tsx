"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrencyUSA } from "@/src/utils";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
  const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-60 lg:w-72 p-4">
      <h2 className="text-4xl text-center font-black">Mi pedido</h2>
      {order.length === 0 ? (
        <p className="text-center my-4">El carrito esta vacío...</p>
      ) : (
        <div className="mt-4">
          {order.map((item) => (
            <ProductDetails key={item.id} item={item} />
          ))}

          <p className="text-2xl mt-10 text-center">
            Total a pagar: {" "}
            <span className="font-bold">{formatCurrencyUSA(total.toFixed(2))}</span>
          </p>
        </div>
      )}
    </aside>
  );
}
