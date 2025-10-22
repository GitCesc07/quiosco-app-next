"use client"
import { useStore } from "@/src/store";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-4">
      <h2 className="text-4xl text-center font-black">Mi pedido</h2>
      {
        order.length === 0 ?
        <p className="text-center my-4">El carrito esta vacío...</p>
        :
        <div className="mt-4">
            <p>SI hay algo</p>
        </div>
      }
    </aside>
  );
}
