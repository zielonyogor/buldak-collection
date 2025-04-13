//import React from 'react';
import '@/assets/styles/main.scss';
import Shelf from './components/Shelf';
import BuldakDetails from './components/BuldakDetails';

export default function App() {
  return (
    <div className='buldak-app'>
      <Shelf />
      <BuldakDetails {
        // temp values
        ...{
          "id": 1,
          "name": "Carbonara",
          "imageUrl": "https://cosdobrego.eu/userdata/public/gfx/3936/SamYang-Zupka-Carbonara-Ramen-Makaron-Buldak-Hot-Chicken-Ostry-Kurczak-130g.jpg",
          "rating": 8,
          "spice": "Mild",
          "whereToBuy": [
              "Carrefour",
              "Auchan"
          ],
          "bestWith": [
              "Corn",
              "Cheese"
          ]
      }
      }/>
    </div>
  )
}