'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Couple() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <>
      <div className='container mx-auto my-10'>
        <div className='text-4xl font-bold text-center'>Cặp đôi</div>
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
        <div className='flex gap-4 items-center justify-center mt-16'>
          <div className='flex mr-48 group'>
            <div className='relative'>
              <div className='flex gap-4'>
                <div className='flex gap-4'>
                  <div className='rounded-full p-2 bg-gray-50 hover:bg-[#ea3e23] hover:svg-white  text-[#ea3e23] hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z'
                      />
                    </svg>
                  </div>
                  <div className='rounded-full p-2 bg-gray-50 hover:bg-[#ea3e23] hover:svg-white  text-[#ea3e23] hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 1024 1024'
                    >
                      <path
                        fill='currentColor'
                        d='M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94a336.6 336.6 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6c0 13.2 1.6 26.4 4.2 39.1c-141.5-7.4-267.7-75-351.6-178.5a169.3 169.3 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9c-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850C671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2c33.2-24.3 62.3-54.4 85.5-88.2'
                      />
                    </svg>
                  </div>
                  <div className='rounded-full p-2 bg-gray-50 hover:bg-[#ea3e23] hover:svg-white  text-[#ea3e23] hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5'
                      />
                      <path
                        fill='currentColor'
                        fillRule='evenodd'
                        d='M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text-2xl font-bold'>Hoàng Kiến Văn</div>
              </div>
              <div className='rounded-md border-solid border-[#fff] border-[8px] bg-[#fbfbfb] px-6 py-4 w-[363px] shadow-custom mt-4'>
                <div className='flex gap-1 items-center justify-end'>
                  <div className='text-sm '>Con ông:</div>
                  <div className='text-lg font-medium'>HOÀNG ANH KIỆT</div>
                </div>
                <div className='flex gap-1 items-center justify-end'>
                  <div className='text-sm '>Con bà:</div>
                  <div className='text-lg font-medium'>NGUYỄN THỊ HOÀI</div>
                </div>
                <div className='flex'>
                  <div className='text-gray-500 leading-10'>
                    Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha
                    khoa ở Quận 1 thành phố Hồ Chí Minh. Là...
                    <span className='text-blue-500 ml-1 cursor-pointer'>
                      {' '}
                      xem thêm
                    </span>
                  </div>
                </div>
              </div>
              <div className='rounded-full border-solid border-[#fff] border-[8px] shadow-custom absolute -top-2 -right-48'>
                <div className='relative overflow-hidden'>
                  <Image
                    src='https://cdn.biihappy.com/ziiweb/default/website/3b48bc6125ce6d186297a3e90a11085e.jpeg'
                    alt='images'
                    width={196}
                    height={196}
                    className='rounded-full'
                  ></Image>
                  <div className='background-overlay'></div>
                  <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-full'></div>
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <span className='text-white text-3xl font-bold uppercase'>
                      Chú Rể
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex ml-48 group'>
            <div className='relative'>
              <div className='flex gap-4 ml-8'>
                <div className='text-2xl font-bold'>Ngô Việt Hoài</div>
                <div className='flex gap-4'>
                  <div className='rounded-full p-2 bg-gray-50 hover:bg-[#ea3e23] hover:svg-white  text-[#ea3e23] hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z'
                      />
                    </svg>
                  </div>
                  <div className='rounded-full p-2 bg-gray-50 hover:bg-[#ea3e23] hover:svg-white  text-[#ea3e23] hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 1024 1024'
                    >
                      <path
                        fill='currentColor'
                        d='M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94a336.6 336.6 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6c0 13.2 1.6 26.4 4.2 39.1c-141.5-7.4-267.7-75-351.6-178.5a169.3 169.3 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9c-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850C671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2c33.2-24.3 62.3-54.4 85.5-88.2'
                      />
                    </svg>
                  </div>
                  <div className='rounded-full p-2 bg-gray-50 hover:bg-[#ea3e23] hover:svg-white  text-[#ea3e23] hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5'
                      />
                      <path
                        fill='currentColor'
                        fillRule='evenodd'
                        d='M6.77 3.082a47.5 47.5 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.7 45.7 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.5 47.5 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.7 45.7 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='rounded-md border-solid border-[#fff] border-[8px] bg-[#fbfbfb] px-6 py-4 w-[363px] shadow-custom mt-4'>
                <div className='flex gap-1 items-center justify-start'>
                  <div className='text-sm '>Con ông:</div>
                  <div className='text-lg font-medium uppercase'>
                    Ngô Xuân Nghĩa
                  </div>
                </div>
                <div className='flex gap-1 items-center justify-start'>
                  <div className='text-sm '>Con bà:</div>
                  <div className='text-lg font-medium uppercase'>
                    Trần Hồng Thắm
                  </div>
                </div>
                <div className='flex'>
                  <div className='text-gray-500 leading-10'>
                    Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha
                    khoa ở Quận 1 thành phố Hồ Chí Minh. Là...
                    <span className='text-blue-500 ml-1 cursor-pointer'>
                      {' '}
                      xem thêm
                    </span>
                  </div>
                </div>
              </div>
              <div className='rounded-full border-solid border-[#fff] border-[8px] shadow-custom absolute -top-2 -left-48'>
                <div className='relative overflow-hidden'>
                  <Image
                    src='https://cdn.biihappy.com/ziiweb/default/website/59b631f29bfb9f7cd20437d27ddbe4db.jpeg'
                    alt='images'
                    width={196}
                    height={196}
                    className='rounded-full'
                  ></Image>
                  <div className='background-overlay'></div>
                  <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-700 rounded-full'></div>
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <span className='text-white text-3xl font-bold uppercase'>
                      Cô dâu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#ffe2e5] p-5 my-20'>
        <div className='flex justify-center items-center gap-8'>
          <div className='flex gap-2 items-center border-[#ea3e23] hover:bg-[#ea3e23] border-solid border-[0.5px] px-12 py-3 text-[#ea3e23] hover:text-white bg-white'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1.4em'
                height='1.4em'
                viewBox='0 0 24 24'
              >
                <g
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                >
                  <path d='M10.59 19.88A9.8 9.8 0 0 1 7.7 19L3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c1.565 1.335 2.479 3.065 2.71 4.861' />
                  <path d='m18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071a2.24 2.24 0 0 0-3.129-.006l-.224.22l-.223-.22a2.24 2.24 0 0 0-3.128-.006a2.143 2.143 0 0 0-.006 3.071z' />
                </g>
              </svg>
            </div>
            <div className='uppercase'>Gửi lời chúc</div>
          </div>
          <div className='flex gap-2 items-center border-[#ea3e23] hover:bg-[#ea3e23] border-solid border-[0.5px] px-12 py-3 text-[#ea3e23] hover:text-white bg-white'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1.4em'
                height='1.4em'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M5.856 6.84a.75.75 0 0 0-1.106.66V17a.75.75 0 0 0 1.5 0V8.756l5.394 2.904c.222.12.49.12.712 0l5.394-2.904V17a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.106-.66L12 10.148z' />
                <path
                  fillRule='evenodd'
                  d='M17.31 3.722a59.6 59.6 0 0 0-10.62 0l-1.518.135a3.53 3.53 0 0 0-3.179 3.006a35.5 35.5 0 0 0 0 10.274a3.53 3.53 0 0 0 3.18 3.005l1.516.136c3.534.316 7.088.316 10.622 0l1.517-.136a3.53 3.53 0 0 0 3.179-3.005a35.5 35.5 0 0 0 0-10.274a3.53 3.53 0 0 0-3.18-3.006zM6.824 5.216a58 58 0 0 1 10.354 0l1.517.136a2.03 2.03 0 0 1 1.829 1.728a34 34 0 0 1 0 9.84a2.03 2.03 0 0 1-1.829 1.728l-1.517.136c-3.444.308-6.91.308-10.354 0l-1.517-.136a2.03 2.03 0 0 1-1.829-1.728a34 34 0 0 1 0-9.84a2.03 2.03 0 0 1 1.829-1.728z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='uppercase '>xác nhận tham dự</div>
          </div>
          <div className='flex gap-2 items-center border-[#ea3e23] hover:bg-[#ea3e23] border-solid border-[0.5px] px-12 py-3 text-[#ea3e23] hover:text-white bg-white'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1.4em'
                height='1.4em'
                viewBox='0 0 48 48'
                fill='currentColor'
              >
                <g fillRule='evenodd' clipRule='evenodd'>
                  <path d='M28.772 24.667A4 4 0 0 0 25 22v-1h-2v1a4 4 0 1 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4 4 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4a2 2 0 0 1 1.886 1.333a1 1 0 1 0 1.886-.666M23 24a2 2 0 1 0 0 4zm2 10a2 2 0 1 0 0-4z' />
                  <path d='M13.153 8.621C15.607 7.42 19.633 6 24.039 6c4.314 0 8.234 1.361 10.675 2.546l.138.067c.736.364 1.33.708 1.748.987L32.906 15C41.422 23.706 48 41.997 24.039 41.997S6.479 24.038 15.069 15l-3.67-5.4c.283-.185.642-.4 1.07-.628q.318-.171.684-.35m17.379 6.307l2.957-4.323c-2.75.198-6.022.844-9.172 1.756c-2.25.65-4.75.551-7.065.124a25 25 0 0 1-1.737-.386l1.92 2.827c4.115 1.465 8.981 1.465 13.097.002M16.28 16.63c4.815 1.86 10.602 1.86 15.417-.002a29.3 29.3 0 0 1 4.988 7.143c1.352 2.758 2.088 5.515 1.968 7.891c-.116 2.293-1.018 4.252-3.078 5.708c-2.147 1.517-5.758 2.627-11.537 2.627c-5.785 0-9.413-1.091-11.58-2.591c-2.075-1.437-2.986-3.37-3.115-5.632c-.135-2.35.585-5.093 1.932-7.87c1.285-2.648 3.078-5.197 5.005-7.274m-1.15-6.714c.8.238 1.636.445 2.484.602c2.15.396 4.306.454 6.146-.079a54 54 0 0 1 6.53-1.471C28.45 8.414 26.298 8 24.038 8c-3.445 0-6.658.961-8.908 1.916' />
                </g>
              </svg>
            </div>
            <div className='uppercase '>mừng cưới</div>
          </div>
        </div>
      </div>
    </>
  );
}
