"use client";
import { clsx } from "clsx";
import Video from "@/components/VideoBlock/Video";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
export default function VideoBlock({ className }: { className?: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [mute, setMute] = useState(true);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  useEffect(() => {
    console.log(current);
  }, [current]);
  return (
    <div
      className={clsx(
        "py-10 lg:py-20 px-5 md:px-40 flex flex-col gap-10",
        className,
      )}
    >
      <Carousel
        opts={{
          loop: true,
        }}
        className="m-auto w-[250px] sm:w-full sm:max-w-2xl"
        setApi={setApi}
      >
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
            <Video
              videoSrc="/video1.mp4"
              play={current === 1}
              mute={mute}
              setMute={setMute}
            />
          </CarouselItem>
          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
            <Video
              videoSrc="/video2.mp4"
              play={current === 2}
              mute={mute}
              setMute={setMute}
            />
          </CarouselItem>
          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
            <Video
              videoSrc="/video3.mp4"
              play={current === 3}
              mute={mute}
              setMute={setMute}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="border-black bg-transparent hover:bg-orange-400" />
        <CarouselNext className="border-black bg-transparent hover:bg-orange-400" />
      </Carousel>
      <h1 className="font-semibold text-4xl lg:text-5xl leading-[50px] text-center">
        Відео огляди
      </h1>
    </div>
  );
}
