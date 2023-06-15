import React, { useEffect, useState } from 'react';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className='flex mb-4 p-4 border-b border-zinc-600 w-full text-xl'>
      <Link className='flex items-center' to='/'>
        <BsYoutube className='text-brand text-3xl' />
        <span className='ml-2 font-bold text-2xl'>Youtube</span>
      </Link>
      <form className='flex justify-center w-full' onSubmit={handleSubmit}>
        <input
          className='p-2 w-7/12 outline-none bg-black text-gray-50'
          type='text'
          placeholder='Search...'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type='submit' className='px-4 bg-zinc-600'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
