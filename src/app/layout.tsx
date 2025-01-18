import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFC Case",
  description:
    "NFC-Hüllen mit 4-Farb-Display für iPhone 15, iPhone 15 Pro, iPhone 15 Pro Max",
  keywords:
      "NFC-Hülle, NFC Case, iPhone 15, iPhone 15 Pro, iPhone 15 Pro Max, Hüllen für iPhone, NFC-Hüllen für iPhone",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="overflow-x-hidden">
      <GoogleAnalytics gaId="AW-16633427596" />
      <body
        className={cn(
          "min-h-screen bg-white w-full overflow-x-hidden",
          inter.className,
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
