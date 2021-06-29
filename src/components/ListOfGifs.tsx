import React, { Fragment, useEffect, useState } from 'react'

// * Interface
import { GifModel } from '../models/Gif';

// * Services
import getGifs from '../services/getGifs';

// * Components
import Gif from "./Gif";

interface Props {
  keyword?: string
}

const ListOfGifs = ({ keyword }:Props) => {

  const [gifs, setGifs] = useState<GifModel[]>([]);

  useEffect(() => {
    getGifs(keyword).then(setGifs);
  }, [keyword]);

  return (
    <Fragment>
      { 
        gifs.map(gif => <Gif gif={gif} key={gif.id} /> ) 
      }
    </Fragment>
  )
}

export default ListOfGifs;
