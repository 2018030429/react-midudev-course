import { GiphyResponse } from "../models/GiphyResponse";
import { GifModel } from "../models/Gif";

const apiBase = 'https://api.giphy.com/v1/gifs/search';
const apiKey = 'es66ZJsaX36FCas5sotJZ0Bfhnm3CXmK';
const options = '&limit=25&offset=0&rating=g&lang=en'

const getGifs = (keyword:string = 'chihuahua') => {
  const apiURL = `${apiBase}?api_key=${apiKey}&q=${keyword}${options}`;
  return fetch(apiURL)
  .then(res => res.json())
  .then(res => {
    const { data } = res as GiphyResponse;
    const gifs = data.map(img => {
      const { images, title, id } = img; 
      const { url } = img.images.downsized_medium;
      return { images, title, url, id }
    });
    return gifs as GifModel[];
  });
}

export default getGifs;
