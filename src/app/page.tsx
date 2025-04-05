"use client";
import Header from "@/components/Header";
import TopBlock from "@/components/TopBlock";
import HowUse from "@/components/HowUse";
import MakeYourChoice from "@/components/MakeYourChoice";
import RequestBlock from "@/components/RequstBlock";
import VideoBlock from "@/components/VideoBlock/VideoBlock";
export default function Home() {
  return (
    <>
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
