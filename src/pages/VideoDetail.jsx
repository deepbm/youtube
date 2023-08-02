import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import { useDarkMode } from '../contexts/DarkMode';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  const { mode } = useDarkMode();

  return (
    <section className='flex flex-col lg:flex-row gap-8'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}`}
          title={video.id}
        />
        <div className={`p-8 ${!mode && 'text-dark'}`}>
          <p className='text-xl font-bold'>{title}</p>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre
            className={`border-t pt-4 whitespace-pre-wrap text-sm ${!mode || 'border-zinc-700'}`}
          >
            {description}
          </pre>
        </div>
      </article>
      <section className='basis-2/6'>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
