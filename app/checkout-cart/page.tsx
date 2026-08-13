"use client";

import Link from "next/link";
import { useCart } from "@/context/cart-context"; // Adjust import path if needed
import { Button } from "@/components/ui/button";
import {
  IconTrash,
  IconPlus,
  IconMinus,
  IconArrowLeft,
  IconShoppingBag,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function CheckoutCartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItemsCount } =
    useCart();

  // Helper to parse price string like "Rs. 200" or ranges like "Rs. 130 - 180" into a usable number
  const parsePrice = (priceStr: string) => {
    const matches = priceStr.match(/\d+/g);
    if (!matches) return 0;
    return parseInt(matches[0], 10);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const grandTotal = subtotal + deliveryFee;

  // Function to handle WhatsApp Checkout
  const handleWhatsAppCheckout = () => {
    // Retrieve mobile number from environment variable (must be prefixed with NEXT_PUBLIC_ for client-side access)
    const phoneNumber =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779800000000";

    // Construct the order message
    let message = "Hello, I would like to place an order:%0A%0A";

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (Qty: ${item.quantity}) - ${item.price} each%0A`;
    });

    message += `%0A*Subtotal:* Rs. ${subtotal}`;
    message += `%0A*Delivery Fee:* Rs. ${deliveryFee}`;
    message += `%0A*Total Amount:* Rs. ${grandTotal}`;
    message += `%0A%0APlease confirm my order. Thank you!`;

    // Open WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center font-sans">
        <div className="bg-secondary/20 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full">
          <IconShoppingBag className="text-muted-foreground size-12" />
        </div>
        <h2 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
          Your Cart is Empty
        </h2>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          Looks like you haven't added any delicious items to your cart yet.
        </p>
        <div className="mt-8">
          <Button className="rounded-xl px-6 py-2.5 text-base font-medium">
            <Link href="/#cafe-menu">Explore Menu</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 font-sans md:px-6">
      {/* Back to Menu Link */}
      <div className="mb-8">
        <Link
          href="/#cafe-menu"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <IconArrowLeft className="size-4" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
        Review Your Order
      </h1>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Cart Items List */}
        <div className="space-y-4 lg:col-span-8">
          {cart.map((item) => {
            const itemNumericPrice = parsePrice(item.price);
            return (
              <div
                key={item.id}
                className="border-border flex flex-col justify-between gap-4 rounded-2xl border p-4 shadow-xs sm:flex-row sm:items-center sm:p-6"
              >
                <div className="space-y-1">
                  <h3 className="text-foreground text-base font-semibold sm:text-lg">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {item.description}
                  </p>
                  <span className="text-primary block pt-1 text-sm font-bold">
                    {item.price}
                  </span>
                </div>

                <div className="flex items-center justify-between sm:justify-end sm:gap-6">
                  {/* Quantity Controls */}
                  <div className="border-border flex items-center rounded-lg border bg-white shadow-xs">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-muted-foreground hover:text-foreground cursor-pointer p-2 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <IconMinus className="size-3.5" />
                    </button>
                    <span className="text-foreground px-3 text-xs font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-muted-foreground hover:text-foreground cursor-pointer p-2 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <IconPlus className="size-3.5" />
                    </button>
                  </div>

                  {/* Total Item Price */}
                  <div className="text-right sm:w-24">
                    <span className="text-foreground text-sm font-bold sm:text-base">
                      Rs. {itemNumericPrice * item.quantity}
                    </span>
                  </div>

                  {/* Remove Item */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive/80 hover:text-destructive cursor-pointer p-2 transition-colors"
                    aria-label="Remove item"
                  >
                    <IconTrash className="size-5" />
                  </button>
                </div>
              </div>
            );
          })}

          <div className="flex justify-end pt-2">
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-destructive hover:bg-destructive/10 border-destructive/30 cursor-pointer text-xs"
            >
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary Checkout Card */}
        <div className="lg:col-span-4">
          <div className="border-border bg-card space-y-6 rounded-2xl border p-6 shadow-sm">
            <h2 className="text-foreground text-lg font-semibold tracking-tight">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Items ({totalItemsCount})
                </span>
                <span className="text-foreground font-medium">
                  Rs. {subtotal}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="text-foreground font-medium">
                  Rs. {deliveryFee}
                </span>
              </div>
              <div className="border-border flex justify-between border-t pt-3 text-base font-bold">
                <span className="text-foreground">Total Amount</span>
                <span className="text-primary">Rs. {grandTotal}</span>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppCheckout}
              className="w-full cursor-pointer gap-2 rounded-xl bg-green-600 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700"
            >
              <IconBrandWhatsapp className="size-5" />
              <span>Proceed via WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
