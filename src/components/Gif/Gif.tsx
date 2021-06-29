import './Gif.css'

import { Link } from "wouter";

// * Intefaces
import { GifModel } from "../../models/Gif";

interface Props {
  gif: GifModel
}

const Gif = ({ gif }:Props) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${gif.id}`} className="Gif-link">
        <h4>{ gif.title }</h4>
        <img src={gif.url} alt="animals" title={gif.title} />
      </Link>
    </div>
  )
}

export default Gif;
