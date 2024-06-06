"use client";
import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
export default function VideoBlock({ className }: { className?: string }) {
  const [mute, setMute] = useState(true);
  const vidRef = useRef(null);
  return (
    <div className={clsx("w-full flex", className)}>
      <div className="m-auto relative">
        <button
          className="absolute right-2 top-2 text-white z-10"
          onClick={() => {
            // @ts-ignore
            setMute(!vidRef.current.muted);
            // @ts-ignore
            vidRef.current.muted = !vidRef.current.muted;
          }}
        >
          {mute ? (
            <VolumeX strokeWidth={2} size={30} />
          ) : (
            <Volume2 strokeWidth={2} size={30} />
          )}
        </button>
        <video
          ref={vidRef}
          width="300"
          muted
          preload="auto"
          playsInline
          autoPlay
          loop
        >
          <source src="/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="m-auto relative">
        <button
          className="absolute right-2 top-2 text-white z-10"
          onClick={() => {
            // @ts-ignore
            setMute(!vidRef.current.muted);
            // @ts-ignore
            vidRef.current.muted = !vidRef.current.muted;
          }}
        >
          {mute ? (
            <VolumeX strokeWidth={2} size={30} />
          ) : (
            <Volume2 strokeWidth={2} size={30} />
          )}
        </button>
        <video
          ref={vidRef}
          width="300"
          muted
          preload="auto"
          playsInline
          autoPlay
          loop
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="m-auto relative">
        <button
          className="absolute right-2 top-2 text-white z-10"
          onClick={() => {
            // @ts-ignore
            setMute(!vidRef.current.muted);
            // @ts-ignore
            vidRef.current.muted = !vidRef.current.muted;
          }}
        >
          {mute ? (
            <VolumeX strokeWidth={2} size={30} />
          ) : (
            <Volume2 strokeWidth={2} size={30} />
          )}
        </button>
        <video
          ref={vidRef}
          width="300"
          muted
          preload="auto"
          playsInline
          autoPlay
          loop
        >
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
