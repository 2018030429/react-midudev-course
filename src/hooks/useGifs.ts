import { useEffect, useState, useContext } from "react";

// * Models
// import { GifModel } from "../models/Gif";

// * Custom Hooks
import getGifs from "../services/getGifs";

// * Contexts
import GifsContext from "../context/GifsContext";

const useGifs = (keyword?:string) => {
  const [loading, setLoading] = useState(false);
  const {gifs, setGifs} = useContext(GifsContext);
  // const [gifs, setGifs] = useState<GifModel[]>([]);

  useEffect(() => {
    setLoading(true);
    const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'random';
    getGifs(keywordToUse).then(setGifs).then(_ => {
      setLoading(false);
      localStorage.setItem('lastkeyword', keywordToUse);
    });
  }, [keyword, setGifs]);


  return { loading, gifs }
}

export { useGifs };
