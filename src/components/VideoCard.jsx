import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const {
    title,
    channelTitle,
    publishedAt,
    thumbnails: {
      medium: { url },
    },
  } = video.snippet;
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <li onClick={handleClick}>
      <img className='w-full' src={url} alt={title} />
      <div>
        <p className='my-2 font-semibold line-clamp-2'>{title}</p>
        <p className='text-sm'>{channelTitle}</p>
        <p className='text-sm'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
