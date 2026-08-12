"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  IconArrowLeft,
  IconArrowRight,
  IconQuote,
  IconStar,
} from "@tabler/icons-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  dishImage?: string;
  highlightCard?: {
    title: string;
    price: string;
    description: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Abdur Rahman",
    role: "Customer",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, ac dapibus sit eu velit in consequat.",
    rating: 5,
    dishImage:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&auto=format&fit=crop&q=80",
    highlightCard: {
      title: "Order now",
      price: "Rs. 1,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur elit. Quisque diam pellentesque bibendum fringilla bibendum. Urna, elit augue urna,",
    },
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Food Blogger",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    content:
      "The ambiance and the food quality here are absolutely phenomenal! Every single dish is packed with authentic flavors. Highly recommend trying out their special chowmein and momos. Truly a delightful experience for food lovers.",
    rating: 5,
    dishImage:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80",
    highlightCard: {
      title: "Special Chowmein",
      price: "Rs. 200",
      description:
        "Freshly tossed noodles with secret herbs, crisp vegetables, and succulent pieces of meat.",
    },
  },
  {
    id: "3",
    name: "John Doe",
    role: "Local Guide",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content:
      "Fast service, friendly staff, and mouth-watering dishes. Whether you are dropping by for a quick snack or a full meal, it never disappoints. Google Maps link provided for easy navigation to their location!",
    rating: 5,
    dishImage:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=80",
    highlightCard: {
      title: "Chicken Burger",
      price: "Rs. 200",
      description:
        "Juicy chicken patty layered with crisp lettuce, melted cheese, and signature house sauce.",
    },
  },
];

export function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="text-foreground relative overflow-hidden py-18 font-sans">
      <div>
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem key={item.id}>
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Left Column: Review Text & Details */}
                  <div className="space-y-6 lg:col-span-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium tracking-widest text-amber-600 uppercase">
                          Testimonials
                        </span>
                        <div className="h-px w-8 bg-amber-600" />
                      </div>
                      <h2 className="font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
                        Customer Review
                      </h2>
                    </div>

                    {/* Decorative Quote Icon */}
                    <div className="text-amber-600">
                      <IconQuote
                        className="h-10 w-10 rotate-180 opacity-80"
                        strokeWidth={1.5}
                      />
                    </div>

                    <p className="text-sm leading-relaxed font-light text-zinc-600 sm:text-base">
                      {item.content}
                    </p>

                    {/* Author Info & Navigation Controls */}
                    <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full shadow-sm">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(min-width: 780px) 500px, calc(100vw - 24px)"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-zinc-900">
                            {item.name}
                          </h4>
                          <p className="text-xs font-medium text-zinc-400">
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* Custom Carousel Navigation Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => api?.scrollPrev()}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-amber-600 hover:bg-amber-600 hover:text-white"
                          aria-label="Previous slide"
                        >
                          <IconArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => api?.scrollNext()}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-amber-600 hover:bg-amber-600 hover:text-white"
                          aria-label="Next slide"
                        >
                          <IconArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dish Image & Overlay Highlight Card */}
                  <div className="relative lg:col-span-6">
                    <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg sm:h-100">
                      {item.dishImage && (
                        <Image
                          src={item.dishImage}
                          alt="Featured dish"
                          fill
                          className="object-cover"
                          sizes="(min-width: 780px) 500px, calc(100vw - 24px)"
                          loading="eager"
                        />
                      )}
                    </div>
                    {/* Floating Product / Review Card */}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
