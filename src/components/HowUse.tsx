"use client";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { clsx } from "clsx";
import Video from "@/components/VideoBlock/Video";
import { useState } from "react";
export default function HowUse({ className }: { className?: string }) {
  const [mute, setMute] = useState(true);
  return (
    <div id="howuse" className={clsx(className, "bg-primary")}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-5 lg:px-40 py-10 md:py-40">
        <div className="flex-1 relative">
          <Video
            showBtn={false}
            videoSrc="/video2.mp4"
            play={true}
            mute={mute}
            setMute={setMute}
            className="relative z-10 w-[300px] lg:w-[400px] m-auto select-none pointer-events-none"
          />
        </div>
        <div className="flex-1">
          <div className="relative">
            <Image
              src="/bg2.png"
              width={2000}
              height={2000}
              alt="bg"
              className="absolute -top-20 z-0 w-[900px] select-none pointer-events-none opacity-50"
            />
          </div>
          <div className="relative z-10 flex flex-col gap-5 text-xl text-center lg:text-right text-white w-full">
            <h1 className="font-semibold  text-4xl lg:text-5xl leading-[50px] mb-10">
              Wie verwendet man es?
            </h1>
            <p>
              Legen Sie das Telefon in die E-Ink-Hülle, um eine automatische NFC-Verbindung herzustellen.
            </p>
            <ChevronsDown size={50} className="m-auto" />
            <p>
              Herunterladen: Scannen Sie den QR-Code auf der Verpackung oder suchen Sie die Ink Show-App im offiziellen Store.
            </p>
            <ChevronsDown size={50} className="m-auto" />
            <p>
              Beginnen Sie zu erstellen: Eine Registrierung ist nicht erforderlich. Drücken Sie die Schaltfläche [GO], um mit der Erstellung zu beginnen, zum Beispiel ein neues Bild/Text hinzuzufügen, es nach Belieben zu bearbeiten und den Titel Ihrer Arbeit zu erstellen. Beenden Sie mit [Cast Screen], um Ihre Arbeit zu aktualisieren.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
