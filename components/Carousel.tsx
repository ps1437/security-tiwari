import { useEffect, useState } from "react";

export default function Carousel({ slides }: any) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // Direction: 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === slides.length - 1) {
        // If at the end, change direction to backward
        setDirection(-1);
      } else if (current === 0) {
        // If at the beginning, change direction to forward
        setDirection(1);
      }

      setCurrent((prevCurrent) => prevCurrent + direction);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, direction, slides.length]);

  return (
    <div className="overflow-hidden relative w-full h-96 opacity-80 mix-blend-screen bg-secondary">
      <div
        className="flex transition ease-out duration-300"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s: any, index: number) => {
          return (
            <img
              src={s}
              className="object-cover h-full w-full"
              alt="slide"
              key={index}
            />
          );
        })}
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_: any, i: number) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer ${i === current ? "bg-primary" : "bg-secondary"
                }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
