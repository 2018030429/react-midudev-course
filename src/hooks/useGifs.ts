import { useEffect, useState, useContext } from "react";

// * Custom Hooks
import getGifs from "services/getGifs";

// * Contexts
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

const useGifs = (keyword?:string, rating?:string) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const {gifs, setGifs} = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'random';

  useEffect(() => {
    setLoading(true);
    getGifs({keyword:keywordToUse, rating}).then(gifs => {
      setGifs!(gifs);
      setLoading(false);
      localStorage.setItem('lastkeyword', keywordToUse);
    });
  }, [setGifs, keywordToUse,keyword, rating]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);
    getGifs({keyword:keywordToUse, page, rating})
      .then(nextGifs => {
        setGifs!(prevGifs => prevGifs.concat(...nextGifs));
        setLoadingNextPage(false);
      })
  }, [page, keywordToUse, setGifs, rating]);

  return { loading, gifs, setPage, loadingNextPage }
}

export { useGifs };
