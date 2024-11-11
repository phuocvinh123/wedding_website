'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'glightbox/dist/css/glightbox.css';
import { useEffect } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';

export default function WeddingPhoto() {
  const images = [
    'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg',
    'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg',
    'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg',
    'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg',
    'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg',
    'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg',
    'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg',
    'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg',
    'https://cdn.biihappy.com/ziiweb/default/website/galleries/61990296d7e97a1853119579/large.jpg',
  ];

  useEffect(() => {
    // Lazy import GLightbox để đảm bảo chỉ chạy trên client
    const initializeLightbox = async () => {
      const GLightbox = (await import('glightbox')).default;
      const lightbox = GLightbox({
        selector: '.glightbox',
        loop: true,
      });
      return () => {
        lightbox.destroy();
      };
    };

    initializeLightbox();
  }, []);

  return (
    <div className='container mx-auto my-20 relative'>
      <h1 className='text-center text-3xl font-bold'>Album Hình Cưới</h1>
      <div className='flex flex-col justify-center items-center mt-6'>
        <div className='h-8 border-l-[1.5px] border-[#ea3e23]'></div>
        <div className='-mt-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 48 48'
          >
            <path
              fill='#ea3e23'
              d='M7.923 10.155a10.42 10.42 0 0 1 13.806.684l2.272 2.223l2.266-2.22a10.42 10.42 0 0 1 13.809-.687c4.85 3.887 5.242 11.13.837 15.516l-16.03 15.964a1.25 1.25 0 0 1-1.764 0L7.087 25.67c-4.405-4.386-4.015-11.628.836-15.516m12.057 2.47a7.92 7.92 0 0 0-10.494-.52C5.8 15.06 5.503 20.565 8.851 23.9L24 38.986l15.148-15.087c3.348-3.334 3.05-8.839-.636-11.793a7.92 7.92 0 0 0-10.496.522l-3.141 3.077a1.25 1.25 0 0 1-1.75 0z'
            />
          </svg>
        </div>
      </div>
      <div className='flex gap-8 flex-wrap justify-center mt-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1200}
          effect='fade'
          modules={[Pagination, Autoplay]}
          className='mySwiper'
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide className='relative' key={index}>
              <div className='relative group cursor-pointer overflow-hidden'>
                <a href={src} className='glightbox'>
                  <Image
                    src={src}
                    alt={`Wedding image ${index + 1}`}
                    width={390}
                    height={590}
                    className='block'
                  />
                </a>
                <div className='absolute left-0 top-0 w-full h-full bg-[#ffffff6e] opacity-0 z-20 transition-all duration-600 ease-[cubic-bezier(0.45,_0.05,_0.55,_0.95)] group-hover:opacity-100 group-hover:translate-y-0 translate-y-full pointer-events-none'></div>
                <div className='absolute left-1/2 bottom-1/3 transform -translate-x-1/2 opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 bg-[#ee4d2d] border p-2 rounded-full '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='none'
                      stroke='white'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2.5'
                      d='m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314'
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
