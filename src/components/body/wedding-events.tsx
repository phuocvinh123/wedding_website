'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function WeddingEvents() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className='my-20 container mx-auto'>
      <div className='text-3xl text-center font-bold'>Sự kiện cưới</div>
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
      <div className='relative mt-7'>
        <div className='flex justify-center -ml-4 -mr-4 gap-8'>
          <div className='w-1/2 relative flex  justify-end items-end mt-20'>
            <div className='sticky top-0 right-0 w-[555px] z-[3] bottom-14'>
              <div className='visible top-[150px] bottom-auto animate-fadeInLeft '>
                <Image
                  src='https://cdn.biihappy.com/ziiweb/default/template/62ef3cfd4c248a18ec5a9b5a/8cf390dccd7f841cc2fea94f1f2ad7a1.jpg'
                  alt='images'
                  width={431}
                  height={437}
                  className='p-4 bg-[#fbfbfb] border-[2px] border-solid border-[#eee] rotate-[-5deg] weddingEvents max-w-full relative z-10 shadow-weddingEvents'
                />
                <div className='absolute -top-20 right-0 z-0'>
                  <Image
                    src='https://preview.iwedding.info/templates/template18/images/rsvp/f1.png'
                    alt='images'
                    width={277}
                    height={208}
                  />
                </div>
                <div className='absolute -bottom-10 -left-20 z-10'>
                  <Image
                    src='https://preview.iwedding.info/templates/template18/images/rsvp/f2.png'
                    alt='images'
                    width={249}
                    height={208}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='w-[555px] text-left p-6 overflow-hidden border shadow-custom mb-10 rounded-[10px] h-80'>
              <h3 className='text-2xl font-bold text-center'>LỄ CƯỚI NHÀ NỮ</h3>
              <div className='flex gap-4 mt-5'>
                <div className='w-[41%] relative'>
                  <Image
                    src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg'
                    alt='images'
                    width={192}
                    height={192}
                    className='border-[5px] border-solid border-[#fff] shadow-[0_0_32px_#eee] rounded-[15px] block ml-auto mr-auto relative'
                  />
                  <div className='absolute bottom-1 w-full'>
                    <div className='flex justify-center items-center gap-1 bg-[rgb(246_246_246/70%)] p-2'>
                      <div className='bg-[#eda2b6] rounded-[50%] w-6 h-6'></div>
                      <div className='bg-[#ffffff] rounded-[50%] w-6 h-6'></div>
                      <div className='bg-[#623262] rounded-[50%] w-6 h-6'></div>
                    </div>
                  </div>
                </div>
                <div className='w-[58%] mt-5'>
                  <div className='flex gap-8'>
                    <div className='flex gap-2'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='m10.498 18.001l-3.705-3.705l1.415-1.415l2.294 2.294l5.293-5.293l1.415 1.415zM21 6v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2v2h8V2h2v2h1a2 2 0 0 1 2 2m-2 2H5v11h14z'
                          />
                        </svg>
                      </div>
                      <div>20/12/2024</div>
                    </div>
                    <div className='flex gap-2'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='m15.3 16.7l1.4-1.4l-3.7-3.7V7h-2v5.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12t2.338 5.663T12 20'
                          />
                        </svg>
                      </div>
                      <div>07:30</div>
                    </div>
                  </div>
                  <div className='text-center mt-4 relative'>
                    <div className='absolute left-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill='currentColor'
                          d='M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7'
                        />
                      </svg>
                    </div>
                    <span className='ml-6'>TƯ GIA NHÀ NỮ - </span>
                    123 Nguyễn Tất Thành, Hòa Phướng, Hải Châu, Đà Nẵng
                  </div>
                  <div className='mt-4'>
                    <a
                      className='text-center flex items-center gap-2 ml-1 text-[#337ab7]'
                      href='https://www.google.com/maps/place/Da+Nang,+H%E1%BA%A3i+Ch%C3%A2u+District,+Da+Nang,+Vietnam/@16.0471659,108.1716864,13z/data=!3m1!4b1!4m5!3m4!1s0x314219c792252a13:0xfc14e3a044436487!8m2!3d16.0544068!4d108.2021667'
                      target='_blank'
                    >
                      Xem bản đồ{' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 15 15'
                      >
                        <path fill='#337ab7' d='M12 7.5L4 0v15z' />
                      </svg>
                    </a>
                  </div>
                  <div className='mt-4'>
                    <button className='flex justify-center items-center gap-2 border-[#ec2328] border-[0.5px] px-4 py-2 rounded-lg cursor-pointer text-[#ec2328]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 48 48'
                      >
                        <g fill='#ec2328'>
                          <path
                            fillRule='evenodd'
                            d='M10 23a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0v2h-2v-2zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm2 2h-2v2h2zm4 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2zm-16 6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2z'
                            clipRule='evenodd'
                          />
                          <path d='M35 31.5a1 1 0 0 1 1 1v2.086l.707.707a1 1 0 0 1-1.414 1.414L34 35.414V32.5a1 1 0 0 1 1-1' />
                          <path
                            fillRule='evenodd'
                            d='M12 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-1H9a1 1 0 0 0-1 1v4h26v-4a1 1 0 0 0-1-1h-3V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.99 6.99 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3zm16 28a7 7 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7 7 0 0 1-.29-2m7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10'
                            clipRule='evenodd'
                          />
                          <path d='M27 13a1 1 0 0 1-1-1v-1H16V9h10V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1' />
                        </g>
                      </svg>
                      Thêm vào lịch
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[555px] text-left p-6 overflow-hidden border shadow-custom mb-10 rounded-[10px] h-80 mt-10'>
              <h3 className='text-2xl font-bold text-center'>LỄ CƯỚI NHÀ NỮ</h3>
              <div className='flex gap-4 mt-5'>
                <div className='w-[41%] relative'>
                  <Image
                    src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg'
                    alt='images'
                    width={192}
                    height={192}
                    className='border-[5px] border-solid border-[#fff] shadow-[0_0_32px_#eee] rounded-[15px] block ml-auto mr-auto relative'
                  />
                  <div className='absolute bottom-1 w-full'>
                    <div className='flex justify-center items-center gap-1 bg-[rgb(246_246_246/70%)] p-2'>
                      <div className='bg-[#eda2b6] rounded-[50%] w-6 h-6'></div>
                      <div className='bg-[#ffffff] rounded-[50%] w-6 h-6'></div>
                      <div className='bg-[#623262] rounded-[50%] w-6 h-6'></div>
                    </div>
                  </div>
                </div>
                <div className='w-[58%] mt-5'>
                  <div className='flex gap-8'>
                    <div className='flex gap-2'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='m10.498 18.001l-3.705-3.705l1.415-1.415l2.294 2.294l5.293-5.293l1.415 1.415zM21 6v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2v2h8V2h2v2h1a2 2 0 0 1 2 2m-2 2H5v11h14z'
                          />
                        </svg>
                      </div>
                      <div>20/12/2024</div>
                    </div>
                    <div className='flex gap-2'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='m15.3 16.7l1.4-1.4l-3.7-3.7V7h-2v5.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12t2.338 5.663T12 20'
                          />
                        </svg>
                      </div>
                      <div>07:30</div>
                    </div>
                  </div>
                  <div className='text-center mt-4 relative'>
                    <div className='absolute left-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill='currentColor'
                          d='M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7'
                        />
                      </svg>
                    </div>
                    <span className='ml-6'>TƯ GIA NHÀ NỮ - </span>
                    123 Nguyễn Tất Thành, Hòa Phướng, Hải Châu, Đà Nẵng
                  </div>
                  <div className='mt-4'>
                    <a
                      className='text-center flex items-center gap-2 ml-1 text-[#337ab7]'
                      href='https://www.google.com/maps/place/Da+Nang,+H%E1%BA%A3i+Ch%C3%A2u+District,+Da+Nang,+Vietnam/@16.0471659,108.1716864,13z/data=!3m1!4b1!4m5!3m4!1s0x314219c792252a13:0xfc14e3a044436487!8m2!3d16.0544068!4d108.2021667'
                      target='_blank'
                    >
                      Xem bản đồ{' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 15 15'
                      >
                        <path fill='#337ab7' d='M12 7.5L4 0v15z' />
                      </svg>
                    </a>
                  </div>
                  <div className='mt-4'>
                    <button className='flex justify-center items-center gap-2 border-[#ec2328] border-[0.5px] px-4 py-2 rounded-lg cursor-pointer text-[#ec2328]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 48 48'
                      >
                        <g fill='#ec2328'>
                          <path
                            fillRule='evenodd'
                            d='M10 23a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0v2h-2v-2zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm2 2h-2v2h2zm4 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2zm-16 6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2z'
                            clipRule='evenodd'
                          />
                          <path d='M35 31.5a1 1 0 0 1 1 1v2.086l.707.707a1 1 0 0 1-1.414 1.414L34 35.414V32.5a1 1 0 0 1 1-1' />
                          <path
                            fillRule='evenodd'
                            d='M12 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-1H9a1 1 0 0 0-1 1v4h26v-4a1 1 0 0 0-1-1h-3V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.99 6.99 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3zm16 28a7 7 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7 7 0 0 1-.29-2m7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10'
                            clipRule='evenodd'
                          />
                          <path d='M27 13a1 1 0 0 1-1-1v-1H16V9h10V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1' />
                        </g>
                      </svg>
                      Thêm vào lịch
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[555px] text-left p-6 overflow-hidden border shadow-custom mb-10 rounded-[10px] h-80 mt-10'>
              <h3 className='text-2xl font-bold text-center'>LỄ CƯỚI NHÀ NỮ</h3>
              <div className='flex gap-4 mt-5'>
                <div className='w-[41%] relative'>
                  <Image
                    src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg'
                    alt='images'
                    width={192}
                    height={192}
                    className='border-[5px] border-solid border-[#fff] shadow-[0_0_32px_#eee] rounded-[15px] block ml-auto mr-auto relative'
                  />
                  <div className='absolute bottom-1 w-full'>
                    <div className='flex justify-center items-center gap-1 bg-[rgb(246_246_246/70%)] p-2'>
                      <div className='bg-[#eda2b6] rounded-[50%] w-6 h-6'></div>
                      <div className='bg-[#ffffff] rounded-[50%] w-6 h-6'></div>
                      <div className='bg-[#623262] rounded-[50%] w-6 h-6'></div>
                    </div>
                  </div>
                </div>
                <div className='w-[58%] mt-5'>
                  <div className='flex gap-8'>
                    <div className='flex gap-2'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='m10.498 18.001l-3.705-3.705l1.415-1.415l2.294 2.294l5.293-5.293l1.415 1.415zM21 6v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2v2h8V2h2v2h1a2 2 0 0 1 2 2m-2 2H5v11h14z'
                          />
                        </svg>
                      </div>
                      <div>20/12/2024</div>
                    </div>
                    <div className='flex gap-2'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='m15.3 16.7l1.4-1.4l-3.7-3.7V7h-2v5.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12t2.338 5.663T12 20'
                          />
                        </svg>
                      </div>
                      <div>07:30</div>
                    </div>
                  </div>
                  <div className='text-center mt-4 relative'>
                    <div className='absolute left-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill='currentColor'
                          d='M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7'
                        />
                      </svg>
                    </div>
                    <span className='ml-6'>TƯ GIA NHÀ NỮ - </span>
                    123 Nguyễn Tất Thành, Hòa Phướng, Hải Châu, Đà Nẵng
                  </div>
                  <div className='mt-4'>
                    <a
                      className='text-center flex items-center gap-2 ml-1 text-[#337ab7]'
                      href='https://www.google.com/maps/place/Da+Nang,+H%E1%BA%A3i+Ch%C3%A2u+District,+Da+Nang,+Vietnam/@16.0471659,108.1716864,13z/data=!3m1!4b1!4m5!3m4!1s0x314219c792252a13:0xfc14e3a044436487!8m2!3d16.0544068!4d108.2021667'
                      target='_blank'
                    >
                      Xem bản đồ{' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 15 15'
                      >
                        <path fill='#337ab7' d='M12 7.5L4 0v15z' />
                      </svg>
                    </a>
                  </div>
                  <div className='mt-4'>
                    <button className='flex justify-center items-center gap-2 border-[#ec2328] border-[0.5px] px-4 py-2 rounded-lg cursor-pointer text-[#ec2328]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 48 48'
                      >
                        <g fill='#ec2328'>
                          <path
                            fillRule='evenodd'
                            d='M10 23a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0v2h-2v-2zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm2 2h-2v2h2zm4 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2zm-16 6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2z'
                            clipRule='evenodd'
                          />
                          <path d='M35 31.5a1 1 0 0 1 1 1v2.086l.707.707a1 1 0 0 1-1.414 1.414L34 35.414V32.5a1 1 0 0 1 1-1' />
                          <path
                            fillRule='evenodd'
                            d='M12 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-1H9a1 1 0 0 0-1 1v4h26v-4a1 1 0 0 0-1-1h-3V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.99 6.99 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3zm16 28a7 7 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7 7 0 0 1-.29-2m7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10'
                            clipRule='evenodd'
                          />
                          <path d='M27 13a1 1 0 0 1-1-1v-1H16V9h10V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1' />
                        </g>
                      </svg>
                      Thêm vào lịch
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[555px] text-left p-6 overflow-hidden border shadow-custom mb-10 rounded-[10px] h-80 mt-10'>
              <h3 className='text-2xl font-bold text-center'>LỄ CƯỚI NHÀ NỮ</h3>
              <div className='flex gap-4 mt-5'>
                <div className='w-[41%] relative'>
                  <Image
                    src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/45dfd859dd184042e2a6adaa320ac64b.jpeg'
                    alt='images'
                    width={192}
                    height={192}
                    className='border-[5px] border-solid border-[#fff] shadow-[0_0_32px_#eee] rounded-[15px] block ml-auto mr-auto relative'
                  />
                  <div className='absolute bottom-1 w-full'>
                    <div className='flex justify-center items-center gap-1 bg-[rgb(246_246_246/70%)] p-2'>
                      <div className='bg-[#eda2b6] rounded-[50%] w-6 h-6'></div>
                      <div className='bg-[#ffffff] rounded-[50%] w-6 h-6'></div>
                      <div className='bg-[#623262] rounded-[50%] w-6 h-6'></div>
                    </div>
                  </div>
                </div>
                <div className='w-[58%] mt-5'>
                  <div className='flex gap-8'>
                    <div className='flex gap-2'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='m10.498 18.001l-3.705-3.705l1.415-1.415l2.294 2.294l5.293-5.293l1.415 1.415zM21 6v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2v2h8V2h2v2h1a2 2 0 0 1 2 2m-2 2H5v11h14z'
                          />
                        </svg>
                      </div>
                      <div>20/12/2024</div>
                    </div>
                    <div className='flex gap-2'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='m15.3 16.7l1.4-1.4l-3.7-3.7V7h-2v5.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4T6.337 6.338T4 12t2.338 5.663T12 20'
                          />
                        </svg>
                      </div>
                      <div>07:30</div>
                    </div>
                  </div>
                  <div className='text-center mt-4 relative'>
                    <div className='absolute left-0'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fill='currentColor'
                          d='M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7'
                        />
                      </svg>
                    </div>
                    <span className='ml-6'>TƯ GIA NHÀ NỮ - </span>
                    123 Nguyễn Tất Thành, Hòa Phướng, Hải Châu, Đà Nẵng
                  </div>
                  <div className='mt-4'>
                    <a
                      className='text-center flex items-center gap-2 ml-1 text-[#337ab7]'
                      href='https://www.google.com/maps/place/Da+Nang,+H%E1%BA%A3i+Ch%C3%A2u+District,+Da+Nang,+Vietnam/@16.0471659,108.1716864,13z/data=!3m1!4b1!4m5!3m4!1s0x314219c792252a13:0xfc14e3a044436487!8m2!3d16.0544068!4d108.2021667'
                      target='_blank'
                    >
                      Xem bản đồ{' '}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 15 15'
                      >
                        <path fill='#337ab7' d='M12 7.5L4 0v15z' />
                      </svg>
                    </a>
                  </div>
                  <div className='mt-4'>
                    <button className='flex justify-center items-center gap-2 border-[#ec2328] border-[0.5px] px-4 py-2 rounded-lg cursor-pointer text-[#ec2328]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 48 48'
                      >
                        <g fill='#ec2328'>
                          <path
                            fillRule='evenodd'
                            d='M10 23a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0v2h-2v-2zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm2 2h-2v2h2zm4 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2zm-16 6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2z'
                            clipRule='evenodd'
                          />
                          <path d='M35 31.5a1 1 0 0 1 1 1v2.086l.707.707a1 1 0 0 1-1.414 1.414L34 35.414V32.5a1 1 0 0 1 1-1' />
                          <path
                            fillRule='evenodd'
                            d='M12 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-1H9a1 1 0 0 0-1 1v4h26v-4a1 1 0 0 0-1-1h-3V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.99 6.99 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3zm16 28a7 7 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7 7 0 0 1-.29-2m7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10'
                            clipRule='evenodd'
                          />
                          <path d='M27 13a1 1 0 0 1-1-1v-1H16V9h10V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1' />
                        </g>
                      </svg>
                      Thêm vào lịch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
