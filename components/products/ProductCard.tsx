import { Product } from "@/generated/prisma";
import { formatCurrencyUSA } from "@/src/utils";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductsCardProp = {
  product: Product;
};

export default function ProductCard({ product }: ProductsCardProp) {
  return (
    <div className="bg-white border border-gray-200 rounded-md">
      <Image
        width={400}
        height={500}
        className="object-fill w-full"
        src={`/products/${product.image}.jpg`}
        alt={`Imagen platillo ${product.name}`}
      />

      <div className="md:p-4">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-4 font-black text-4xl text-amber-500">
          {formatCurrencyUSA(product.price.toString())}
        </p>

        <AddProductButton product={product} />
      </div>
    </div>
  );
}
