import Image from 'next/image';
import { ContactInfo, WorkCulture } from '../data/Data';

export default function AboutUs() {
  return (
    <section id="aboutus" className="py-8 bg-gray-dark bg-yellow-500 p-12 mt-8 md:mt-2 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="hidden md:block md:w-1/2 mb-8 md:mb-0 fadeInRight-animation">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bsfms.com%2Fsecurity-guard-services-in-hyderabad%2F&psig=AOvVaw39ahzxczFrHchPnQiLilan&ust=1714978319315000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwjtpLed9vWFAxWdZmwGHTiBC3YQjRx6BAgAEBY"

            alt={ContactInfo.name}
          />
        </div>

        <div className="md:w-1/2  mt-20 md:mt-2 fadeInLeft-animation">
          <h2 className="text-5xl font-bold mb-4 text-white flex">Who we
            <span className="text-secondary">&nbsp;ARE?</span>
            <Image
              src="/security-1.png"
              className="h-16 w-16 md:w-24 md:h-24  mt-9 md:mt-0 m-6 ml-10  p-1 bg-secondary rounded-full"
              height={96}
              width={96}
              alt={ContactInfo.name}
            />

          </h2>

          <p className="my-5 text-white text-lg">{WorkCulture?.description}</p>
          <ol className="mb-10 list-outside">
            {WorkCulture.points.map((point, index: number) => (
              <li key={index} className="flex items-center mb-4">
                <strong className=" text-white rounded-full w-8 h-8 text-lg font-bold flex items-center justify-center mr-3">{point.number}</strong>
                <span className="text-white">{point.description}</span>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  )
}
