"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Info, Shield, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUNDLE_DATA } from "@/lib/data";
import { useStore } from "@/context/store-context";

export default function BundlePage() {
  const { addToCart } = useStore();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddBundle = () => {
    // Treat bundle as a special product
    const bundleProduct = {
      id: "mystery-bundle",
      name: "The Premium Mystery Bundle",
      price: BUNDLE_DATA.price,
      category: "Bundles",
      images: ["https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=2000&auto=format&fit=crop"],
      sizes: [],
      colors: [],
      description: "10 hand-picked premium streetwear pieces.",
    };
    addToCart(bundleProduct);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="w-full bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
              The Mystery<br />Bundle
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Elevate your wardrobe instantly. 10 hand-picked premium streetwear pieces curated by our expert stylists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-muted"
            >
              <Image
                src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=2000&auto=format&fit=crop"
                alt="Mystery Bundle Box"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">
                What's Inside?
              </h2>
              
              <ul className="space-y-6 mb-12">
                {BUNDLE_DATA.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-lg">
                    <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-background" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="bg-background p-8 rounded-2xl border border-border mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground font-medium uppercase tracking-wide">Total Value</span>
                  <span className="text-xl line-through text-muted-foreground">₹{BUNDLE_DATA.value.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold uppercase tracking-wide">Bundle Price</span>
                  <span className="text-4xl font-bold">₹{BUNDLE_DATA.price.toLocaleString()}</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={handleAddBundle}
                className={`w-full h-16 rounded-xl text-lg font-bold uppercase tracking-wide transition-all ${
                 isAdded ? "bg-green-600 hover:bg-green-700 text-white" : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {isAdded ? "Added to Cart" : "Claim Your Bundle"}
              </Button>
              
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" /> Secure Checkout & Free Express Shipping
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold">Can I choose the items in my bundle?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                The Mystery Bundle is curated by our stylists based on your size preferences. The contents are a surprise, which allows us to offer such incredible value. However, we guarantee premium items that fit our aesthetic perfectly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold">What sizes should I order?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Order your true size. We take into account the intended fit of each garment (e.g., if a hoodie is meant to be oversized, we will send the appropriate size based on your true size).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-bold">What is the return policy for the bundle?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Due to the heavily discounted nature of the Mystery Bundle, all sales are final. We do not accept returns or exchanges unless an item arrives defective.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
