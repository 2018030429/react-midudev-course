import React from 'react';
import logo from "./logo.svg";
import './App.css';

import { Route, Link } from "wouter";

// * Components
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import Detail from './pages/Detail/Detail';

// * Contexts
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt="Giffy logo" src={logo} />
        </Link>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
