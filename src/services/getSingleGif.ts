import { API_KEY, API_BASE } from "./settings";

interface ServiceArgs {
  id: string
}

const fromApiResponseToGifs = (apiResponse:any) => {
  console.log(apiResponse)
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { id, title, url };
}

const getSingleGif = ({ id }:ServiceArgs) => {
  return fetch(`${API_BASE}/gifs/${ id }?api_key=${API_KEY}`)
    .then (res => res.json())
    .then(fromApiResponseToGifs);
}

export default getSingleGif;
