import React, { Fragment, useEffect, useState } from 'react'

// * Interface
import { GifModel } from '../models/Gif';

// * Services
import getGifs from '../services/getGifs';

// * Components
import Gif from "./Gif";

interface Props {
  params: {
    keyword:string
  }
}

const ListOfGifs = ({ params: { keyword } }:Props) => {

  const [gifs, setGifs] = useState<GifModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then(setGifs).then(_ => setLoading(false));
  }, [keyword]);

  if (loading) return <i>Loading...</i>

  return (
    <Fragment>
      { 
        gifs.map(gif => <Gif gif={gif} key={gif.id} /> ) 
      }
    </Fragment>
  )
}

export default ListOfGifs;
