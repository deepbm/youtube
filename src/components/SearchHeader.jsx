import React, { useEffect, useState } from 'react';
import { BsSearch, BsYoutube, BsMoon, BsSun } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkMode';

export default function Search() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const { mode, toggleMode } = useDarkMode();
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className='flex gap-2 mb-4 p-4 border-b border-zinc-600 w-full text-xl'>
      <Link className='flex items-center' to='/'>
        <BsYoutube className='text-brand text-3xl' />
        <span className={`ml-2 font-bold text-2xl ${!mode && 'text-dark'}`}>Youtube</span>
      </Link>
      <form className='flex justify-center w-full' onSubmit={handleSubmit}>
        <input
          className={`p-2 w-7/12 outline-none text-gray-50 ${!mode ? 'bg-gray-200' : 'bg-black'}`}
          type='text'
          placeholder='Search...'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type='submit' className='px-4 bg-zinc-600'>
          <BsSearch />
        </button>
      </form>
      <button className={`${!mode && 'text-dark'}`} onClick={toggleMode}>
        {mode ? <BsSun /> : <BsMoon />}
      </button>
    </header>
  );
}
