import React from 'react';
import { useYoutubeApi } from '../contexts/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtube.channelImageURL(id),
  });

  return (
    <div className='flex items-center'>
      <img className='w-10 rounded-full mr-2' src={url} alt={name} />
      <p className='text-lg'>{name}</p>
    </div>
  );
}
