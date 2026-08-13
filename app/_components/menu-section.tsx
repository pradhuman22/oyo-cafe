"use client";

import { useState } from "react";
import { useCart, MenuItem } from "@/context/cart-context";

const menuData: Record<string, MenuItem[]> = {
  Noodles: [
    {
      id: "1",
      name: "Keema Noodles",
      description: "Savory spiced minced meat tossed with noodles",
      calories: "480 CAL",
      price: "Rs. 200",
    },
    {
      id: "2",
      name: "Veg Chowmein",
      description: "Stir-fried noodles with fresh garden vegetables",
      calories: "350 CAL",
      price: "Rs. 130",
    },
    {
      id: "3",
      name: "Chicken/Buff Chowmein",
      description: "Stir-fried noodles with choice of chicken or buffalo meat",
      calories: "420 CAL",
      price: "Rs. 150",
    },
    {
      id: "4",
      name: "Egg Chowmein",
      description: "Classic stir-fried noodles tossed with scrambled egg",
      calories: "390 CAL",
      price: "Rs. 140",
    },
    {
      id: "5",
      name: "Mix Chowmein",
      description: "Special combination mix of noodles, meat, and eggs",
      calories: "460 CAL",
      price: "Rs. 200",
    },
  ],
  Rice: [
    {
      id: "1",
      name: "Veg Fried Rice",
      description: "Wok-tossed aromatic rice with seasoned vegetables",
      calories: "380 CAL",
      price: "Rs. 130",
    },
    {
      id: "2",
      name: "Egg Fried Rice",
      description: "Wok-tossed rice tossed with scrambled egg and scallions",
      calories: "410 CAL",
      price: "Rs. 150",
    },
    {
      id: "3",
      name: "Chicken Fried Rice",
      description: "Flavorful fried rice loaded with tender chicken pieces",
      calories: "450 CAL",
      price: "Rs. 180",
    },
    {
      id: "4",
      name: "Mix Fried Rice",
      description: "Comprehensive mix fried rice with assorted proteins",
      calories: "490 CAL",
      price: "Rs. 220",
    },
  ],
  "Soup & Thupa": [
    {
      id: "1",
      name: "Veg Thukpa",
      description: "Hearty Himalayan noodle soup with mixed vegetables",
      calories: "310 CAL",
      price: "Rs. 140",
    },
    {
      id: "2",
      name: "Chicken/Buff Thukpa",
      description: "Warm noodle soup served with chicken or buffalo meat",
      calories: "380 CAL",
      price: "Rs. 160",
    },
    {
      id: "3",
      name: "Mix Thukpa",
      description: "Loaded noodle broth with mixed meats and vegetables",
      calories: "420 CAL",
      price: "Rs. 200",
    },
    {
      id: "4",
      name: "Wai Wai Soup",
      description: "Instant noodle soup cooked with special spices",
      calories: "290 CAL",
      price: "Rs. 100",
    },
    {
      id: "5",
      name: "Wai Wai Egg Soup",
      description: "Wai Wai soup topped with a cooked egg",
      calories: "350 CAL",
      price: "Rs. 120",
    },
    {
      id: "6",
      name: "Wai Wai Egg Fry",
      description: "Crunchy stir-fried Wai Wai noodles with egg",
      calories: "380 CAL",
      price: "Rs. 130",
    },
  ],
  "Mo:Mo": [
    {
      id: "16",
      name: "Veg Mo:Mo (Steam/Fried/Jhol/Chilly)",
      description: "Traditional dumplings served in your choice of style",
      calories: "320 CAL",
      price: "Rs. 130 - 180",
    },
    {
      id: "17",
      name: "Steam Chicken/Buff Mo:Mo",
      description: "Delicately steamed dumplings stuffed with chicken or buff",
      calories: "360 CAL",
      price: "Rs. 150",
    },
    {
      id: "18",
      name: "Fried Chicken/Buff Mo:Mo",
      description: "Crispy pan-fried dumplings with chicken or buff filling",
      calories: "410 CAL",
      price: "Rs. 170",
    },
    {
      id: "19",
      name: "Jhol Mo:Mo Chicken/Buff",
      description: "Dumplings submerged in flavorful traditional spiced broth",
      calories: "390 CAL",
      price: "Rs. 180",
    },
    {
      id: "20",
      name: "Chilly Mo:Mo",
      description: "Tossed in a spicy, tangy, and savory chili glaze",
      calories: "440 CAL",
      price: "Rs. 190",
    },
    {
      id: "21",
      name: "Special Chicken Keema Jhol Mo:Mo",
      description: "Juicy chicken keema dumplings served in rich jhol gravy",
      calories: "510 CAL",
      price: "Rs. 250",
    },
  ],
  Roll: [
    {
      id: "22",
      name: "Chicken Roll",
      description: "Juicy spiced chicken wrapped in a soft flatbread",
      calories: "420 CAL",
      price: "Rs. 150",
    },
    {
      id: "23",
      name: "Egg Roll",
      description: "Scrambled egg wrapped with fresh veggies and sauces",
      calories: "360 CAL",
      price: "Rs. 120",
    },
    {
      id: "24",
      name: "Paneer Roll",
      description: "Marinated paneer chunks wrapped in a warm roll",
      calories: "390 CAL",
      price: "Rs. 150",
    },
    {
      id: "25",
      name: "Chicken + Egg Roll",
      description: "Combination wrap packed with chicken and egg",
      calories: "480 CAL",
      price: "Rs. 200",
    },
  ],
  Burger: [
    {
      id: "26",
      name: "Chicken Burger",
      description: "Classic burger with savory chicken patty and crisp lettuce",
      calories: "520 CAL",
      price: "Rs. 200",
    },
    {
      id: "27",
      name: "Chicken Cheese Burger",
      description: "Chicken burger loaded with melted cheese slice",
      calories: "580 CAL",
      price: "Rs. 250",
    },
    {
      id: "28",
      name: "Veg Burger",
      description: "Plant-based vegetable patty with fresh greens",
      calories: "410 CAL",
      price: "Rs. 150",
    },
    {
      id: "29",
      name: "Veg Cheese Burger",
      description: "Vegetable burger topped with melted cheese",
      calories: "470 CAL",
      price: "Rs. 200",
    },
    {
      id: "30",
      name: "Veg Sandwich",
      description: "Freshly layered vegetable sandwich with spread",
      calories: "290 CAL",
      price: "Rs. 100",
    },
    {
      id: "31",
      name: "Egg Sandwich",
      description: "Simple and delicious egg-filled sandwich",
      calories: "340 CAL",
      price: "Rs. 120",
    },
    {
      id: "32",
      name: "Chicken Sandwich",
      description: "Filled with seasoned shredded chicken and dressing",
      calories: "410 CAL",
      price: "Rs. 140",
    },
  ],
};

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Noodles");
  const { addToCart } = useCart();

  const categories = Object.keys(menuData);
  const currentItems = menuData[activeCategory] || [];

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