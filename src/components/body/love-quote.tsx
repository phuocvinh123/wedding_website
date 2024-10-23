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
    <div className="bg-[url('https://cdn.biihappy.com/ziiweb/default/template/62ef3cfd4c248a18ec5a9b5a/a92c4f18902576f825fb27a0894ec3f9.jpg')] bg-no-repeat bg-cover bg-fixed relative overflow-hidden mt-[50px] h-[350px]">
      <div className='absolute left-[-105px] top-0 bottom-0 w-[40%] bg-white z-10 transform skew-x-[-20deg]'></div>
      <div className='absolute left-0 right-0 mx-auto z-9 text-center w-full h-fit bottom-[-20px] top-[-1px] transform rotate-180 z-20'>
        <Image
          src='https://preview.iwedding.info/templates/template18/images/body/layer-3.png'
          alt='images'
          width={1920}
          height={100}
        />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(-33deg,_#000000_50%,_#ffff0000)] opacity-80'></div>
      <div className='container mx-auto flex gap-8 relative'>
        <div className='w-[33%] relative z-20'>
          <div className='absolute right-24 top-10 rotate-[140deg]'>
            <Image
              src='https://preview.iwedding.info/templates/template18/images/rsvp/f1.png'
              alt='images'
              width={270}
              height={270}
            />
          </div>
          <div className='absolute -right-36 top-10'>
            <Image
              src='https://cdn.biihappy.com/ziiweb/default/template/62ef3cfd4c248a18ec5a9b5a/c5fc9d51b7ebacb2f09c9a69f29635a0.jpg'
              alt='images'
              width={300}
              height={300}
              className='rounded-[50%] border-[10px] border-solid border-[#fbfbfb]'
            />
          </div>
        </div>
        <div className='w-[66%] pl-48 text-white mt-24'>
          <div className='text-3xl font-bold'>Love Quote</div>
          <div className='text-2xl mt-10 w-[750px]'>
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
