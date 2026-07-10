"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useStore } from "@/context/store-context";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "T-shirts", href: "/collections/t-shirts" },
  { name: "Shirt", href: "/collections/shirt" },
  { name: "Jeans", href: "/collections/jeans" },
  { name: "Jersey", href: "/collections/jersey" },
  { name: "Thrifted Jackets", href: "/collections/thrifted-jackets" },
  { name: "Accessories", href: "/collections/accessories" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-black text-white text-center py-2 text-xs font-medium tracking-widest uppercase">
        Free Shipping on all orders over Rs. 3000
      </div>

      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-200 border-b ${
          isScrolled
            ? "bg-white border-gray-200 py-3"
            : "bg-white border-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo (Left) */}
          <Link href="/" className="flex-none mr-10">
            <span className="font-heading text-2xl md:text-3xl font-black tracking-tight">
              TNboy Thrift
            </span>
          </Link>

          {/* Desktop Navigation (Center/Left) */}
          <nav className="hidden md:flex flex-1 items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm text-gray-600 hover:text-black transition-colors ${
                    isActive ? "font-bold text-black" : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Icons (Right) */}
          <div className="flex flex-1 items-center justify-end gap-5">
            <button className="text-black hover:opacity-70 transition-opacity hidden md:block">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <Link href="/profile" className="text-black hover:opacity-70 transition-opacity hidden md:block">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <Link href="/cart" className="text-black hover:opacity-70 transition-opacity relative">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full h-[calc(100vh-100%)] bg-white border-t border-gray-100 overflow-y-auto md:hidden">
            <nav className="flex flex-col p-6 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-wide uppercase ${
                    pathname === link.href ? "underline underline-offset-4" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="p-6 bg-gray-50 flex items-center justify-center gap-8 border-t border-gray-100">
               <button className="flex flex-col items-center gap-2 text-black">
                <Search className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Search</span>
              </button>
              <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center gap-2 text-black">
                <User className="w-5 h-5" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Account</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
