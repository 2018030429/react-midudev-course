import './Gif.css'

import { Link } from "wouter";

// * Intefaces
import { GifModel } from "../models/Gif";
import { Fragment } from 'react';

interface Props {
  gif: GifModel
}

const Gif = ({ gif }:Props) => {
  return (
    <Fragment>
      <Link to={`/${gif.id}`} className="Gif">
        <h4>{ gif.title }</h4>
        <img src={gif.url} alt="animals" title={gif.title} />
      </Link>
    </Fragment>
  )
}

export default Gif;
