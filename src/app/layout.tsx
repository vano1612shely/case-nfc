import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
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
    <html lang="uk" className="overflow-x-hidden" suppressHydrationWarning>
    <Script id='fb-pixel' strategy='afterInteractive'>
        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '962818672703278');
              fbq('track', 'PageView');
            `}
    </Script>
      <GoogleAnalytics gaId="AW-16633427596" />
    <body
        className={cn(
            "min-h-screen bg-white w-full overflow-x-hidden",
            inter.className,
        )}
    >
    {children}
    <Toaster/>

    <noscript>
        <img
            height='1'
            width='1'
            style={{display:'none'}}
            alt={'facebook pixel no script image'}
            src='https://www.facebook.com/tr?id=1002246091049642&ev=PageView&noscript=1'
        />
    </noscript>
    </body>
    </html>
  );
}
