import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-32 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="font-heading text-8xl md:text-9xl font-black uppercase tracking-tighter mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-10 text-lg">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild size="lg" className="rounded-xl h-14 px-10 text-base font-bold uppercase tracking-wide">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
