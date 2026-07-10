"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/data";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 lg:pb-24">
      <div className="max-w-3xl mb-16">
        <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">Categories</h1>
        <p className="text-lg text-muted-foreground">
          Explore our curated categories. From heavyweight hoodies to vintage denim, find exactly what you need to elevate your wardrobe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link href={`/shop?category=${category.id}`} className="group block relative overflow-hidden rounded-3xl aspect-[4/5] bg-muted">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-white drop-shadow-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                  {category.name}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
