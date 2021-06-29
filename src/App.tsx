import React from 'react';
import './App.css';

import { Route, Link } from "wouter";

// * Components
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <h1>Giffy</h1>
      <section className="App-content">
        <Link to="/gif/chihuhua">Chihuahua's gif</Link>
        <Link to="/gif/panda">Panda's gif</Link>
        <Link to="/gif/duck">Duck's gif</Link>
        <Route path="/gif/:keyword" component={ListOfGifs}/>
      </section>
    </div>
  );
}

export default App;
