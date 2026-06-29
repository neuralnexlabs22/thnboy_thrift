"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { CATEGORIES, PRODUCTS } from "@/lib/data";

import { Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
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
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
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
      <section className="pt-16 pb-24 bg-background">
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
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
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
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
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

      {/* Editorial Lookbook */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter">The Lookbook</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">Curated fits from our latest archive. Exploring the intersection of utilitarian design and modern silhouettes.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <motion.div 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}
               className="md:col-span-7 relative h-[500px] md:h-[700px] rounded-2xl overflow-hidden group"
            >
              <Image src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2000&auto=format&fit=crop" alt="Lookbook 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            </motion.div>
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} viewport={{ once: true }}
                 className="relative flex-1 rounded-2xl overflow-hidden group min-h-[300px]"
              >
                <Image src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=1000&auto=format&fit=crop" alt="Lookbook 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
              </motion.div>
              <motion.div 
                 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} viewport={{ once: true }}
                 className="relative flex-1 rounded-2xl overflow-hidden group bg-muted p-8 flex flex-col justify-end min-h-[300px] border border-border"
              >
                 <h3 className="font-heading text-3xl font-black uppercase tracking-tighter mb-4">Edition 01</h3>
                 <p className="text-muted-foreground mb-6">Explore the full campaign for our introductory collection.</p>
                 <Button variant="outline" className="w-fit rounded-full uppercase tracking-wider font-bold">View Campaign</Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Values Bento */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter">Zero Compromise</h2>
            <p className="text-muted-foreground mt-4">We believe in creating pieces that last a lifetime. Built with purpose, crafted with precision.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="bg-background/5 rounded-2xl p-8 lg:p-12 border border-background/10 hover:bg-background/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground font-bold mb-8">01</div>
                <h3 className="font-bold text-2xl uppercase tracking-tighter mb-4">Heavyweight Cotton</h3>
                <p className="text-muted-foreground">Custom milled 450GSM organic cotton. Unparalleled structure and comfort that gets better with every wear.</p>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="bg-background/5 rounded-2xl p-8 lg:p-12 border border-background/10 hover:bg-background/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground font-bold mb-8">02</div>
                <h3 className="font-bold text-2xl uppercase tracking-tighter mb-4">Ethical Production</h3>
                <p className="text-muted-foreground">Every piece is manufactured in certified factories with fair wages and sustainable, low-impact processes.</p>
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }} className="bg-background/5 rounded-2xl p-8 lg:p-12 border border-background/10 hover:bg-background/10 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground font-bold mb-8">03</div>
                <h3 className="font-bold text-2xl uppercase tracking-tighter mb-4">Limited Runs</h3>
                <p className="text-muted-foreground">No mass production. We create highly limited drops to ensure exclusivity and eliminate deadstock waste.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Community / Instagram Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tighter">Community</h2>
              <p className="text-muted-foreground mt-4 max-w-xl">Tag @tnboy on Instagram to be featured on our page.</p>
            </div>
            <Link href="#" className="text-sm font-bold uppercase tracking-wide flex items-center gap-2 hover:opacity-70 transition-opacity">
              Follow Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop",
            ].map((img, i) => (
               <motion.a 
                 key={i} href="#" target="_blank"
                 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}
                 className="relative aspect-square rounded-2xl overflow-hidden group bg-muted"
               >
                 <Image src={img} alt="Community post" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                       View Post <ArrowRight className="w-4 h-4" />
                    </span>
                 </div>
               </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
