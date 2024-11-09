'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoveStory() {
  const targetDate = new Date('2024-12-04').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(countdown, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <div className='container mx-auto  mb-10 relative'>
        <h1 className='text-center text-3xl font-bold'>Chuyện tình yêu</h1>
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
        <div className='flex lg:flex-row flex-col items-center mt-10 gap-20 justify-center relative'>
          <div className='relative image-story lg:flex hidden'>
            <Image
              src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0f99c255f7aa7714d366ebde51c86d53.jpeg'
              alt='image'
              width={495.5}
              height={495.5}
            />
          </div>
          <div className='relative flex flex-col lg:justify-start lg:items-start justify-center items-center'>
            <div className='sm:text-3xl text-2xl font-bold sm:w-[450px] w-[400px] sm:text-left text-center'>
              Bạn có tin vào tình yêu online không?
            </div>
            <div className='mt-4 text-gray-500'>December 12 2015</div>
            <div className='story-head md:flex hidden'></div>
            <div className='text-lg text-[#666] min-h-[155px] px-7 py-6 shadow-custom rounded-[10px] mt-4 sm:w-[550px] max-w-[450px] relative'>
              <div className='expand-story md:flex hidden'></div>
              Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có
              thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang
              như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!!
              Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ
              đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay
              biết, 4 năm sau người ấy lại là chồng mình.
            </div>
          </div>
          <div className='relative image-story lg:hidden flex'>
            <Image
              src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0f99c255f7aa7714d366ebde51c86d53.jpeg'
              alt='image'
              width={495.5}
              height={495.5}
            />
          </div>
        </div>
        <div className='flex lg:flex-row flex-col items-center mt-20 gap-20 justify-center relative'>
          <div className='relative flex flex-col sm:items-end items-center'>
            <div className='sm:text-3xl text-2xl font-bold sm:w-[450px] w-[400px] sm:text-end text-center'>
              Lời tỏ tình dễ thương^^
            </div>
            <div className='mt-4 text-gray-500'>December 12 2015</div>
            <div className='story-head1 md:flex hidden'></div>
            <div className='text-lg text-[#666] min-h-[155px] px-7 py-6 shadow-custom rounded-[10px] mt-4 sm:w-[550px] max-w-[450px] relative text-end'>
              <div className='expand-story1 md:flex hidden'></div>
              Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối
              tuần thường chạy xe vòng quanh qua những con phố, len lỏi trong
              từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê
              ven đường để ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi
              khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp trời, người con
              trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này
              anh được làm những điều ấy cùng em”.
            </div>
          </div>
          <div className='relative image-story'>
            <Image
              src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0f99c255f7aa7714d366ebde51c86d53.jpeg'
              alt='image'
              width={495.5}
              height={495.5}
            />
          </div>
        </div>
        <div className='flex lg:flex-row flex-col items-center mt-20 gap-20 justify-center relative'>
          <div className='relative image-story lg:flex hidden'>
            <Image
              src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0f99c255f7aa7714d366ebde51c86d53.jpeg'
              alt='image'
              width={495.5}
              height={495.5}
            />
          </div>
          <div className=' relative flex flex-col sm:items-start items-center'>
            <div className='sm:text-3xl text-2xl font-bold sm:w-[450px] w-[400px] sm:text-left text-center'>
              Phút giây cầu hôn
            </div>
            <div className='mt-4 text-gray-500'>December 12 2015</div>
            <div className='story-head md:flex hidden'></div>
            <div className='text-lg text-[#666] min-h-[155px] px-7 py-6 shadow-custom rounded-[10px] mt-4 sm:w-[550px] max-w-[450px] relative'>
              <div className='expand-story md:flex hidden'></div>5 năm bên nhau
              không phải là quãng thời gian quá dài, nhưng đủ cho chúng ta nhận
              ra được rất nhiều điều. Yêu nhau, vun vén hạnh phúc và cùng nỗ lực
              vượt qua những khó khăn trong cuộc sống. Chúng ta từ 2 con người
              xa lạ mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng
              nhau sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em
              đã nguyện ý đời này, đi đâu cũng được, miễn là cùng anh.
            </div>
          </div>
          <div className='relative image-story lg:hidden hidden'>
            <Image
              src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0f99c255f7aa7714d366ebde51c86d53.jpeg'
              alt='image'
              width={495.5}
              height={495.5}
            />
          </div>
        </div>
        <div className='flex lg:flex-row flex-col items-center mt-20 gap-20 justify-center relative'>
          <div className=' relative flex flex-col sm:items-end items-center'>
            <div className='sm:text-3xl text-2xl font-bold sm:w-[450px] w-[400px] sm:text-end text-center'>
              Ngày lễ đính hôn
            </div>
            <div className='mt-4 text-gray-500'>December 12 2015</div>
            <div className='story-head1 md:flex hidden'></div>
            <div className='text-lg text-[#666] min-h-[155px] px-7 py-6 shadow-custom rounded-[10px] mt-4 sm:w-[550px] max-w-[450px] relative text-end'>
              <div className='expand-story1 md:flex hidden'></div>
              “Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương.
              Ngày tình về chung đôi...” Sau bao nhiêu chờ đợi, cuối cùng ngày
              vui của chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần
              trong cuộc sống của nhau. Em và anh không chỉ là người yêu mà
              chúng ta còn là tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh và
              sau này sẽ là <br /> mẹ của các con anh.
            </div>
          </div>
          <div className='relative image-story '>
            <Image
              src='https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/0f99c255f7aa7714d366ebde51c86d53.jpeg'
              alt='image'
              width={495.5}
              height={495.5}
            />
          </div>
        </div>
      </div>

      <div className="bg-[url('https://cdn.biihappy.com/ziiweb/default/template/62ef3cfd4c248a18ec5a9b5a/a92c4f18902576f825fb27a0894ec3f9.jpg')] bg-no-repeat bg-cover md:bg-fixed relative overflow-hidden mt-[50px] md:h-[350px] ">
        <div className='absolute right-[-105px] top-0 bottom-0 w-[40%] bg-white z-10 transform skew-x-[-20deg] md:block hidden'>
          <div className='relative '>
            <div className='absolute top-[120px] -left-20 z-20 skew-x-[20deg]'>
              <div className='border-[8px] w-[140px] h-[140px] border-gray-400 rounded-full flex justify-center items-center bg-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='96'
                  height='96'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='#ea3e23'
                    d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z'
                  />
                  <rect width='2' height='7' x='11' y='6' fill='#ea3e23' rx='1'>
                    <animateTransform
                      attributeName='transform'
                      dur='9s'
                      repeatCount='indefinite'
                      type='rotate'
                      values='0 12 12;360 12 12'
                    />
                  </rect>
                  <rect
                    width='2'
                    height='9'
                    x='11'
                    y='11'
                    fill='#ea3e23'
                    rx='1'
                  >
                    <animateTransform
                      attributeName='transform'
                      dur='0.75s'
                      repeatCount='indefinite'
                      type='rotate'
                      values='0 12 12;360 12 12'
                    />
                  </rect>
                </svg>
              </div>
            </div>
            <div className='absolute top-[120px] left-0 transform skew-x-[30deg] z-10'>
              <Image
                src='https://preview.iwedding.info/templates/template18/images/rsvp/f1.png'
                alt='images'
                width={300}
                height={300}
              ></Image>
            </div>
          </div>
        </div>
        <div className='absolute top-[-1px] bottom-[-20px] left-0 right-0 w-full h-fit mx-auto text-center z-20 transform rotate-[180deg]'>
          <Image
            src='https://preview.iwedding.info/templates/template18/images/body/layer-3.png'
            alt='seperator'
            width={1920}
            height={400}
          />
        </div>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-[rgba(255,255,0,0)] opacity-80 z-10'></div>
        <div className='container mx-auto flex flex-col md:justify-start md:items-start justify-center items-center relative mt-[50px] z-30'>
          <div className='text-4xl text-white font-medium relative 2xl:ml-[200px] xl:ml-[100px] lg:ml-16 md:ml-2'>
            The big day
          </div>
          <div
            className='mt-10 flex flex-wrap items-center justify-center gap-5 overflow-hidden text-center 2xl:ml-[400px] xl:ml-[200px] lg:ml-32 md:ml-5'
            id='clock'
          >
            <div className='w-[100px] h-[100px] text-center '>
              <div className='border-[3px] border-red-500 rounded-full w-full h-full flex flex-col justify-center bg-white'>
                <div className='text-2xl text-red-500'>{timeLeft.days}</div>{' '}
                <span className='text-gray-600'>Ngày</span>{' '}
              </div>
            </div>
            <div className='w-[100px] h-[100px] text-center '>
              <div className='border-[3px] border-red-500 rounded-full w-full h-full flex flex-col justify-center bg-white'>
                <div className='text-2xl text-red-500'>{timeLeft.hours}</div>{' '}
                <span className='text-gray-600'>Giờ</span>{' '}
              </div>
            </div>
            <div className='w-[100px] h-[100px] text-center '>
              <div className='border-[3px] border-red-500 rounded-full w-full h-full flex flex-col justify-center bg-white'>
                <div className='text-2xl text-red-500'>{timeLeft.minutes}</div>{' '}
                <span className='text-gray-600'>Phút</span>{' '}
              </div>
            </div>
            <div className='w-[100px] h-[100px] text-center '>
              <div className='border-[3px] border-red-500 rounded-full w-full h-full flex flex-col justify-center bg-white'>
                <div className='text-2xl text-red-500'>{timeLeft.seconds}</div>{' '}
                <span className='text-gray-600'>Giây</span>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
