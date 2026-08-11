import Image from "next/image";
import { IconClock, IconToolsKitchen } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-18">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* image section */}
        <div className="relative flex h-100 w-full items-center justify-center overflow-hidden rounded-2xl border shadow-xl md:h-120">
          <Image
            src={"/about.png"}
            alt="about-us"
            sizes="(min-width: 780px) 418px, calc(90.65vw - 27px)"
            fill
            priority
          />
        </div>
        <div className="w-full space-y-6">
          <div className="space-y-3">
            <span className="border-primary text-primary inline-block rounded-full border px-3 py-1 text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Serving Comfort, Quality, and Joy in Kathmandu
            </h2>
            <p className="text-secondary-foreground text-base leading-relaxed md:text-lg">
              Nestled in the heart of Kathmandu,{" "}
              <span className="text-foreground font-semibold">
                Joy Cafe and Cloud Kitchen
              </span>{" "}
              is your go-to destination for exceptional flavors and a warm,
              inviting atmosphere. We blend a cozy dine-in experience with a
              fast, modern cloud kitchen.
            </p>
          </div>
          <div>
            <Button>
              <Link href={"/about-us"}>Read more..</Link>
            </Button>
          </div>
          {/* <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="bg-muted text-primary mt-0.5 shrink-0 rounded-lg p-2">
                <IconToolsKitchen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Culinary Excellence</h3>
                <p className="mt-0.5 text-base">
                  A cozy space designed for relaxation and great conversations.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-muted text-primary mt-0.5 shrink-0 rounded-lg p-2">
                <IconClock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Speed & Convenience</h3>
                <p className="mt-0.5 text-base">
                  Seamless delivery straight to your doorstep.
                </p>
              </div>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
