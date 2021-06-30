import { useEffect, useState, useContext } from "react";

// * Custom Hooks
import getGifs from "services/getGifs";

// * Contexts
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

const useGifs = (keyword?:string) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const {gifs, setGifs} = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const keywordToUse = keyword || localStorage.getItem('lastkeyword') || 'random';

  useEffect(() => {
    setLoading(true);
    getGifs(keywordToUse).then(setGifs).then(_ => {
      setLoading(false);
      localStorage.setItem('lastkeyword', keywordToUse);
    });
  }, [setGifs, keywordToUse]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);

    getGifs(keywordToUse, page)
      .then(nextGifs => {
        setGifs!(prevGifs => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      })

  }, [page, keywordToUse, setGifs]);

  return { loading, gifs, setPage, loadingNextPage }
}

export { useGifs };
