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
  const vidRef = useRef(null);
  useEffect(() => {
    if (play) {
      // @ts-ignore
      vidRef.current.play();
    } else {
      // @ts-ignore
      vidRef.current.pause();
    }
  }, [play]);
  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.load();
    }
  }, [videoSrc]);
  return (
    <div className={clsx("m-auto relative", className)}>
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
        muted={mute}
        preload="metadata"
        loop
        className="rounded-xl"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
