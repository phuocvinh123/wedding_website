import Couple from '@/components/body/couple';
import Guestbook from '@/components/body/guestbook';
import HomeComponents from '@/components/body/home';
import LoveQuote from '@/components/body/love-quote';
import LoveStory from '@/components/body/love-story';
import WeddingEvents from '@/components/body/wedding-events';
import WeddingPhoto from '@/components/body/wedding-photo';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <HomeComponents />
      <Couple />
      <LoveStory />
      <WeddingEvents />
      <LoveQuote />
      <WeddingPhoto />
      <Guestbook />
      <Footer />
    </>
  );
}
