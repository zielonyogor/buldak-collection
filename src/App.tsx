//import React from 'react';
import '@/assets/styles/main.scss';
import Shelf from './components/Shelf';
import BuldakDetails from './components/BuldakDetails';
import BuldakInfoProps from './types/buldak';
import React from 'react';
import buldakArray from '@/data/buldak_data.json';

export default function App() {
  const [buldak, setBuldak] = React.useState<BuldakInfoProps | null>(null);
  const [currentArray, setCurrentArray] = React.useState(buldakArray);

  function onItemClicked(clickedBuldak: BuldakInfoProps) {
    setBuldak(clickedBuldak);
  }

  function editItem(editedBuldak: BuldakInfoProps) {
    console.log(`Saving: ${editedBuldak}`);
    if(editedBuldak.id === 0) {
      editedBuldak.id = Math.max(0, ...currentArray.map(item => item.id)) + 1;
      setCurrentArray(prevArray => [...prevArray, editedBuldak]);
    }
    setCurrentArray(prevArray => prevArray.map( item =>
      item.id === editedBuldak.id ? editedBuldak : item
    ));
  }

  function deleteItem(id: number) {
    setCurrentArray(prevArray => prevArray.filter(item => item.id !== id));
    setBuldak(null);
    console.log(currentArray);
  }

  function addItem(color: string) {
    setBuldak({
      id: 0,
      name: "",
      spiciness: "Spicy",
      bestWith: [],
      whereToBuy: [],
      rating: 0,
      packageColor: color,  
    });
  }

  return (
    <div className='buldak-app'>
      <Shelf array={currentArray} onItemClicked={onItemClicked} onAddItem={addItem}/>
      {buldak && <BuldakDetails props={buldak} onEditClicked={editItem} onDeleteClicked={deleteItem} />}
    </div>
  )
}