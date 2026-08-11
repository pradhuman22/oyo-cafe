"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-50 transition-all duration-150 ease-in-out"
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
        <nav className="flex w-full max-w-[calc(50vw+400px)] items-center justify-between">
          <div>
            <div className="hidden items-center justify-center md:flex">
              <Button variant={"ghost"}>
                <Link href={"#cafe-menu"} className="text-base font-medium">
                  Cafe Menu
                </Link>
              </Button>
              <Button variant={"ghost"}>
                <Link href={"#about-us"} className="text-base font-medium">
                  About Us
                </Link>
              </Button>
              <Button variant={"ghost"}>
                <Link href={"#find-us"} className="text-base font-medium">
                  Find Us
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <Button>
              <Link href={"#offer"}>Offer Available</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
