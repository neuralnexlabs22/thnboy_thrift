"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-sm mb-6 tracking-wide uppercase">Shop</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link href="/collections/all" className="hover:text-black transition-colors">Shop All</Link>
              </li>
              <li>
                <Link href="/collections/new-arrivals" className="hover:text-black transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link href="/collections/tops" className="hover:text-black transition-colors">Tops</Link>
              </li>
              <li>
                 <Link href="/collections/bottoms" className="hover:text-black transition-colors">Bottoms</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-sm mb-6 tracking-wide uppercase">Info</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link href="/pages/contact" className="hover:text-black transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/pages/shipping" className="hover:text-black transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="/pages/terms" className="hover:text-black transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/pages/privacy" className="hover:text-black transition-colors">Refund policy</Link>
              </li>
            </ul>
          </div>

           {/* Brand & Newsletter */}
          <div className="md:col-span-6 md:pl-10">
            <h3 className="font-bold text-sm mb-6 tracking-wide uppercase">Newsletter</h3>
            <p className="text-gray-600 text-sm max-w-sm mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex w-full max-w-md border border-black" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent flex-1 outline-none px-4 py-3 text-sm text-black placeholder:text-gray-500"
                required
              />
              <button 
                type="submit"
                className="bg-transparent text-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors border-l border-black"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-6 text-black text-xl">
             {/* Social Icons would go here */}
          </div>
          <div className="flex gap-2 opacity-50 grayscale">
            {/* Payment icons could go here */}
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
            <div className="w-10 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
        
        <div className="mt-6 text-center md:text-left">
          <p className="text-gray-400 text-xs">
             &copy; {new Date().getFullYear()}, <Link href="/" className="hover:underline">TNboy Thrift</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
