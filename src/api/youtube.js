import axios from 'axios';

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async #mostPopular() {
    const { data } = await this.httpClient.get('/videos', {
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      },
    });
    return data.items;
  }

  async #searchByKeyword(keyword) {
    const { data } = await this.httpClient.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    });
    return data.items.map(item => ({ ...item, id: item.id.videoId }));
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    const { data } = await this.httpClient.get('/channels', {
      params: {
        part: 'snippet',
        id,
      },
    });
    return data.items[0].snippet.thumbnails.default.url;
  }

  async relatedVideos(id) {
    const { data } = await this.httpClient.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        relatedToVideoId: id,
      },
    });
    return data.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}
