"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-6 py-32 flex flex-col items-center text-center">
      <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8">
        <CheckCircle className="w-12 h-12" />
      </div>
      <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">Order Confirmed</h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
        Thank you for your purchase. We've received your order and are currently processing it. You'll receive a confirmation email shortly.
      </p>
      <Button asChild size="lg" className="rounded-xl h-14 px-10 text-base font-bold uppercase tracking-wide">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
