"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconFlame, IconArrowRight, IconSoup } from "@tabler/icons-react";

export function OfferSection() {
  return (
    <section className="relative overflow-hidden py-12 font-sans" id="offer">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-amber-500 via-orange-500 to-red-500 p-8 text-white shadow-xl md:p-12">
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-black/10 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold tracking-wider uppercase backdrop-blur-md md:text-sm">
              <IconFlame className="size-4 animate-bounce text-yellow-200" />
              <span>Today's Special Deal</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl">
              Combo Set at an Unbeatable Price!
            </h2>
            <p className="max-w-xl text-sm font-light text-white/90 md:text-base">
              Grab our exclusive Chef’s Special Combo—featuring steaming hot
              Momos, Noodles, and Soup—all bundled together for a super value
              price today!
            </p>
          </div>

          <div className="flex shrink-0">
            <Button
              size="lg"
              className="cursor-pointer rounded-xl bg-white px-6 py-3 text-base font-bold text-orange-600 shadow-lg transition-transform hover:bg-white/90 active:scale-95"
            >
              <Link href="#cafe-menu" className="flex items-center gap-2">
                <IconSoup className="size-5" />
                <span>Check Menu</span>
                <IconArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
