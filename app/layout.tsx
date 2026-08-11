import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Joy Cafe & Cloud Kitchen",
  description:
    "Experience great food and cozy ambiance at Joy Cafe and Cloud Kitchen in Kathmandu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth font-sans antialiased",
        oxanium.variable
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
