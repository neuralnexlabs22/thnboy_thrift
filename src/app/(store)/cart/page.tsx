"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/context/store-context";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="font-heading text-5xl font-bold uppercase tracking-tighter mb-6">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg" className="rounded-xl h-14 px-8 text-base font-bold uppercase tracking-wide bg-foreground text-background hover:bg-foreground/90">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 lg:pb-24">
      <h1 className="font-heading text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-12">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Cart Items */}
        <div className="flex-grow space-y-8">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-border"
              >
                <div className="relative w-24 h-32 sm:w-32 sm:h-40 rounded-xl overflow-hidden bg-muted shrink-0">
                  <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg leading-tight mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.selectedColor && `Color: ${item.selectedColor} `}
                        {item.selectedSize && `| Size: ${item.selectedSize}`}
                      </p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center border border-border rounded-xl px-3 py-1 h-10 shrink-0 bg-background">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-muted-foreground hover:text-foreground"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-muted-foreground hover:text-foreground"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-bold text-lg">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-muted/30 rounded-3xl p-8 sticky top-32">
            <h2 className="font-bold text-2xl uppercase tracking-tighter mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm mb-6 pb-6 border-b border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-2xl">₹{cartTotal.toLocaleString()}</span>
            </div>
            
            <Button asChild size="lg" className="w-full rounded-xl h-14 text-base font-bold uppercase tracking-wide bg-foreground text-background hover:bg-foreground/90">
              <Link href="/checkout">
                Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
