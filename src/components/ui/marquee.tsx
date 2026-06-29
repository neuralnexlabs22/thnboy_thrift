import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  text: string;
  className?: string;
}

export function Marquee({ text, className }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap border-y border-border py-4 bg-background flex items-center relative", className)}>
      <div className="flex w-max animate-marquee">
        {/* Repeat the text multiple times to ensure continuous flow */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center px-4">
            <span className="font-heading text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-foreground opacity-10">
              {text}
            </span>
            <span className="mx-8 text-foreground/20 text-2xl">•</span>
          </div>
        ))}
      </div>
      <div className="flex w-max animate-marquee absolute top-4">
        {[...Array(6)].map((_, i) => (
          <div key={`dup-${i}`} className="flex items-center px-4">
            <span className="font-heading text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-foreground opacity-10">
              {text}
            </span>
            <span className="mx-8 text-foreground/20 text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
