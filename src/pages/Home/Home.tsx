import React, { Fragment, useState } from 'react'
import { Link, useLocation } from "wouter";

// * Custom Hooks
import { useGifs } from '../../hooks/useGifs';

// * Components
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs';

const POPULAR_GIFS = ['Chihuhua', 'Cat', 'Panda', 'Duck'];

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
      <h3 className="App-title">Last search</h3>
      <ListOfGifs gifs={gifs!} />
      <h3 className="App-title">The most popular gifs</h3>
      <ul>
        {
          POPULAR_GIFS.map(gif => (
            <li key={gif}>
              <Link to={`/search/${gif}`}>{gif}'s gif</Link>
            </li>
          ))
        }
      </ul>
    </Fragment>
  )
}

export default Home;
