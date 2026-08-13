"use client";

import MainWrapper from "@/components/shared/main-wrapper";

export default function TermsPage() {
  return (
    <MainWrapper>
      <div className="py-8 font-sans">
        <div className="mb-10 space-y-3 text-center md:text-left">
          <h1 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
            Please read these terms and conditions carefully before using our
            website and ordering services.
          </p>
        </div>

        {/* Content Card */}
        <div className="border-border bg-card text-muted-foreground space-y-8 rounded-3xl border p-6 text-sm leading-relaxed shadow-sm sm:p-10 sm:text-base">
          <div className="space-y-3">
            <h2 className="text-foreground text-xl font-bold tracking-tight">
              1. Introduction
            </h2>
            <p>
              Welcome to Joy Cafe & Cloud Kitchen. By accessing our website,
              browsing our menu, or placing an order through our platform, you
              agree to comply with and be bound by the following terms and
              conditions. If you disagree with any part of these terms, please
              do not use our services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground text-xl font-bold tracking-tight">
              2. Ordering & WhatsApp Checkout
            </h2>
            <p>
              Our website facilitates food ordering by compiling your selected
              items into a formatted message and redirecting you to WhatsApp to
              complete the transaction. Orders are officially confirmed only
              after direct confirmation is established with our staff via
              WhatsApp. We reserve the right to accept or decline any order at
              our discretion.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground text-xl font-bold tracking-tight">
              3. Pricing and Availability
            </h2>
            <p>
              All prices listed on our menu are in local currency (Rs.) and are
              subject to change without prior notice. While we make every effort
              to ensure accurate pricing and item availability, errors may
              occur. In the event of a pricing or availability discrepancy, we
              will notify you before confirming your order.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground text-xl font-bold tracking-tight">
              4. Delivery Policy
            </h2>
            <p>
              We offer free home delivery for all orders placed within a
              designated 3km radius around our shop location. Deliveries outside
              this range or special requests may be subject to additional
              delivery charges, which will be communicated and agreed upon
              during your WhatsApp order confirmation.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground text-xl font-bold tracking-tight">
              5. Modifications and Cancellations
            </h2>
            <p>
              If you need to modify or cancel your order, you must inform us
              immediately through WhatsApp before food preparation begins. Once
              preparation or dispatch has commenced, cancellations or changes
              may no longer be accommodated.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground text-xl font-bold tracking-tight">
              6. Limitation of Liability
            </h2>
            <p>
              Joy Cafe & Cloud Kitchen shall not be held liable for any direct,
              indirect, incidental, or consequential damages arising from the
              use of our website, delays in food delivery due to unforeseen
              circumstances, or third-party platform issues (such as WhatsApp
              connectivity disruptions).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground text-xl font-bold tracking-tight">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to update or modify these terms and
              conditions at any time without prior notice. Your continued use of
              our website following any changes signifies your acceptance of the
              revised terms.
            </p>
          </div>

          <div className="border-border text-muted-foreground border-t pt-6 text-xs">
            <p>
              Last updated: August 2026. If you have any questions regarding
              these terms, please contact us directly.
            </p>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
