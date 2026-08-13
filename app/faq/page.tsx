"use client";

import { useState } from "react";
import { IconChevronDown, IconBrandWhatsapp } from "@tabler/icons-react";
import MainWrapper from "@/components/shared/main-wrapper";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How do I place an order?",
    answer:
      "You can browse our cafe menu, add your favorite items to the cart, and click 'Proceed via WhatsApp'. This will automatically generate an order message and redirect you straight to our WhatsApp to confirm your delivery address and finalize the order.",
  },
  {
    question: "Is there a delivery fee?",
    answer:
      "We offer free doorstep delivery for all orders placed within a 3km radius around our shop! For locations outside the 3km radius, a standard nominal delivery fee applies depending on the distance.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open from Sunday to Friday between 10:00 AM and 9:00 PM. On Saturdays, we are closed for dine-in but available for special delivery orders upon prior notice.",
  },
  {
    question: "Can I customize my food or spice levels?",
    answer:
      "Yes! Since orders are finalized via WhatsApp, you can easily mention any special instructions or preferences (such as extra spicy, less oil, or specific dietary modifications) directly in your chat with us.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash on Delivery (COD) as well as popular digital mobile wallet transfers. You can coordinate your preferred payment method easily when confirming your order on WhatsApp.",
  },
  {
    question: "How can I contact you directly for urgent queries?",
    answer:
      "You can call us directly at our phone number listed in the 'Find Us' section or drop us a message anytime via WhatsApp for the fastest response.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MainWrapper>
      <div className="py-8 font-sans">
        <div className="mb-10 space-y-3 text-center md:text-left">
          <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            Got questions about our menu, delivery, or ordering process? Find
            answers to our most commonly asked questions below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-border bg-card overflow-hidden rounded-2xl border shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="text-foreground flex w-full cursor-pointer items-center justify-between p-5 text-left text-base font-semibold focus:outline-none sm:text-lg"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <IconChevronDown
                    className={`text-muted-foreground ml-4 size-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? "text-primary rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="text-muted-foreground border-border/50 border-t px-5 pt-3 pb-5 text-sm leading-relaxed sm:text-base">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="bg-secondary/10 border-border mt-12 space-y-4 rounded-3xl border p-6 text-center sm:p-8">
          <h3 className="text-foreground text-xl font-bold tracking-tight">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mx-auto max-w-md text-sm">
            If you couldn't find the answer you were looking for, feel free to
            reach out to us directly on WhatsApp.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/9779800000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:bg-green-700 active:scale-95"
            >
              <IconBrandWhatsapp className="size-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
