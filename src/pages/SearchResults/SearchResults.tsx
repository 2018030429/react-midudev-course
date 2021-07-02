import React, { Fragment, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';

// * Components
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import Spinner from 'components/Spinner/Spinner';

// * Custom Hooks
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import useSEO from 'hooks/useSEO';

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

  const title = gifs? `${gifs.length} Results of ${decodeURI(keyword)}` : '';
  
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
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={`Search of ${ title }`}></meta>
            </Helmet>
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
