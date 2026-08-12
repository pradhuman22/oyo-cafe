"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { IconShoppingBag } from "@tabler/icons-react";

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
      <div className="flex h-20 items-center justify-between gap-4 px-4 md:px-6">
        {/* logo section */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/noodles.png"}
            alt="joy cafe and cloud kitchen"
            width={40}
            height={40}
            className="h-auto w-auto object-cover md:-mt-2.5"
            priority
            quality={75}
            aria-label="joy cafe and cloud kitchen"
          />
        </Link>
        {/* nagivation section */}
        <nav className="flex w-full max-w-[calc(50vw+415px)] items-center justify-between">
          <div>
            <ul className="text-primary/80 hidden items-center justify-center gap-6 text-xl font-medium md:flex">
              <li>
                <Link href={"#cafe-menu"} className="hover:text-primary">
                  Cafe Menu
                </Link>
              </li>
              <li>
                <Link href={"#about-us"} className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"#find-us"} className="hover:text-primary">
                  Find Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <Button
              size={"icon-lg"}
              variant={"secondary"}
              className={"cursor-pointer rounded-full"}
            >
              <IconShoppingBag className="size-6" aria-label="shopping bag" />
            </Button>
            <Button className={"text-lg font-medium capitalize"}>
              <Link href={"#offer"}>Offer Available</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
