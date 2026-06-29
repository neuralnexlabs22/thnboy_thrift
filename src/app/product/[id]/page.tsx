"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Minus, Plus, ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/data";
import { useStore } from "@/context/store-context";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const product = PRODUCTS.find((p) => p.id === id);

  const { addToCart, toggleWishlist, isInWishlist } = useStore();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link href="/shop" className="text-muted-foreground underline">Back to Shop</Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes?.length) {
      alert("Please select a size");
      return;
    }
    if (!selectedColor && product.colors?.length) {
      alert("Please select a color");
      return;
    }
    
    addToCart(product, quantity, selectedSize || undefined, selectedColor || undefined);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 lg:pb-24">
      <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-6 lg:sticky lg:top-32 h-fit">
           <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar shrink-0">
             {product.images.map((img, index) => (
               <button
                 key={index}
                 onClick={() => setActiveImage(index)}
                 className={`relative w-20 h-24 md:w-24 md:h-32 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                   activeImage === index ? "border-foreground" : "border-transparent opacity-60 hover:opacity-100"
                 }`}
               >
                 <Image src={img} alt={`${product.name} - Thumbnail ${index + 1}`} fill className="object-cover" />
               </button>
             ))}
           </div>
           
           <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-muted group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  <Image 
                    src={product.images[activeImage]} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 origin-center cursor-zoom-in"
                  />
                </motion.div>
              </AnimatePresence>
           </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col pt-4 lg:pt-10">
           <div className="mb-2">
             <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{product.category}</span>
           </div>
           <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter mb-4 leading-none">
             {product.name}
           </h1>
           <div className="flex items-center gap-4 mb-8">
             <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
             {product.originalPrice && (
               <span className="text-xl text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
             )}
           </div>

           <p className="text-lg text-muted-foreground leading-relaxed mb-10">
             {product.description}
           </p>

           {/* Colors */}
           {product.colors && product.colors.length > 0 && (
             <div className="mb-8">
               <h3 className="font-bold uppercase tracking-wide text-sm mb-4">Color</h3>
               <div className="flex flex-wrap gap-3">
                 {product.colors.map(color => (
                   <button
                     key={color}
                     onClick={() => setSelectedColor(color)}
                     className={`px-6 py-3 rounded-full border text-sm font-medium transition-all ${
                       selectedColor === color 
                        ? "border-foreground bg-foreground text-background" 
                        : "border-border hover:border-foreground"
                     }`}
                   >
                     {color}
                   </button>
                 ))}
               </div>
             </div>
           )}

           {/* Sizes */}
           {product.sizes && product.sizes.length > 0 && (
             <div className="mb-10">
               <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold uppercase tracking-wide text-sm">Size</h3>
                 <button className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">Size Guide</button>
               </div>
               <div className="grid grid-cols-4 gap-3">
                 {product.sizes.map(size => (
                   <button
                     key={size}
                     onClick={() => setSelectedSize(size)}
                     className={`py-3 rounded-xl border text-sm font-medium transition-all ${
                       selectedSize === size 
                        ? "border-foreground bg-foreground text-background" 
                        : "border-border hover:border-foreground"
                     }`}
                   >
                     {size}
                   </button>
                 ))}
               </div>
             </div>
           )}

           {/* Quantity and Actions */}
           <div className="flex flex-col sm:flex-row gap-4 mb-12">
             <div className="flex items-center border border-border rounded-xl px-4 py-2 h-14 shrink-0 bg-background">
               <button 
                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
                 className="p-2 text-muted-foreground hover:text-foreground"
               >
                 <Minus className="w-4 h-4" />
               </button>
               <span className="w-12 text-center font-bold text-lg">{quantity}</span>
               <button 
                 onClick={() => setQuantity(quantity + 1)}
                 className="p-2 text-muted-foreground hover:text-foreground"
               >
                 <Plus className="w-4 h-4" />
               </button>
             </div>
             
             <Button 
               onClick={handleAddToCart}
               size="lg" 
               className={`flex-grow h-14 rounded-xl text-base font-bold uppercase tracking-wide transition-all ${
                 isAdded ? "bg-green-600 hover:bg-green-700" : "bg-foreground text-background hover:bg-foreground/90"
               }`}
             >
               {isAdded ? (
                 <><Check className="mr-2 w-5 h-5" /> Added to Cart</>
               ) : (
                 <><ShoppingBag className="mr-2 w-5 h-5" /> Add to Cart</>
               )}
             </Button>
             
             <Button 
               onClick={() => toggleWishlist(product)}
               variant="outline" 
               size="lg" 
               className="h-14 w-14 p-0 shrink-0 rounded-xl border-border hover:border-foreground"
             >
               <Heart className={`w-5 h-5 ${inWishlist ? "fill-foreground" : ""}`} />
             </Button>
           </div>
           
           {/* Accordions / Extra Info */}
           <div className="border-t border-border pt-8 space-y-6">
              <div>
                <h4 className="font-bold uppercase tracking-wide text-sm mb-2">Delivery & Returns</h4>
                <p className="text-sm text-muted-foreground">Free express delivery on orders over ₹10,000. Easy 14-day returns.</p>
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-wide text-sm mb-2">Product Specifications</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Heavyweight 100% organic cotton</li>
                  <li>Pre-shrunk for zero shrinkage</li>
                  <li>Machine wash cold, lay flat to dry</li>
                  <li>Made in Italy</li>
                </ul>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
