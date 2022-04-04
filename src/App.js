import React, { useEffect, useState } from 'react';
import './App.css';
import Brewery from './components/Brewery';

function App() {
  const [appState, setAppState] = useState({
    breweries: null,
  });

  useEffect(() => {
    const apiUrl = `https://api.openbrewerydb.org/breweries?by_dist=40.812195,-77.856102`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((breweries) => {
        setAppState({breweries: breweries });
      });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='repo-container'>
        <Brewery breweries={appState.breweries} />
      </div>
    </div>
  );
}
export default App;