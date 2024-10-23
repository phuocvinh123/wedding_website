'use client';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex gap-24 justify-center container mx-auto py-5 fixed max-w-[1920px] z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
      } shadow-md`}
    >
      <div className='flex gap-2 items-center'>
        <div className='text-xl font-medium'>V</div>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='2em'
            height='2em'
            viewBox='0 0 32 32'
          >
            <g fill='none'>
              <path
                fill='#f8312f'
                d='M6 6c4.665-2.332 8.5.5 10 2.5c1.5-2 5.335-4.832 10-2.5c6 3 4.5 10.5 0 15c-2.196 2.196-6.063 6.063-8.891 8.214a1.764 1.764 0 0 1-2.186-.041C12.33 27.08 8.165 23.165 6 21C1.5 16.5 0 9 6 6'
              />
              <path
                fill='#ca0b4a'
                d='M16 8.5v3.05c1.27-2.685 4.425-6.27 9.658-5.713c-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963C10.26 4.95 8.225 4.887 6 6C0 9 1.5 16.5 6 21c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04q.381-.29.785-.618c-2.854-2.143-6.86-5.519-9.035-7.462c-4.957-4.431-6.61-11.815 0-14.769a9.7 9.7 0 0 1 3.087-.827'
              />
              <ellipse
                cx='23.477'
                cy='12.594'
                fill='#f37366'
                rx='2.836'
                ry='4.781'
                transform='rotate(30 23.477 12.594)'
              />
            </g>
          </svg>
        </div>
        <div className='text-xl font-medium'>H</div>
      </div>
      <div className='flex gap-8 items-center'>
        <div>Home</div>
        <div>Cặp đôi</div>
        <div>Chuyện tình yêu</div>
        <div>Sự kiện cưới</div>
        <div>Phù Dâu & Phù Rể</div>
        <div>Album hình cưới</div>
        <div>Sổ lưu bút</div>
        <div>Mừng cuới</div>
      </div>
    </div>
  );
}
