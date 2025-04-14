//import React from 'react';
import '@/assets/styles/main.scss';
import Shelf from './components/Shelf';
import BuldakDetails from './components/BuldakDetails';
import BuldakInfoProps from './types/buldak';
import React from 'react';
import buldakArray from '@/data/buldak_data.json';

export default function App() {
  const [buldak, setBuldak] = React.useState<BuldakInfoProps | null>(null);

  function onItemClicked(clickedBuldak: BuldakInfoProps) {
    setBuldak(clickedBuldak);
  }

  return (
    <div className='buldak-app'>
      <Shelf onItemClicked={onItemClicked}/>
      {buldak && <BuldakDetails {...buldak}/>}
    </div>
  )
}