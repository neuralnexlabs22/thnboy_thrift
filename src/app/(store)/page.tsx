"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { PRODUCTS } from "@/lib/data";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          {/* We use an image that has a similar vibe to thefinalfit */}
          <Image
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover object-top brightness-[0.8]"
            priority
          />
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase mb-6 drop-shadow-lg">
              TNboy Thrift
            </h1>
            <p className="text-lg md:text-xl font-medium tracking-wide uppercase mb-10 max-w-lg drop-shadow-md">
              Premium Collection
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/shop" 
                className="bg-white text-black px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-white/90 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">Featured</h2>
            <div className="w-12 h-1 bg-foreground mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] mb-4 overflow-hidden bg-muted">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-white text-black text-xs font-bold uppercase tracking-wider px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                </Link>
                <div className="flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-1 group-hover:underline underline-offset-4">
                      {product.name}
                    </h3>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    ₹{product.price.toLocaleString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/shop" 
              className="inline-block border border-foreground px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full"
            >
              <Image 
                src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop" 
                alt="Editorial" 
                fill 
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center px-4 md:px-12 py-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-6">
                The Archive
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-md">
                Discover pieces that transcend seasons. Curated essentials designed with uncompromising quality and minimal aesthetics.
              </p>
              <Link 
                href="/collections" 
                className="self-start border-b-2 border-foreground pb-1 font-bold tracking-widest uppercase text-sm hover:opacity-70 transition-opacity"
              >
                Explore Collections
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
