"use client"
import Card from '@/components/Card';
import Image from 'next/image';
import React from 'react';
import { ContactInfo, Services } from '../data/Data';

const Cards = React.memo(() => {
    return Services.map((service, index) =>
        <div key={service?.id} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 ${index % 2 === 0 ? 'fadeInLeft-animation' : 'fadeInRight-animation'}`}>
            <Card key={service.id} details={service} />
        </div>
    );
});

Cards.displayName = "Cards";

export default function SecurityServices() {
    return (

        <div id='securityServices' className=' bg-secondary  md:p-8'>
            <div className="md:hidden bg-secondary h-8 p-8  ">
                <h4 className="  md:flex  text-center text-4xl text-primary font-semibold  mb-4">Our Services</h4>

            </div>
            <div className=" py-12 h-80 md:h-48  relative px-24 ">
                <div className=" flex-col md:flex-row absolute inset-0 flex items-center justify-center">
                    <ul className="list-none p-0 m-0 text-white text-sm md:text-lg flex flex-col md:flex-wrap md:flex-row justify-center fadeInRight-animation items-center">
                        {Services.slice(0, Services.length / 2).map((service, index) => (
                            <li key={index} className={`mb-2 mr-4  tracking-widest `}>
                                <span className="mr-2">&#8226;</span>{/* Bullet point */}
                                {service.name}
                            </li>
                        ))}
                    </ul>
                    <div className="md:w-1/4 fadeInBottom-animation">
                        <h4 className="hidden md:flex  text-center text-2xl text-primary font-semibold  mb-4">Our Services</h4>
                        <div className="w-36 hidden md:w-48 md:flex ">
                            <Image
                                src="/Logo.png"
                                className="hidden md:block h-28 w-32  p-1  rounded-full"
                                height={96}
                                width={96}
                                alt={ContactInfo.name}
                            />
                        </div>
                    </div>
                    <div>
                        <ul className="list-none p-0 m-0 text-white text-sm md:text-lg flex flex-col md:flex-wrap md:flex-row justify-center fadeInRight-animation items-center">
                            {Services.slice(Services.length / 2, Services.length).map((service, index) => (
                                <li key={index} className={`mb-2 mr-4  tracking-widest `}>
                                    <span className="mr-2">&#8226;</span>{/* Bullet point */}
                                    {service.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap justify-between px-4 mt-2 md:mt-4 fadeInRight-animation'  >
                <Cards />
            </div>
        </div>
    )
}
