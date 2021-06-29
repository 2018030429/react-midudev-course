import React, { useState } from "react";
import { GifModel } from "../models/Gif";

interface ContextArgs {
  gifs?: GifModel[],
  setGifs?: React.Dispatch<React.SetStateAction<GifModel[]>>
}

interface ContextProviderArgs {
  children?: JSX.Element[]
}

const Context = React.createContext<ContextArgs>({});

const GifsContextProvider = ({ children }:ContextProviderArgs) => {
  const [gifs, setGifs] = useState<GifModel[]>([]);

  return(
    <Context.Provider value={{ gifs, setGifs }}>
      { children }
    </Context.Provider>
  );
}

export { GifsContextProvider };
export default Context;
