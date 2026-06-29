"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";

export default function ShopPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter((p) => p.category === selectedCategory)
    : PRODUCTS;

  return (
    <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 lg:pb-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">Shop All</h1>
          <p className="text-muted-foreground max-w-xl">
            Explore our complete collection of premium streetwear, vintage finds, and everyday essentials.
          </p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <button 
          className="md:hidden flex items-center gap-2 border border-border px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="w-4 h-4" /> Filters
        </button>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Sort By <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className={`w-full md:w-64 shrink-0 ${isFilterOpen ? "block" : "hidden md:block"}`}>
          <div className="sticky top-32 space-y-10">
            <div>
              <h3 className="font-bold uppercase tracking-wide mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" /> Categories
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className={`hover:text-foreground transition-colors text-sm ${selectedCategory === null ? "text-foreground font-bold" : ""}`}
                  >
                    All Products
                  </button>
                </li>
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`hover:text-foreground transition-colors text-sm ${selectedCategory === cat.id ? "text-foreground font-bold" : ""}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mock Price Filter */}
            <div>
               <h3 className="font-bold uppercase tracking-wide mb-4">Price Range</h3>
               <div className="w-full h-1 bg-border rounded-full relative mb-4">
                  <div className="absolute left-0 w-1/2 h-full bg-foreground rounded-full"></div>
               </div>
               <div className="flex justify-between text-xs text-muted-foreground font-mono">
                 <span>₹0</span>
                 <span>₹15,000+</span>
               </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-xl text-muted-foreground">No products found matching your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <Link href={`/product/${product.id}`} className="flex flex-col h-full">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted mb-6">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {product.badge && (
                        <div className="absolute top-4 left-4 bg-foreground text-background px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full">
                          {product.badge}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-grow">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="font-bold text-lg leading-tight group-hover:underline underline-offset-4 line-clamp-2">{product.name}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{product.category}</p>
                      <div className="mt-auto flex items-center gap-3">
                        <p className="font-bold text-lg">₹{product.price.toLocaleString()}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
