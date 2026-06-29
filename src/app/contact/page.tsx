"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 pt-32 pb-12 lg:pb-24 max-w-6xl">
      <div className="mb-16 text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We're here to help. Reach out to us for any inquiries regarding our collections, sizing, or your recent order.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-wide">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-muted-foreground">Name</label>
                <Input required placeholder="Your name" className="h-12 bg-muted/30 border-border" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase text-muted-foreground">Email</label>
                <Input required type="email" placeholder="your@email.com" className="h-12 bg-muted/30 border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-muted-foreground">Subject</label>
              <Input required placeholder="Order inquiry, Returns, etc." className="h-12 bg-muted/30 border-border" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase text-muted-foreground">Message</label>
              <Textarea required placeholder="How can we help you?" className="min-h-[150px] bg-muted/30 border-border resize-none" />
            </div>
            <Button type="submit" size="lg" className="w-full h-14 uppercase font-bold tracking-wide">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-wide">Visit Our Studio</h2>
            <div className="bg-muted aspect-video rounded-3xl flex items-center justify-center border border-border mb-8 overflow-hidden relative group cursor-pointer">
              {/* Google Maps Placeholder */}
              <div className="absolute inset-0 bg-muted/80 flex items-center justify-center flex-col gap-2 transition-opacity group-hover:opacity-80">
                 <MapPin className="w-8 h-8 text-foreground" />
                 <span className="font-bold tracking-wide uppercase">Open in Maps</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-sm mb-1">Address</h3>
                  <p className="text-muted-foreground">123 Streetwear Ave<br />Fashion District<br />Mumbai, 400001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-sm mb-1">Email</h3>
                  <p className="text-muted-foreground">support@tnboy.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-sm mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-foreground text-background p-8 rounded-3xl">
             <h3 className="font-bold uppercase tracking-wide mb-2">Business Hours</h3>
             <ul className="space-y-2 text-sm text-background/80">
               <li className="flex justify-between"><span>Monday - Friday</span> <span>10:00 AM - 7:00 PM</span></li>
               <li className="flex justify-between"><span>Saturday</span> <span>11:00 AM - 5:00 PM</span></li>
               <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
