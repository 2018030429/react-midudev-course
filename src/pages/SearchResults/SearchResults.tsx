import React, { Fragment } from 'react';

// * Components
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import Spinner from 'components/Spinner/Spinner';

// * Custom Hooks
import { useGifs } from 'hooks/useGifs';

interface Props {
  params: {
    keyword:string
  }
}

const SearchResults = ({ params }:Props) => {
  const { keyword } = params;
  const { gifs, loading, setPage } = useGifs(keyword);

  const handleNextPage = () => setPage(currentPage => currentPage + 1);

  return (
    <Fragment>
      <h2>{decodeURI(keyword)}</h2>
      <div>
        {
          loading? <Spinner/> : <ListOfGifs gifs={gifs!} />
        }
      </div>
      <br />
      <button onClick={handleNextPage}>Get next page</button>
    </Fragment>
  )
}

export default SearchResults;
