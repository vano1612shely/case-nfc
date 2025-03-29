"use client";
import Header from "@/components/Header";
import TopBlock from "@/components/TopBlock";
import HowUse from "@/components/HowUse";
import MakeYourChoice from "@/components/MakeYourChoice";
import RequestBlock from "@/components/RequstBlock";
import VideoBlock from "@/components/VideoBlock/VideoBlock";
import {useEffect} from "react";
import * as fbq from "@/lib/fpixel";
import Script from "next/script";
export default function Home() {
    useEffect(() => {
        fbq.pageView();
    }, []);
  return (
    <>
        <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
            }}
        />
      <header className="relative h-[100px] mb-10 w-full">
        <Header className="bg-white w-full" />
      </header>
      <main className="min-h-screen bg-white w-full">
        <TopBlock className="mb-20 w-full" />
        <HowUse className="mb-20 w-full" />
        <VideoBlock className="mb-20 w-full" />
        <MakeYourChoice className="mb-20 w-full" />
        <RequestBlock />
      </main>
      <footer className="p-5 text-lg text-center w-full">
          Copyright © 2024 CASE-NFC. Alle Rechte vorbehalten.
      </footer>
    </>
  );
}
