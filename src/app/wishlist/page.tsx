"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/store-context";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="font-heading text-5xl font-bold uppercase tracking-tighter mb-6">Your Wishlist is Empty</h1>
        <p className="text-muted-foreground mb-8">Save items you love here to easily find them later.</p>
        <Button asChild size="lg" className="rounded-xl h-14 px-8 text-base font-bold uppercase tracking-wide bg-foreground text-background hover:bg-foreground/90">
          <Link href="/shop">Explore Shop</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 lg:pb-24">
      <h1 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-12">Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {wishlist.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col h-full"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <button 
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 w-8 h-8 bg-background rounded-full flex items-center justify-center text-foreground hover:bg-destructive hover:text-white transition-colors z-10 shadow-sm"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col flex-grow">
                <Link href={`/product/${product.id}`} className="hover:underline underline-offset-4 mb-2">
                  <h3 className="font-bold text-lg leading-tight line-clamp-1">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-3 mb-4">
                  <p className="font-bold">₹{product.price.toLocaleString()}</p>
                </div>
                <Button 
                  onClick={() => addToCart(product, 1, product.sizes?.[0], product.colors?.[0])}
                  className="w-full mt-auto bg-foreground text-background hover:bg-foreground/90 rounded-xl uppercase font-bold text-xs tracking-wide"
                >
                  Move to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
