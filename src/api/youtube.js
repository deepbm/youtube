import axios from 'axios';

export async function search(keyword) {
  const { data } = await axios.get(`/data/${keyword ? 'search' : 'popular'}.json`);
  return data.items;
}
