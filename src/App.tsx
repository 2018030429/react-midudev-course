import React from 'react';
import './App.css';

// * Components
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs />
      </section>
    </div>
  );
}

export default App;
