"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=2000&auto=format&fit=crop"
            alt="About TNBOY"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              Redefining premium streetwear with uncompromising quality and minimal aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter mb-6">The Fashion Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                TNBOY was born from a desire to bridge the gap between luxury fashion and everyday streetwear. We believe that premium clothing shouldn't be overly complicated or inaccessible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece we create is designed with purpose, focusing on perfect fits, superior materials, and minimal branding. Our collections are meant to be worn, lived in, and passed down.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-muted"
            >
              <Image
                src="https://images.unsplash.com/photo-1523398002811-999aa8e9f5b9?q=80&w=1000&auto=format&fit=crop"
                alt="Philosophy"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
