import React, { Fragment, useEffect, useRef, useCallback } from 'react';

// * Components
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import Spinner from 'components/Spinner/Spinner';

// * Custom Hooks
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';

interface Props {
  params: {
    keyword:string
  }
}

const SearchResults = ({ params }:Props) => {
  const { keyword } = params;
  const externalRef = useRef<HTMLDivElement>(null);
  const { gifs, loading, setPage } = useGifs(keyword);
  const { isNearScreen } = useNearScreen({
    externalRef: loading? null : externalRef,
    once: false 
  });
  
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 500
  ), [setPage]);

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <Fragment>
      {
        loading
          ? <Spinner/> 
          : <>
            <h3 className="App-title">
              {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs!} />
            <div className="visor" ref={externalRef}></div>
          </>
      }
    </Fragment>
  )
}

export default SearchResults;
