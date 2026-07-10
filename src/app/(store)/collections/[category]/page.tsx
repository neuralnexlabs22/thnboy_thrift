import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryName = category.replace("-", " ");
  
  let filteredProducts = PRODUCTS;
  if (category === "t-shirts" || category === "shirt") {
    filteredProducts = PRODUCTS.filter(p => p.category === "shirts");
  } else if (category === "jersey" || category === "jerseys") {
    filteredProducts = PRODUCTS.filter(p => p.category === "jerseys");
  } else if (category === "thrifted-jackets" || category === "jackets") {
    filteredProducts = PRODUCTS.filter(p => p.category === "jackets");
  } else if (category === "jeans" || category === "bottoms") {
    filteredProducts = PRODUCTS.filter(p => p.category === "jeans");
  } else if (category === "accessories") {
    filteredProducts = PRODUCTS.filter(p => p.category === "accessories");
  } else if (category !== "all") {
    filteredProducts = PRODUCTS.filter(p => p.category === category);
  }
  
  return (
    <div className="w-full bg-white text-black font-sans pt-10 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight uppercase capitalize">{categoryName}</h1>
          <p className="text-sm text-gray-500 mt-2">Explore our collection of {categoryName}.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-6 gap-y-10">
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500">
              No products found in this category.
            </div>
          )}
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col cursor-pointer"
            >
              <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] mb-4 bg-[#f4f4f4] overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {product.images[1] && (
                  <Image
                    src={product.images[1]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                )}
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 z-10">
                    {product.badge}
                  </span>
                )}
              </Link>
              <div className="flex flex-col text-center">
                <h3 className="text-sm font-bold uppercase tracking-tight mb-1">
                  {product.name}
                </h3>
                <div className="text-sm">
                  Rs. {product.price.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
