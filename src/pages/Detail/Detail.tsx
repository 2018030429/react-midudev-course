import React from 'react'
import Gif from 'components/Gif/Gif';

// * Custom Hooks
import { useGlobalGifs } from 'hooks/useGlobalGifs';

interface Props {
  params: {
    id: string
  }
}

const Detail = ({ params }:Props) => {
  const gifs = useGlobalGifs();

  const gif = gifs?.find(singleGif => singleGif.id === params.id);

  console.log(gif);

  return (
    <Gif gif={gif!} />
  )
}

export default Detail
