import { GiphyResponse } from "../models/GiphyResponse";
import { GifModel } from "../models/Gif";
import { API_KEY, API_BASE } from "./settings";

const fromApiResponseToGifs = (apiResponse:any) => {
  const { data } = apiResponse as GiphyResponse;

  const gifs = data.map(img => {
    const { images, title, id } = img; 
    const { url } = img.images.downsized_medium;
    return { images, title, url, id }
  });
  
  return gifs as GifModel[];
}

const getGifs = async ({keyword='chihuahua', rating='g',limit=5, page=0}) => {
  const apiURL = 
    `${API_BASE}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=${rating}&lang=en`;
  return fetch(apiURL)
  .then(res => res.json())
  .then(fromApiResponseToGifs);
}

export default getGifs;
