import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkMode';

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const {
    title,
    channelTitle,
    publishedAt,
    thumbnails: {
      medium: { url },
    },
  } = video.snippet;
  const { mode } = useDarkMode();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  const isList = type === 'list';

  return (
    <li
      className={isList ? 'flex gap-1 mx-2 mt-0 mb-4 cursor-pointer' : 'cursor-pointer'}
      onClick={handleClick}
    >
      <img className={`rounded-xl ${isList ? 'mr-2 w-60' : 'w-full'}`} src={url} alt={title} />
      <div className={`${!mode && 'text-dark'}`}>
        <p className='my-2 font-semibold line-clamp-2'>{title}</p>
        <p className='text-sm'>{channelTitle}</p>
        <p className='text-sm'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
