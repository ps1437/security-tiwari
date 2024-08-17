"use client";

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Services } from "../data/Data";
import Carousel from './Carousel';

let slides = [
  "./security.jpeg",
  "https://www.allstarsecurityservice.com/wp-content/uploads/2018/07/main-banner.jpg",
  "https://assets-global.website-files.com/6152d7874f8c968f84305aec/654b9175e05c2c7376c8f35f_Top%20Security%20Guard%20Interview%20Questions%20and%20Answers.jpg",
  "https://img.freepik.com/premium-photo/close-up-indian-male-security-guard-surveillance-room_161094-14189.jpg",
];

const Hero: React.FC = () => {
  const services = Services.map((v) => v.name);
  const [text] = useTypewriter({
    words: services,
    loop: true,
    deleteSpeed: 200,
  });

  return (
    <>
      <div className="w-full relative bg-secondary" id="home">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> {/* Transparent overlay */}
        <Carousel slides={slides} />
        <section className="mt-12 py-16 text-white dark:bg-slate-700 dark:text-white absolute top-0  z-20 w-full h-full flex items-center justify-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 w-full h-full">
            <div className="w-full text-center md:text-left mb-2 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-primary bounceBottom-animation">
                TIWARIJI <span className="text-primary">SECURITY </span>
                <span className="text-white">SERVICES</span>
              </h2>
              <h1 className="text-2xl lg:text-3xl font-semibold mt-6 bg-yellow-500 p-2 rounded text-center md:text-left md:w-1/2">
                <span className="text-2xl text-[#F2F2F2] font-semibold">
                  {text}
                </span>
                <Cursor cursorColor="#f7aboa" />
              </h1>
              <p className="mt-4 md:mt-7 rounded font-mono fadeInBottom-animation text-white font-medium bg-secondary p-4 dark:text-white">
                Offering top security services in Hyderabad, we manage all your needs so you can focus on your goals.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
