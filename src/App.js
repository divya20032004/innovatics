import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import countryData from './data/countries.json';

function App() {
  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchBar data={countryData} />
    </div>
  );
}

export default App;
