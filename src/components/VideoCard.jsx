import React from 'react';
import { formatAgo } from '../util/date';

export default function VideoCard({ video }) {
  const {
    title,
    channelTitle,
    publishedAt,
    thumbnails: {
      medium: { url },
    },
  } = video.snippet;
  return (
    <li>
      <img className='w-full' src={url} alt={title} />
      <div>
        <p className='my-2 font-semibold line-clamp-2'>{title}</p>
        <p className='text-sm'>{channelTitle}</p>
        <p className='text-sm'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
