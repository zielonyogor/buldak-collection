//import React from 'react';
import '@/assets/styles/main.scss';
import buldakArray from '@/data/buldak_data.json';
import List from '@/components/List';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <>
      <h1>My buldak ranking</h1>
      <SearchBar />
      <List listItems={buldakArray}/>
    </>
  )
}

export default App
