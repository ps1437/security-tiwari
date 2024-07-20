"use client"

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Services } from "../data/Data";
import Carousel from './Carousel';

let slides = [
  "./security.jpeg",
  "https://www.allstarsecurityservice.com/wp-content/uploads/2018/07/main-banner.jpg",
  "hthttps://assets-global.website-files.com/6152d7874f8c968f84305aec/654b9175e05c2c7376c8f35f_Top%20Security%20Guard%20Interview%20Questions%20and%20Answers.jpg",
  "https://img.freepik.com/premium-photo/close-up-indian-male-security-guard-surveillance-room_161094-14189.jpg",
];

const Hero: React.FC = () => {
  const services = Services.map(v => v.name);
  const [text, count] = useTypewriter({
    words: services,
    loop: true,
    deleteSpeed: 200,
  });

  return (
    <>
      <div className="w-full  relative  bg-secondary" id="home">
        <div className="gradient-overlay bg-secondary"> {/* Apply gradient overlay */}
          <Carousel slides={slides} className="object-cover" />
        </div>
        <section  className="py-16  text-white dark:bg-slate-700 dark:text-white absolute -top-2 md:top-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="w-full text-center md:text-left mb-8 m-8 md:mb-0">
              <h2 className="text-5xl font-bold mb-4 text-primary bounceBottom-animation">TIWARIJI   <span className="text-primary">SECURITY </span> <span className='text-secondary dark:text-white'>SERVICES</span></h2>
              <h1 className="text-3xl lg:text-3xl font-semibold scale-px-10 mt-6 bg-yellow-500 p-2 md:rounded text-center w-full md:w-1/2 ">
                <span className="mr-3   text-[#F2F2F2] font-semibold">{text}</span>
                <Cursor cursorColor="#f7aboa" />
              </h1>
              <p className="my-7 rounded font-mono fadeInBottom-animation text-white font-medium bg-secondary p-4 dark:text-white">
                Providing premier security guard services in Hyderabad, we specialize in handling diverse security needs, from financial complexities to event security, ensuring you can pursue your goals worry-free.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
