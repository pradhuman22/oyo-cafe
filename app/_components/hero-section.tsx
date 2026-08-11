"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimateOnScroll from "@/components/shared/animate-on-scroll";
import { Badge } from "@/components/ui/badge";
import { IconStarFilled } from "@tabler/icons-react";

const HeroSection = () => {
  return (
    <section className="relative grid items-center gap-10 overflow-hidden py-20 md:grid-cols-2">
      {/* content section */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <Badge className="bg-accent text-accent-foreground mb-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm capitalize">
          <IconStarFilled className="fill-amber-400" />
          5.0 Rated Joy Cafe & Cloud Kitchen
        </Badge>
        <h1 className="mb-4 text-4xl leading-tight font-bold tracking-tight capitalize">
          Food That's Actually{" "}
          <span className="text-primary font-bold">Good </span> For You.
        </h1>
        <p className="text-secondary-foreground mb-6 text-lg">
          Joy Cafe and Cloud Kitchen brews handcrafted bubble tea and serves
          aromatic biryani, momo, and comfort food from the heart of Jyatha
          Marg. Cozy seating, warm smiles, and food made fresh to order.
        </p>

        <div className="mb-8 grid gap-4 md:flex md:items-center">
          <Button className="h-11 px-4 text-lg font-medium">
            <Link href={"/cafe-menu"}>Explore the Menu</Link>
          </Button>
        </div>
      </div>
      {/* image section */}
      <AnimateOnScroll>
        <div className="relative aspect-square w-auto md:-ml-20 md:h-145">
          <Image
            src={"/hero.png"}
            alt="hero"
            fill
            priority
            sizes="(min-width: 780px) 500px, calc(100vw - 24px)"
            className="object-contain"
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default HeroSection;
