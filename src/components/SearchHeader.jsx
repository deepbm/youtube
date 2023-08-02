import React, { useEffect, useState } from 'react';
import { BsYoutube, BsMoon, BsSun } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
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
    <header className='flex gap-2 mb-8 p-6 border-b border-zinc-700 w-full text-xl'>
      <Link className='flex items-center' to='/'>
        <BsYoutube className='text-brand text-3xl' />
        <span className={`ml-2 font-bold text-2xl ${!mode && 'text-dark'}`}>Youtube</span>
      </Link>
      <form className='flex justify-center w-full' onSubmit={handleSubmit}>
        <div className='relative w-6/12'>
          <input
            className={`p-1.5 px-2 pl-6 outline-none border w-full rounded-full ${
              !mode ? 'bg-white text-dark' : 'bg-black border-zinc-700 text-gray-50'
            }`}
            type='text'
            placeholder='Search...'
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button
            type='submit'
            className={`absolute right-0 rounded-r-full border h-full px-6 ${
              !mode ? 'bg-slate-50' : 'bg-zinc-700 border-zinc-700'
            }`}
          >
            <IoSearchOutline className={`font-thin ${!mode ? 'text-dark' : 'text-white'}`} />
          </button>
        </div>
      </form>
      <button className={`${!mode && 'text-dark'}`} onClick={toggleMode}>
        {mode ? <BsSun /> : <BsMoon />}
      </button>
    </header>
  );
}
