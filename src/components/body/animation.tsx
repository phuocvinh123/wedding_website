'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './animation.module.scss';

export default function Animation() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      );
      heart.setAttribute('class', styles.heart);
      heart.setAttribute('viewBox', '0 0 32 29.6');
      heart.style.left = Math.random() * 100 + 'vw'; // Vị trí ngẫu nhiên trên trục X
      heart.style.top = '-10px'; // Bắt đầu từ trên màn hình

      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      path.setAttribute(
        'd',
        'M23.6,0c-2.7,0-5.2,1-7.2,2.8C14.6,1,12.1,0,9.4,0C4.2,0,0,4.2,0,9.4c0,5.4,8,10.2,16,19.2 c8-9,16-13.8,16-19.2C32,4.2,27.8,0,23.6,0z'
      );
      path.setAttribute('fill', 'red');

      heart.appendChild(path);
      document.body.appendChild(heart);

      heart.addEventListener('animationend', () => {
        if (document.body.contains(heart)) {
          document.body.removeChild(heart);
        }
      });
    };

    const intervalId = setInterval(createHeart, 200); // Tạo nhiều trái tim

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (play) {
      if (audioRef.current) {
        audioRef.current.play(); // Phát nhạc khi play là true
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause(); // Dừng nhạc khi không chơi
        audioRef.current.currentTime = 0; // Reset thời gian về đầu
      }
    }
  }, [play]);

  const togglePlay = () => {
    setPlay((prev) => !prev); // Chuyển đổi giữa phát và dừng
  };

  return (
    <div className='fixed z-[10000] w-full h-full'>
      <audio
        ref={audioRef}
        src='/assets/audio/wedding-music.mp3' // Đường dẫn tương đối từ thư mục public
        loop
      />
      <div
        className='absolute bottom-20 left-16 border border-transparent animate-bounce-border'
        onClick={togglePlay}
      >
        <div className='bg-[#df4758] rounded-full px-2 py-[7px] cursor-pointer'>
          {!play ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='27'
              fill='#fff'
              viewBox='0 0 16 16'
            >
              <path d='M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z'></path>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25'
              height='27'
              fill='#fff'
              viewBox='0 0 16 16'
            >
              <path d='M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z'></path>
              <path d='M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z'></path>
              <path d='M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z'></path>
            </svg>
          )}
        </div>
      </div>
      <div className='absolute bottom-20 right-16 border border-transparent animate-bounce-border'></div>
    </div>
  );
}
