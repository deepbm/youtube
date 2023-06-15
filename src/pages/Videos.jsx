import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    const { data } = await axios.get(`/data/${keyword ? 'search' : 'popular'}.json`);
    return data.items;
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
