/*"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export function EmblaCarousel({ list }: { list: any[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: true, speed: 2, stopOnInteraction: false }),
  ]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {list.map((item, index) => (
          <div key={index} className="flex-shrink-0 px-6">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}*/



"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export function EmblaCarousel({ list }: { list: any[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      speed: 2,
      stopOnInteraction: false,
    }),
  ]);

  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="flex gap-10 max-w-[1000] px-4 py-2 ">
        {list.map((item, index) => (
          <div
            key={index}
            className="min-w-[180px] flex justify-center items-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
