"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useStore } from "@/context/store-context";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal } = useStore();
  const [step, setStep] = useState(1);

  if (cart.length === 0) {
    if (typeof window !== "undefined") router.push("/shop");
    return null;
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else router.push("/success");
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-12 lg:pb-24 max-w-4xl">
      <h1 className="font-heading text-4xl font-bold uppercase tracking-tighter mb-8 text-center">Checkout</h1>

      {/* Progress */}
      <div className="flex items-center justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border -z-10"></div>
        <div className={`absolute top-1/2 left-0 h-[2px] bg-foreground -z-10 transition-all duration-500 ${step === 1 ? 'w-0' : step === 2 ? 'w-1/2' : 'w-full'}`}></div>
        
        {['Shipping', 'Payment', 'Review'].map((label, idx) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
              step >= idx + 1 ? 'bg-foreground text-background' : 'bg-background border-2 border-border text-muted-foreground'
            }`}>
              {idx + 1}
            </div>
            <span className={`text-xs font-bold uppercase tracking-wide ${step >= idx + 1 ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <form onSubmit={handleNextStep}>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-muted-foreground">First Name</label>
                    <Input required placeholder="John" className="h-12 bg-muted/30 border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-muted-foreground">Last Name</label>
                    <Input required placeholder="Doe" className="h-12 bg-muted/30 border-border" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-muted-foreground">Address</label>
                  <Input required placeholder="123 Street Name" className="h-12 bg-muted/30 border-border" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-muted-foreground">City</label>
                    <Input required placeholder="City" className="h-12 bg-muted/30 border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-muted-foreground">Postal Code</label>
                    <Input required placeholder="123456" className="h-12 bg-muted/30 border-border" />
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full h-14 mt-6">Continue to Payment</Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase text-muted-foreground">Card Number</label>
                  <Input required placeholder="0000 0000 0000 0000" className="h-12 bg-muted/30 border-border" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-muted-foreground">Expiry Date</label>
                    <Input required placeholder="MM/YY" className="h-12 bg-muted/30 border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase text-muted-foreground">CVC</label>
                    <Input required placeholder="123" type="password" className="h-12 bg-muted/30 border-border" />
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)} className="w-1/3 h-14">Back</Button>
                  <Button type="submit" size="lg" className="w-2/3 h-14">Review Order</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Review Your Order</h2>
                <div className="space-y-4">
                   <p className="text-muted-foreground text-sm">Please verify your items and shipping details before completing your purchase.</p>
                   {/* Simplified summary just for visual structure */}
                   <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                     <p className="font-bold mb-2">Shipping To:</p>
                     <p className="text-sm text-muted-foreground">John Doe<br/>123 Street Name<br/>City, 123456</p>
                   </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(2)} className="w-1/3 h-14">Back</Button>
                  <Button type="submit" size="lg" className="w-2/3 h-14 bg-foreground text-background">Complete Purchase</Button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="md:col-span-1">
          <div className="bg-muted/30 rounded-3xl p-6 sticky top-32 border border-border">
            <h3 className="font-bold uppercase tracking-wide mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground line-clamp-1 mr-4">{item.quantity}x {item.name}</span>
                  <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-4">
                <span>Total</span>
                <span>₹{cartTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
