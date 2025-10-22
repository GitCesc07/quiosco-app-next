"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Category } from "@/app/generated/prisma";

type CategoryIconProps = {
  category: Category;
};

export default function CategoryIcon({ category }: CategoryIconProps) {
  const params = useParams<{ category: string }>();
  return (
    <Link
      className={`${
        category.slug == params.category ? "bg-amber-400" : ""
      } flex items-center hover:bg-amber-400 transition-all duration-150 rounded-br-lg rounded-tr-lg w-full gap-4 border-t border-gray-300 py-1 px-2 last-of-type:border-b text-xl font-bold`}
      href={`/order/${category.slug}`}
    >
      <div className="size-16 relative">
        <Image fill src={`/icon_${category.slug}.svg`} alt="Icons" />
      </div>

      {category.name}
    </Link>
  );
}
