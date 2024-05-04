"use client"

import React, { useState } from 'react';
import { ContactInfo, Services } from '../data/Data';
import Link from 'next/link';
import Image from 'next/image';
import ContactNumber from './ContactNumber';
import Copyright from './Copyright';

interface MailtoProps {
  email: string;
  subject?: any;
  body?: any;
  children: React.ReactNode;
}

interface FooterProps { }

interface ContactFormData {
  name: string;
  mobileNumber: string;
  description: string;
}

const Mailto: React.FC<MailtoProps> = ({ email, subject, body, children }) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};



const Footer: React.FC<FooterProps> = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: ContactFormData = { name, mobileNumber, description };
    console.log(formData);
    setName('');
    setMobileNumber('');
    setDescription('');
  };


  return (
    <footer className="text-center lg:text-left  bg-secondary   text-white dark:bg-slate-600">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <section>
            <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">

              <Image
                src="/Logo.png"
                className="h-28 w-28 mr-2 p-1 bg-secondary rounded-full m-2"
                height={96}
                width={96}
                alt={ContactInfo.name}
              />

              <br />
            </h6>
            <p className='text-sm mb-2'>Hyderabad foremost security services provider, delivering excellence with over <b className='text-primary'> {2011 - new Date().getFullYear()} </b> years of industry experience.
            </p>
            <h6 className="uppercase text-primary font-semibold mb-4 flex items-center justify-center md:justify-start">
              {ContactInfo.name}
            </h6>
            <span>( {ContactInfo.subTitle} )</span>
          </section>
          <section>
            <h6 className="uppercase font-semibold border-b-4  border-primary text-center mb-4 flex justify-center  rounded p-2">
              Services
            </h6>
            <div className='flex  flex-wrap text-center'>
              {Services.map(val => (
                <div className="md:w-full w-1/2 mb-2" key={val.id}>
                  <p>
                    <Link href="/services" className="underline underline-offset-4 text-white">{val.name}</Link>
                  </p>
                </div>
              ))}
            </div>



          </section>




          <section>

            <h6 className="uppercase font-semibold border-b-4  border-primary text-center mb-4 flex justify-center  rounded p-2">
              <div> Office Address</div>
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4 ">
              <a target='_blank' href={`https://www.google.com/maps/search/22-8-292%2F2%2F7,+Shop+no.+16,+1st+Floor,+S.+S+Towers+Salar+jung+Museum+Road,+Nayapul,+Hyderabad,+Telangana+500002/@17.3711753,78.4763631,17z/data=!3m1!4b1?entry=ttu`} >
                {ContactInfo.address}
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4 ">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="w-4 mr-4"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                </path>
              </svg>
              <Mailto email={ContactInfo.email} subject="Hello & Welcome" >
                {ContactInfo.email}
              </Mailto>

            </p>
            <p className="flex items-center justify-center md:justify-start mb-4 text-primary">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="w-4 mr-4"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                </path>
              </svg>
              <ContactNumber />
            </p>

            {/* <div className="flex justify-center items-center lg:justify-between p-6 ">
              <div className="flex justify-center">
                <a target="_blank" href={ContactInfo.linkedinLink} className="mr-6 hover:text-blue-600 transition duration-200 hover:scale-150">


                  <svg fill="#000000" className="w-6 h-6" version="1.1" id="Layer_1"
                    viewBox="0 0 310 310" >
                    <g id="XMLID_801_">
                      <path fill="currentColor" id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                      <path fill="currentColor" id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0, -18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                      <path fill="currentColor" id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"/>
                    </g>
                  </svg>
                </a>
                <a target="_blank" href={ContactInfo.instagramLink} className="mr-6 hover:text-pink-600 transition duration-200 hover:scale-150">

                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
                    className="w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                    </path>
                  </svg>
                </a>
              </div>                </div> */}

          </section>


          <section>

            <h6 className="uppercase font-semibold border-b-4  border-primary text-center mb-4 flex justify-center  rounded p-2">
              GET In Touch  </h6>
            <form onSubmit={handleSubmit} className="flex flex-col text-black dark:text-white">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-2 py-1 px-2 border border-gray-400 rounded"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="mb-2 py-1 px-2 border border-gray-400 rounded"
                required
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-2 py-1 px-2 border border-gray-400 rounded resize-none h-20"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white py-1 px-4 rounded hover:bg-yellow-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </section>
        </div>

      </div>
      <Copyright />
    </footer>
  );
}
export default Footer;
