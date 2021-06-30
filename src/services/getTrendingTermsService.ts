import { API_KEY, API_BASE } from "./settings";

const fromApiResponseToGifs = (apiResponse:any) => {
  const { data } = apiResponse;
  return data as string[];  
}

const getTrendingTermsService = async () => {
  const apiURL = `${API_BASE}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs);
}

export default getTrendingTermsService;
