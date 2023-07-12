import React from 'react';

export default function Banner({ src, title }) {
  return (
    <div className='flex justify-center items-center my-8 py-14 w-full h-20 bg-white border-y'>
      <img className='w-full sm:w-1/2 md:1/4' src={src} alt={title} />
    </div>
  );
}
