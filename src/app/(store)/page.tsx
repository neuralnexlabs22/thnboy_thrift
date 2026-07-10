"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/data";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  const CATEGORIES = [
    { name: "Jackets", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500&auto=format&fit=crop", href: "/collections/thrifted-jackets" },
    { name: "Jersey", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=500&auto=format&fit=crop", href: "/collections/jersey" },
    { name: "T-shirts", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=500&auto=format&fit=crop", href: "/collections/t-shirts" },
    { name: "Shirt", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=500&auto=format&fit=crop", href: "/collections/shirt" },
    { name: "Jeans", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=500&auto=format&fit=crop", href: "/collections/jeans" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=500&auto=format&fit=crop", href: "/collections/accessories" },
  ];

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* Category Row */}
      <section className="py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 md:gap-16 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <Link key={cat.name} href={cat.href} className="flex flex-col items-center gap-3 min-w-[80px] group">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden relative border border-gray-200 group-hover:border-black transition-colors">
                  <Image src={cat.image} alt={cat.name} fill sizes="100px" className="object-cover" />
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-900">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products directly at the top */}
      <section className="pt-10 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight uppercase">New Arrivals</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-6 gap-y-10">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/shop" 
              className="inline-block border border-black px-12 py-3 font-bold tracking-wide uppercase text-sm hover:bg-black hover:text-white transition-colors duration-300"
            >
              View All
            </Link>
          </div>
        </div>
      </section>

      {/* Second Image Banner / Collection Banner */}
      <section className="relative w-full h-[50vh] overflow-hidden flex items-end justify-center pb-12 mt-10">
        <div className="absolute inset-0 z-0">
           <Image
              src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2000&auto=format&fit=crop"
              alt="Collection Background"
              fill
              sizes="100vw"
              className="object-cover"
            />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-6 drop-shadow-md">
              The Archive
            </h2>
            <Link 
              href="/collections" 
              className="bg-white text-black px-12 py-3 font-bold text-sm tracking-wide uppercase hover:bg-black hover:text-white transition-colors duration-300"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>
      
      {/* Information / Marquee equivalent */}
       <section className="py-16 border-t border-gray-200 mt-10">
        <div className="container mx-auto px-4 text-center">
           <p className="text-lg font-medium tracking-wide uppercase text-gray-500 max-w-2xl mx-auto">
             Premium streetwear crafted with minimalist aesthetics and uncompromising quality.
           </p>
        </div>
      </section>
    </div>
  );
}
