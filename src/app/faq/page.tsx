"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Where do you ship?",
    answer: "We currently ship worldwide. Free express shipping is available on all domestic orders and international orders over ₹15,000."
  },
  {
    question: "How long does shipping take?",
    answer: "Domestic orders take 2-4 business days. International orders typically take 5-10 business days depending on the destination."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and have original tags attached. The Mystery Bundle is exempt from returns."
  },
  {
    question: "How do your clothes fit?",
    answer: "Our collections generally feature an oversized, relaxed fit typical of modern streetwear. If you prefer a more standard fit, we recommend sizing down. Please check the size guide on each product page for specific measurements."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you will receive a confirmation email with a tracking number and a link to track your package."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-12 lg:pb-24 max-w-3xl">
      <div className="mb-12 text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">FAQ</h1>
        <p className="text-lg text-muted-foreground">
          Got questions? We've got answers.
        </p>
      </div>
      
      <div className="bg-background rounded-3xl">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-bold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
