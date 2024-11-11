/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoveQuote() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className="bg-[url('https://cdn.biihappy.com/ziiweb/default/template/62ef3cfd4c248a18ec5a9b5a/a92c4f18902576f825fb27a0894ec3f9.jpg')] bg-no-repeat bg-cover md:bg-fixed relative overflow-hidden mt-[50px] xl:h-[350px] md:h-[450px] h-[550px]">
      <div className='md:block hidden absolute left-[-105px] top-0 bottom-0 w-[40%] bg-white z-10 transform skew-x-[-20deg]'></div>
      <div className='absolute left-0 right-0 mx-auto z-9 text-center w-full h-fit bottom-[-20px] top-[-1px] transform rotate-180 z-20'>
        <Image
          src='https://preview.iwedding.info/templates/template18/images/body/layer-3.png'
          alt='images'
          width={1920}
          height={100}
        />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(-33deg,_#000000_50%,_#ffff0000)] opacity-80'></div>
      <div className='container mx-auto flex md:flex-row flex-col justify-center items-center gap-8 relative'>
        <div className='w-[33%] relative z-20'>
          <div className='absolute md:block hidden lg:right-28 right-32 lg:-top-20 -top-20 lg:rotate-[140deg] rotate-180'>
            <img
              src='https://preview.iwedding.info/templates/template18/images/rsvp/f1.png'
              alt='images'
              className='size-[180px]'
            />
          </div>
          <div className='md:absolute  md:mt-0 mt-12 lg:-right-24 -right-14 -top-20 '>
            <img
              src='https://cdn.biihappy.com/ziiweb/default/template/62ef3cfd4c248a18ec5a9b5a/c5fc9d51b7ebacb2f09c9a69f29635a0.jpg'
              alt='images'
              className='rounded-[50%] lg:size-[240px] size-[200px] border-[10px] border-solid border-[#fbfbfb]'
            />
          </div>
        </div>
        <div className='w-[66%] lg:pl-48 md:pl-14 text-white md:mt-24 mt-2 flex flex-col md:justify-start md:items-start justify-center items-center'>
          <div className='text-3xl font-bold'>Love Quote</div>
          <div className='md:text-2xl text-lg md:mt-10 mt-2 xl:w-[700px] sm:w-[450px] w-[300px]'>
            “ Samsa was a travelling salesman and above it there hung a picture
            that he had recently cut out of an illustrated magazine and housed
            in a nice, gilded frame. It showed a lady fitted out with and fur
            boa who sat upright ”
          </div>
        </div>
      </div>
    </div>
  );
}
