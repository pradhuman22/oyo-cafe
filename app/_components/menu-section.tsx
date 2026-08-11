"use client";

import { useState } from "react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  calories: string;
  price: string;
}

const menuData: Record<string, MenuItem[]> = {
  "Noodles / Chowmein / Rice": [
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
      name: "Chicken / Buff Chowmein",
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
    {
      id: "6",
      name: "Veg Fried Rice",
      description: "Wok-tossed aromatic rice with seasoned vegetables",
      calories: "380 CAL",
      price: "Rs. 130",
    },
    {
      id: "7",
      name: "Egg Fried Rice",
      description: "Wok-tossed rice tossed with scrambled egg and scallions",
      calories: "410 CAL",
      price: "Rs. 150",
    },
    {
      id: "8",
      name: "Chicken Fried Rice",
      description: "Flavorful fried rice loaded with tender chicken pieces",
      calories: "450 CAL",
      price: "Rs. 180",
    },
    {
      id: "9",
      name: "Mix Fried Rice",
      description: "Comprehensive mix fried rice with assorted proteins",
      calories: "490 CAL",
      price: "Rs. 220",
    },
    {
      id: "10",
      name: "Veg Thukpa",
      description: "Hearty Himalayan noodle soup with mixed vegetables",
      calories: "310 CAL",
      price: "Rs. 140",
    },
    {
      id: "11",
      name: "Chicken / Buff Thukpa",
      description: "Warm noodle soup served with chicken or buffalo meat",
      calories: "380 CAL",
      price: "Rs. 160",
    },
    {
      id: "12",
      name: "Mix Thukpa",
      description: "Loaded noodle broth with mixed meats and vegetables",
      calories: "420 CAL",
      price: "Rs. 200",
    },
    {
      id: "13",
      name: "Wai Wai Soup",
      description: "Instant noodle soup cooked with special spices",
      calories: "290 CAL",
      price: "Rs. 100",
    },
    {
      id: "14",
      name: "Wai Wai Soup w/ Egg",
      description: "Wai Wai soup topped with a cooked egg",
      calories: "350 CAL",
      price: "Rs. 120",
    },
    {
      id: "15",
      name: "Wai Wai Fry w/ Egg",
      description: "Crunchy stir-fried Wai Wai noodles with egg",
      calories: "380 CAL",
      price: "Rs. 130",
    },
  ],
  "Mo:Mo": [
    {
      id: "16",
      name: "Veg Mo:Mo (Steam / Fried / Jhol / Chilly)",
      description: "Traditional dumplings served in your choice of style",
      calories: "320 CAL",
      price: "Rs. 130 - 180",
    },
    {
      id: "17",
      name: "Steam Chicken / Buff Mo:Mo",
      description: "Delicately steamed dumplings stuffed with chicken or buff",
      calories: "360 CAL",
      price: "Rs. 150",
    },
    {
      id: "18",
      name: "Fried Chicken / Buff Mo:Mo",
      description: "Crispy pan-fried dumplings with chicken or buff filling",
      calories: "410 CAL",
      price: "Rs. 170",
    },
    {
      id: "19",
      name: "Jhol Mo:Mo Chicken / Buff",
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
  "Burger & Sandwich": [
    {
      id: "26",
      name: "Chicken Burger",
      description: "Classic burger with savory chicken patty and crisp lettuce",
      calories: "520 CAL",
      price: "Rs. 200",
    },
    {
      id: "27",
      name: "Chicken Burger w/ Cheese",
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
      name: "Veg Burger w/ Cheese",
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
  const [activeCategory, setActiveCategory] = useState<string>(
    "Noodles / Chowmein / Rice"
  );
  const categories = Object.keys(menuData);
  const currentItems = menuData[activeCategory] || [];

  const handleAddToCart = (item: MenuItem) => {
    // Add your cart logic here
    console.log("Added to cart:", item.name);
  };

  return (
    <section
      className="text-foreground relative overflow-hidden py-20 font-sans"
      id="cafe-menu"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">
            Cafe Menu
          </h2>
        </div>

        {/* Category Navigation Tabs */}
        <div className="no-scrollbar border-border flex items-center justify-start gap-4 overflow-x-auto border-b pb-3 text-sm sm:justify-center sm:gap-8 md:gap-10 md:text-base">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative shrink-0 pb-3 font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-secondary-foreground"
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

        {/* Menu Items Grid (2 Columns) */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 pt-4 md:grid-cols-2">
          {currentItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="border-border flex items-start justify-between gap-4 border-b border-dashed pb-6"
            >
              <div className="space-y-1 pr-4">
                <h3 className="text-foreground text-base font-semibold md:text-lg">
                  {item.name}
                </h3>
                <p className="text-secondary-foreground text-xs font-light md:text-sm">
                  {item.description}
                </p>
                <span className="text-secondary-foreground inline-block pt-1 text-[11px] font-medium tracking-wider uppercase">
                  {item.calories}
                </span>
              </div>
              <div className="flex h-full shrink-0 flex-col items-end justify-between gap-3">
                <span className="text-primary text-lg font-bold md:text-xl">
                  {item.price}
                </span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-primary text-primary-foreground hover:bg-primary rounded px-3 py-1.5 text-xs font-medium tracking-wide shadow-sm transition-colors"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
