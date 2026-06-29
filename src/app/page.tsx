"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { CATEGORIES, PRODUCTS } from "@/lib/data";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-foreground text-background">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=2000&auto=format&fit=crop"
            alt="Streetwear Hero"
            fill
            className="object-cover object-center opacity-40 mix-blend-overlay"
            priority
          />
        </motion.div>
        
        <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h2 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-background"></span>
              New Collection
            </h2>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Built For<br />Every Street.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12">
              Premium fits. New pieces just landed. Redefining modern streetwear with uncompromising quality and minimal aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button asChild size="lg" className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 rounded-none h-14 px-8 text-base font-bold uppercase tracking-wide">
                <Link href="/shop">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Spinning Badge */}
        <div className="absolute bottom-12 right-12 z-20 hidden md:flex items-center justify-center mix-blend-difference pointer-events-none">
          <svg className="w-32 h-32 animate-spin-slow" viewBox="0 0 100 100">
            <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
            <text className="font-heading font-bold text-xs uppercase tracking-[0.25em]" fill="currentColor">
              <textPath href="#textPath" startOffset="0%">
                PREMIUM STREETWEAR • ORIGINAL ARCHIVE • EST 2026 • 
              </textPath>
            </text>
          </svg>
          <div className="absolute font-black text-xl">TN</div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee text="PREMIUM STREETWEAR • LIMITED DROPS • WORLDWIDE SHIPPING" className="py-6 border-y-0" />

      {/* Featured Categories */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter">Shop by Category</h2>
            </div>
            <Link href="/categories" className="text-sm font-bold uppercase tracking-wide flex items-center gap-2 hover:opacity-70 transition-opacity">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/category/${category.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-muted">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <h3 className="text-center font-bold uppercase tracking-wide text-sm">{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter">New Arrivals</h2>
            </div>
            <Link href="/shop?filter=new" className="text-sm font-bold uppercase tracking-wide flex items-center gap-2 hover:opacity-70 transition-opacity">
              Shop All <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted mb-6">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 left-4 bg-background text-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                        New
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold text-lg leading-tight mb-1 group-hover:underline underline-offset-4">{product.name}</h3>
                      <p className="text-muted-foreground text-sm">{product.category}</p>
                    </div>
                    <p className="font-bold whitespace-nowrap">₹{product.price.toLocaleString()}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mystery Bundle Promo Removed */}
    </div>
  );
}
