import React, { Suspense } from 'react';
import logo from "./logo.svg";
import './App.css';

import { Route, Link } from "wouter";

// * Components
import SearchResults from './pages/SearchResults/SearchResults';
import Detail from './pages/Detail/Detail';

// * Contexts
import { GifsContextProvider } from './context/GifsContext';

// * Lazy Loadings
const Home = React.lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img className="App-logo" alt="Giffy logo" src={logo} />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </Suspense>
    </div>
  );
}

export default App;
