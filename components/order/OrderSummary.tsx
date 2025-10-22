"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
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
        </div>
      )}
    </aside>
  );
}
