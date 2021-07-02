import React, { Fragment, useCallback } from 'react'
import { useLocation } from "wouter";
import { Helmet } from 'react-helmet';

// * Custom Hooks
import { useGifs } from 'hooks/useGifs';

// * Components
import ListOfGifs from 'components/ListOfGifs/ListOfGifs';
import Trending from 'components/Trending/Trending';
import SearchForm from 'components/SearchForm/SearchForm';

const Home = () => {
  const [ _, pushLocation ] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = useCallback(({ keyword }:{ keyword:string }) => {
    pushLocation(`/search/${keyword}`);
  }, [pushLocation]);

  return (
    <Fragment>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
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
