import './Gif.css'

// * Intefaces
import { GifModel } from "../models/Gif";

interface Props {
  gif: GifModel
}

const Gif = ({ gif }:Props) => {
  return (
    <a href={`#${gif.id}`} className="Gif">
      <h4>{ gif.title }</h4>
      <img src={gif.url} alt="doggy" title={gif.title} />
    </a>
  )
}

export default Gif;
