"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { COLLECTIONS } from "@/lib/data";

export default function CollectionsPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 lg:pb-24">
      <div className="max-w-3xl mb-16">
        <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">Collections</h1>
        <p className="text-lg text-muted-foreground">
          Discover our themed collections. Each piece is thoughtfully curated to tell a story and redefine modern streetwear.
        </p>
      </div>

      <div className="space-y-6 lg:space-y-12">
        {COLLECTIONS.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Link href={`/collection/${collection.id}`} className="group block relative overflow-hidden rounded-3xl h-[60vh] min-h-[400px] bg-muted">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter text-white mb-4 transition-transform duration-500 group-hover:-translate-y-4">
                  {collection.name}
                </h2>
                <div className="overflow-hidden">
                  <p className="text-white/80 uppercase tracking-widest text-sm translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    Explore Collection
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
