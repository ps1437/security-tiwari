import Image from 'next/image';
import { ContactInfo, WorkCulture } from '../data/Data';

export default function AboutUs() {
  return (
    <section id="aboutus" className="p-8 bg-gray-dark bg-yellow-500  mt-10 md:mt-4  ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="hidden md:block md:w-1/2 mb-8 md:mb-0 fadeInRight-animation ">

          <Image
            src="/security3.jpeg"
            height={450}
            width={600}
            className=" bg-secondary rounded border-4 border-white"
            alt={ContactInfo.name}
          />
        </div>

        <div className="md:w-1/2  mt-20 md:mt-2 fadeInLeft-animation ">
          <h2 className="text-5xl font-bold mb-4 text-white flex">
            <span>Who we
              <span className="text-secondary">&nbsp;ARE?</span></span>

          </h2>

          <p className="my-5 text-white text-lg bg-secondary bg-opacity-80 p-4 rounded">
            {WorkCulture?.description}
          </p>
          <ul  className="mb-10 list-outside">
            {WorkCulture.points.map((point, index: number) => (
              <li  key={index} className="flex items-center mb-4 bg-secondary bg-opacity-80 rounded">
                <span className="text-white  p-2 rounded"> • {point.description}</span>
              </li>
            ))}
          </ul >

        </div>

      </div>
    </section>
  )
}
