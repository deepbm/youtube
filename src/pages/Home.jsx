import React from 'react';
import Videos from './Videos';
import Banner from '../components/ui/Banner';

export default function Home() {
  return (
    <>
      <Banner src='/img/banner.png' title='banner' />
      <Videos />
    </>
  );
}
