/* eslint-disable react/no-unescaped-entities */
'use client';
import { useEffect, useState } from 'react';

export default function Guestbook() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className='container mx-auto mb-10'>
      <h1 className='text-center text-3xl font-bold'>Sổ lưu bút</h1>
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
      <div className='flex gap-4 justify-center mt-10'>
        <div className='w-1/2 flex flex-col justify-center items-center'>
          <div className='text-lg w-[420px] text-center'>
            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
            đám cưới của chúng tôi!
          </div>
          <div className='bg-[#ec2328] w-[15%] h-[1px] mt-5'></div>
          <div className='mt-10 '>
            <input
              type='text'
              placeholder='Nhập họ tên*'
              className='bg-[#fbfbfb] border-[1px] border-dashed border-[#fd4951] h-[45px] rounded-[8px] w-[450px] focus:outline-none pl-2'
            />
          </div>
          <div className='mt-10 '>
            <input
              type='text'
              placeholder='Nhập email'
              className='bg-[#fbfbfb] border-[1px] border-dashed border-[#fd4951] h-[45px] rounded-[8px] w-[450px] focus:outline-none pl-2'
            />
          </div>
          <div className='mt-10 border-[1px] border-dashed border-[#fd4951] p-[1px] rounded-[8px]'>
            <textarea
              name='content'
              id='content'
              placeholder='Nhập lời chúc của bạn*'
              className='rounded-none border-none focus:outline-none w-[450px] h-[150px] pl-2 bg-[#fbfbfb]'
            />
            <div className='w-[450px] relative bg-white p-[10px] border-[1px] border-solid border-[#f3f1f1] h-[51px]'>
              <div className='absolute right-3 bottom-3'>
                <div className='flex gap-2'>
                  <div className='relative group cursor-pointer'>
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md px-2  w-[150px] text-center py-2'>
                      Lời chúc gợi ý
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='bi bi-lightbulb'
                      viewBox='0 0 16 16'
                    >
                      <path d='M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1'></path>
                    </svg>
                  </div>
                  <div className='relative group cursor-pointer'>
                    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md px-2  w-[150px] text-center py-2'>
                      Chèn biểu tượng
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='bi bi-emoji-smile'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'></path>
                      <path d='M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5'></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10 border-[#ec2328] bg-[#ec2328] text-white px-10 py-2 rounded-md'>
            GỬI LỜI CHÚC
          </div>
        </div>
        <div className='w-1/2'>
          <div className='overflow-y-auto h-[557px] bg-white border-[5px] border-solid border-[#ec2328] text-black'>
            <div className='bg-[#fff0f1] p-3 '>
              <strong>CEO của ...</strong>
              <p className='leading-[24px] text-sm font-normal'>
                "Một cuộc hôn nhân thành công đòi hỏi phải yêu nhiều lần, và
                luôn ở cùng một người" - Chúc cho hai bạn sẽ có được một cuộc
                hôn nhân viên mãn, trăm năm hạnh phúc!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
