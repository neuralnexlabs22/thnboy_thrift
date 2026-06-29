"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-bold tracking-tighter uppercase mb-6">
              TNBOY
            </h2>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              Premium streetwear crafted with minimalist aesthetics and uncompromising quality. Join our community for exclusive drops.
            </p>
            <div className="flex items-center gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-muted-foreground/30 focus:border-background transition-colors outline-none px-4 py-3 w-full rounded-md text-sm text-background placeholder:text-muted-foreground"
              />
              <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-3 h-auto rounded-md font-medium">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 tracking-wide">Shop</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li>
                <Link href="/collections/new" className="hover:text-background transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link href="/collections/best-sellers" className="hover:text-background transition-colors">Best Sellers</Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-background transition-colors">Categories</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-6 tracking-wide">Support</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-background transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-background transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-muted-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} TNBOY Thrift. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-muted-foreground text-sm font-bold uppercase tracking-widest">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
              IG
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
              FB
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
              X
            </Link>
            <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
              WA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
