"use client";

import { useState, useEffect } from "react";
import { useCart, MenuItem } from "@/context/cart-context";
import { IconLoader2 } from "@tabler/icons-react";

export function MenuSection() {
  const [menuData, setMenuData] = useState<Record<string, MenuItem[]>>({});
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch("/api/menu");
        const data = await res.json();
        if (data && !data.error) {
          setMenuData(data);
          const firstCategory = Object.keys(data)[0];
          if (firstCategory) {
            setActiveCategory(firstCategory);
          }
        }
      } catch (error) {
        console.error("Error loading menu:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMenu();
  }, []);

  const categories = Object.keys(menuData);
  const currentItems = menuData[activeCategory] || [];

  if (isLoading) {
    return (
      <section className="flex min-h-75 items-center justify-center py-18">
        <div className="text-muted-foreground flex items-center gap-2">
          <IconLoader2 className="text-primary size-6 animate-spin" />
          <span className="text-sm font-medium">Loading menu items...</span>
        </div>
      </section>
    );
  }

  if (categories.length === 0) {
    return null;
  }

  return (
    <section
      className="relative overflow-hidden py-18 font-sans"
      id="cafe-menu"
    >
      <div className="space-y-6">
        {/* Header with Title and Mobile Dropdown side-by-side */}
        <div className="flex items-center justify-between gap-4 px-2 sm:px-0">
          <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-4xl">
            Cafe Menu
          </h2>

          {/* Mobile Dropdown View on Right */}
          <div className="sm:hidden">
            <select
              id="category-select"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="border-border focus:ring-primary text-foreground focus:border-primary rounded-lg border bg-white px-3 py-2 text-xs font-medium shadow-sm focus:ring-2 focus:outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Tab View */}
        <div className="hidden sm:block">
          <div className="no-scrollbar border-border flex items-center justify-start gap-6 overflow-x-auto border-b pb-3 text-base md:text-lg lg:gap-10">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative shrink-0 cursor-pointer pb-3 font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  {isActive && (
                    <span className="bg-primary absolute right-0 bottom-0 left-0 -mb-3.25 h-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items List */}
        <div className="grid grid-cols-1 gap-4 pt-2 sm:gap-6 md:grid-cols-2">
          {currentItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="border-border flex flex-col justify-between space-y-3 rounded-xl border p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5"
            >
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-foreground text-base leading-snug font-semibold sm:text-lg">
                    {item.name}
                  </h3>
                  <span className="text-primary shrink-0 text-base font-bold sm:text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed font-light sm:text-sm">
                  {item.description}
                </p>
              </div>

              <div className="border-border flex items-center justify-between border-t pt-2">
                <span className="text-muted-foreground rounded px-2 py-0.5 text-[11px] font-medium tracking-wider uppercase">
                  {item.calories}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  className="bg-primary text-background hover:bg-primary/90 flex cursor-pointer touch-manipulation items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium tracking-wide shadow-sm transition-all active:scale-95"
                >
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}