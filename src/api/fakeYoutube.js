import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async #mostPopular() {
    const { data } = await axios.get('/data/popular.json');
    return data.items;
  }

  async #searchByKeyword() {
    const { data } = await axios.get('/data/search.json');
    return data.items.map(item => ({ ...item, id: item.id.videoId }));
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async channelImageURL() {
    const { data } = await axios.get('/data/channel.json');
    return data.items[0].snippet.thumbnails.default.url;
  }
}
