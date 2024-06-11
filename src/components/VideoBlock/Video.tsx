import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

export default function Video({
  videoSrc,
  play,
  className,
  mute,
  setMute,
}: {
  videoSrc: string;
  play: boolean;
  className?: string;
  mute: boolean;
  setMute: (mute: boolean) => void;
}) {
  const vidRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (play) {
      if (vidRef.current) {
        const playPromise = vidRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.error("Error attempting to play video:", error);
          });
        }
      }
    } else {
      if (vidRef.current) {
        vidRef.current.pause();
      }
    }
  }, [play]);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.load();
    }
  }, [videoSrc]);

  // Handle user interaction to enable autoplay
  useEffect(() => {
    const handleInteraction = () => {
      if (vidRef.current && play) {
        vidRef.current.play();
      }
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return (
    <div className={clsx("m-auto relative", className)}>
      <button
        className="absolute right-2 top-2 text-white z-10"
        onClick={() => {
          setMute(!vidRef.current?.muted);
          if (vidRef.current) {
            vidRef.current.muted = !vidRef.current.muted;
          }
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
        muted={mute}
        playsInline
        autoPlay={play}
        preload="auto"
        loop
        className="rounded-xl"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
