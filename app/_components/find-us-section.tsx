"use client";

import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconBike,
} from "@tabler/icons-react";

export function FindUsSection() {
  return (
    <section
      className="bg-secondary/10 relative overflow-hidden py-16 font-sans"
      id="find-us"
    >
      <div className="mb-10 space-y-4 text-center md:text-left">
        <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
          Find Us
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
          Drop by our cafe or get in touch with us for quick orders,
          reservations, and inquiries. We would love to serve you!
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        {/* Info Details Card */}
        <div className="bg-card border-border flex flex-col justify-between space-y-6 rounded-3xl border p-6 shadow-sm sm:p-8 lg:col-span-5">
          <div className="space-y-6">
            <h3 className="text-foreground text-xl font-bold tracking-tight">
              Contact & Location
            </h3>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary shrink-0 rounded-2xl p-3">
                  <IconMapPin className="size-6" />
                </div>
                <div>
                  <h4 className="text-foreground text-sm font-semibold">
                    Our Location
                  </h4>
                  <p className="text-muted-foreground mt-0.5 text-sm leading-relaxed">
                    Joy Cafe & Cloud Kitchen
                    <br />
                    Main Street, Kathmandu, Nepal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary shrink-0 rounded-2xl p-3">
                  <IconPhone className="size-6" />
                </div>
                <div>
                  <h4 className="text-foreground text-sm font-semibold">
                    Phone Number
                  </h4>
                  <p className="text-muted-foreground mt-0.5 text-sm">
                    +977 9800000000 / +977 1-5000000
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary shrink-0 rounded-2xl p-3">
                  <IconMail className="size-6" />
                </div>
                <div>
                  <h4 className="text-foreground text-sm font-semibold">
                    Email Address
                  </h4>
                  <p className="text-muted-foreground mt-0.5 text-sm">
                    support@joycafe.com
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary shrink-0 rounded-2xl p-3">
                  <IconClock className="size-6" />
                </div>
                <div>
                  <h4 className="text-foreground text-sm font-semibold">
                    Opening Hours
                  </h4>
                  <p className="text-muted-foreground mt-0.5 text-sm">
                    Sunday – Friday: 10:00 AM – 9:00 PM
                    <br />
                    Saturday: Closed / Delivery Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Free Delivery Highlight Banner */}
          <div className="bg-primary/10 border-primary/20 text-primary flex items-center gap-3 rounded-2xl border p-4">
            <div className="bg-primary text-background shrink-0 rounded-xl p-2.5">
              <IconBike className="size-5" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold tracking-wide uppercase">
                Free Home Delivery
              </h4>
              <p className="text-muted-foreground text-xs font-medium">
                Enjoy free doorstep delivery for all orders placed within a 3km
                radius around the shop!
              </p>
            </div>
          </div>
        </div>

        {/* Map Embed Card */}
        <div className="bg-card border-border min-h-87.5 overflow-hidden rounded-3xl border shadow-sm lg:col-span-7 lg:min-h-auto">
          <iframe
            title="Joy Cafe Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4519782531065!2d85.31995831506198!3d27.705829932204786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391eb192a1a2b7b7%3A0x7d0a27cb4a4b4b0!2sKathmandu%20Nepal!5e0!3m2!1sen!2snp!4v1650000000000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "100%" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full contrast-100 grayscale-20"
          />
        </div>
      </div>
    </section>
  );
}
