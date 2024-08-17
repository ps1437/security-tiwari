import { useEffect, useState } from "react";

export default function Carousel({ slides }: { slides: string[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // Direction: 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => {
        if (prevCurrent === slides.length - 1) {
          setDirection(-1);
        } else if (prevCurrent === 0) {
          setDirection(1);
        }
        return prevCurrent + direction;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [current, direction, slides.length]);

  const normalizedCurrent = (current + slides.length) % slides.length;

  return (
    <div className="overflow-hidden relative w-full md:h-[75vh]">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${normalizedCurrent * 100}%)`,
        }}
      >
        {slides.map((s: string, index: number) => (
          <img
            src={s}
            className="object-cover w-full h-full flex-shrink-0"
            alt={`slide ${index}`}
            key={index}
          />
        ))}
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, i: number) => (
          <div
            onClick={() => setCurrent(i)}
            key={i}
            className={`rounded-full w-3 h-3 cursor-pointer ${
              i === normalizedCurrent ? "bg-yellow-500" : "bg-secondary"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
