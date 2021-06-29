import React from 'react';

// * Components
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';
import Spinner from '../../components/Spinner/Spinner';

// * Custom Hooks
import { useGifs } from '../../hooks/useGifs';

interface Props {
  params: {
    keyword:string
  }
}

const SearchResults = ({ params }:Props) => {
  const { keyword } = params;
  const { gifs, loading } = useGifs(keyword);

  return (
    <div>
      {
        loading? <Spinner/> : <ListOfGifs gifs={gifs!} />
      }
    </div>
  )
}

export default SearchResults;
