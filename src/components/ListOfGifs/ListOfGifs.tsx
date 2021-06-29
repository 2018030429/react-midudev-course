import React from 'react'
import './styles.css';

// * Interface
import { GifModel } from '../../models/Gif';

// * Components
import Gif from "../Gif/Gif";

interface Props {
  gifs: GifModel[]
}

const ListOfGifs = ({ gifs }:Props) => {

  return (
    <div className="ListOfGifs">
      { 
        gifs.map(gif => <Gif gif={gif} key={gif.id} /> ) 
      }
    </div>
  )
}

export default ListOfGifs;
