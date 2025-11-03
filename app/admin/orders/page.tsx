import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  });

  return orders;
}

export default async function OrderPage() {
  const orders = await getPendingOrders();
  console.log(orders);
  return (
    <>
      <Heading>
        Administrar ordenes
      </Heading>

      {
        orders.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4">
            {
              orders.map(order => (
                <OrderCard 
                  order={order}
                  key={order.id} 
                />
              ))
            }
          </div>
        )
          :
          (
            <p className="text-center">
              No hay ordenes pendientes...
            </p>
          )
      }
    </>
  )
}
