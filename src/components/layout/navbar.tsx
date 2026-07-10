"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Search, User, Menu, X } from "lucide-react";
import { useStore } from "@/context/store-context";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, wishlist } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50 relative group">
          <span className="font-heading text-2xl font-bold tracking-tighter uppercase relative z-10">
            TNboy Thrift
          </span>
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-[2px] bg-foreground origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors py-1 group"
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-muted-foreground hover:text-foreground transition-colors relative group">
            <Search className="w-5 h-5" />
          </button>
          <Link href="/wishlist" className="text-muted-foreground hover:text-foreground transition-colors relative group">
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className="text-muted-foreground hover:text-foreground transition-colors relative group">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
            <User className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
           <Link href="/cart" className="text-foreground relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg p-6 md:hidden flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium tracking-wide ${
                    pathname === link.href ? "text-foreground font-bold" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <button className="flex flex-col items-center gap-1 text-muted-foreground">
                <Search className="w-5 h-5" />
                <span className="text-xs">Search</span>
              </button>
              <Link href="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center gap-1 text-muted-foreground relative">
                <div className="relative">
                   <Heart className="w-5 h-5" />
                   {wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-foreground text-background text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                      {wishlist.length}
                    </span>
                   )}
                </div>
                <span className="text-xs">Wishlist</span>
              </Link>
              <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center gap-1 text-muted-foreground">
                <User className="w-5 h-5" />
                <span className="text-xs">Account</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
