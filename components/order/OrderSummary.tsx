"use client";
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrencyUSA } from "@/src/utils";
import { createOrder } from "@/actions/create-order-action";
import { OrderSchema } from "@/src/schema";
import { toast } from "react-toastify";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
  const clearOrder = useStore((state) => state.clearOrder);
  const total = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      total,
      order
    };

    const result = OrderSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });

      return;
    }

    const response = await createOrder(data);

    if(result.error) {
      response?.errors.forEach((issue) => {
        toast.error(issue.message);
      });
    }

    toast.success("Pedido realizado correctamente...");
    clearOrder();
  };

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-60 lg:w-72 p-4">
      <h2 className="text-4xl text-center font-black">Mi pedido</h2>
      {order.length === 0 ? (
        <p className="text-center my-4">El pedido esta vacío...</p>
      ) : (
        <div className="mt-4">
          {order.map((item) => (
            <ProductDetails key={item.id} item={item} />
          ))}

          <p className="text-2xl mt-10 text-center">
            Total a pagar:{" "}
            <span className="font-bold">
              {formatCurrencyUSA(total.toFixed(2))}
            </span>
          </p>

          <form className="w-full mt-4 space-y-5" action={handleCreateOrder}>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Tu nombre"
              className="bg-white border border-gray-400 py-2 px-4 w-full outline-none rounded"
            />

            <input
              className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer"
              type="submit"
              value="Confirmar pedido"
            />
          </form>
        </div>
      )}
    </aside>
  );
}
