import React, { Fragment, useState } from 'react'
import { useLocation } from "wouter";

// * Custom Hooks
import { useGifs } from 'hooks/useGifs';

// * Components
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import Trending from 'components/Trending/Trending';

const Home = () => {
  const [ keyword, setKeyword ] = useState('');
  const [ path, pushLocation ] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  } 

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search a gif here..."
          value={keyword} onChange={handleChange} />
        <button>Search!!</button>
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-tittle">Last search</h3>
          <ListOfGifs gifs={gifs!} />
        </div>
        <div className="App-category">
          <Trending />          
        </div>
      </div>
    </Fragment>
  )
}

export default Home;
