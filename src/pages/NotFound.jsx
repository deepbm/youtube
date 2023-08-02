import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className='flex justify-center items-center h-screen text-center text-lg text-[#6c757d]'>
      <div>
        <FiAlertCircle className='mx-auto text-6xl text-[#dee2e6]' />
        <p className='my-4 font-bold text-2xl'>요청하신 페이지를 찾을 수 없습니다.</p>
        <p className='text-md'>
          입력한 주소가 잘못되었거나, 사용이 일시 중단되어 요청하신 페이지를 찾을 수 없습니다.
        </p>
        <p className='mb-4 text-md'>서비스 이용에 불편을 드려 죄송합니다.</p>
        <Link to='/' replace>
          <button className='px-4 rounded border'>홈으로 가기</button>
        </Link>
      </div>
    </section>
  );
}
