"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { clsx } from "clsx";
import Autoplay from "embla-carousel-autoplay";
export default function CarouselBlock({ className }: { className?: string }) {
  return (
    <div className={clsx("flex-1 flex items-center justify-around", className)}>
      <Image
        src="/bg.png"
        width="2000"
        height="2000"
        alt="bg"
        className="absolute z-0 w-full lg:max-w-[700px] pointer-events-none select-none"
      />
      <div className="min-w-[300px] w-full sm:w-[400px] relative flex-col">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <Image
                alt="image"
                src="/img1.png"
                width="2000"
                height="2000"
                className="relative z-10 pointer-events-none w-[50%] md:w-[70%] mb-5 m-auto select-none"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="image"
                src="/img2.png"
                width="2000"
                height="2000"
                className="relative z-10 pointer-events-none w-[50%] md:w-[70%] mb-5 m-auto select-none"
              />
            </CarouselItem>
          </CarouselContent>
          <div className="flex relative w-[50%] m-auto justify-between mt-5">
            <CarouselPrevious className="border-black bg-transparent hover:bg-orange-400 static" />
            <CarouselNext className="border-black bg-transparent hover:bg-orange-400 static" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
