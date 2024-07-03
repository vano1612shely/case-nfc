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
    "NFC чохли з 4-кольорним дисплеєм для iphone 15, iphone 15 pro, iphone 15 pro max",
  keywords:
    "nfc чохол, nfc case, iphone 15, iphone 15 pro, iphone 15 pro max, чохли для iphone, нфс чохли для айфону",
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
