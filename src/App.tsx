//import React from 'react';
import '@/assets/styles/main.scss';
import Shelf from './components/Shelf';
import BuldakDetails from './components/BuldakDetails';
import BuldakInfoProps, { Spiciness } from './types/buldak';
import React from 'react';
import buldakArray from '@/data/buldak_data.json';

export default function App() {
  const [buldak, setBuldak] = React.useState<BuldakInfoProps | null>(null);
  const [currentArray, setCurrentArray] = React.useState(buldakArray);

  function onItemClicked(clickedBuldak: BuldakInfoProps) {
    console.log(`${Spiciness[Spiciness.Dangerously_Spicy]}`);
    setBuldak(clickedBuldak);
  }

  function editItem(id: number) {

  }

  function deleteItem(id: number) {
    
  }

  return (
    <div className='buldak-app'>
      <Shelf onItemClicked={onItemClicked}/>
      {buldak && <BuldakDetails props={buldak} onEditClicked={editItem} onDeleteClicked={deleteItem} />}
    </div>
  )
}