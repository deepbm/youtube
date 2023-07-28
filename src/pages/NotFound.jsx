import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className='flex justify-center items-center h-screen text-lg text-dark'>
      <div>
        <p>죄송합니다.</p>
        <p className='mb-4'>요청하신 페이지를 찾을 수 없습니다.</p>
        <Link to='/' replace>
          <button className='px-4 rounded bg-zinc-600 text-white'>홈으로 가기</button>
        </Link>
      </div>
    </section>
  );
}
