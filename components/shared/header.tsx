"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 96);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-50 transition-all duration-150 ease-in-out",
        {
          "bg-background/95 border-b backdrop-blur-md": isScrolled,
        }
      )}
    >
      <div className="flex h-24 items-center justify-between gap-4 px-4 md:px-6">
        {/* logo section */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/noodles.png"}
            alt="joy cafe and cloud kitchen"
            width={40}
            height={40}
            className="h-10 w-10 object-cover md:-mt-2.5"
            priority
            quality={75}
            aria-label="joy cafe and cloud kitchen"
          />
        </Link>
        {/* nagivation section */}
        <nav className="flex w-full max-w-[calc(50vw+440px)] items-center justify-between">
          <div className="hidden items-center justify-center md:flex">
            <Button variant={"ghost"} className="text-lg font-medium">
              <Link href={"#cafe-menu"}>Cafe Menu</Link>
            </Button>
            <Button variant={"ghost"} className="text-lg font-medium">
              <Link href={"#about-us"}>About Us</Link>
            </Button>
            <Button variant={"ghost"} className="text-lg font-medium">
              <Link href={"#find-us"}>Find Us</Link>
            </Button>
          </div>
          <div>
            <Button className={"text-lg font-medium"}>
              <Link href={"#offer"}>Offer Available</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
