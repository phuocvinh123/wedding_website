'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HomeComponents() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className='h-[920px] relative z-10'>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1200}
        effect='fade'
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide className='relative'>
          <Image
            src='https://cdn.biihappy.com/ziiweb/default/template/62ef3cfd4c248a18ec5a9b5a/a92c4f18902576f825fb27a0894ec3f9.jpg'
            alt='images'
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute inset-0 bg-gray-600 opacity-30'></div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <Image
            src='https://cdn.biihappy.com/ziiweb/default/template/62ef3cfd4c248a18ec5a9b5a/083ef1ab4729965362dda91a248a2ed8.jpg'
            alt='images'
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute inset-0 bg-gray-600 opacity-30'></div>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <Image
            src='https://cdn.biihappy.com/ziiweb/default/template/62ef3cfd4c248a18ec5a9b5a/aa036712fc1203f79afa3cbcd93ccf0d.jpg'
            alt='images'
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute inset-0 bg-gray-600 opacity-30'></div>
        </SwiperSlide>
      </Swiper>

      <div className='absolute z-30 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <div className='relative text-white text-center flex flex-col justify-center items-center'>
          <div className='text-3xl'>We’re Getting Married!</div>
          <div className='text-6xl mt-4'>Kiến Văn & Việt Hoài</div>
          <div className='text-lg mt-4 bg-[#ee4d2d]  rounded-md w-[200px] py-4'>
            <div>SAVE THE DATE </div>
            <div>04-04-2024</div>
          </div>
          <div className='absolute z-30 -top-10 -left-40'>
            <Image
              src='https://res.cloudinary.com/dxwizprbn/image/upload/v1728096747/married/xpbzxm4lm1np4i6rdbvn.png'
              alt='image'
              width={160}
              height={160}
            ></Image>
          </div>
          <div className='absolute z-30 -bottom-10 -right-40'>
            <Image
              src='https://res.cloudinary.com/dxwizprbn/image/upload/v1728096747/married/cvjsoqikhoujuhgjqxcp.png'
              alt='image'
              width={160}
              height={160}
            ></Image>
          </div>
        </div>
      </div>

      <div className='absolute -bottom-1 z-30'>
        <Image
          src='https://res.cloudinary.com/dxwizprbn/image/upload/v1728094068/vvaewvlg7q5rz6qisgzi.png'
          alt='images'
          width={1920}
          height={10}
        ></Image>
      </div>
    </div>
  );
}
