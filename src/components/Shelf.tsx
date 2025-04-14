import List from '@/components/List';
import SearchBar from '@/components/SearchBar';
import ListItem from '@/components/ListItem';

import buldakArray from '@/data/buldak_data.json';
import "@/assets/styles/buldak_collection.scss";
import Sorting from './Sorting';
import React from 'react';
import BuldakInfoProps from '@/types/buldak';

interface ShelfProps {
    onItemClicked: (buldak: BuldakInfoProps) => void;
}

export default function Shelf({onItemClicked}: ShelfProps) {

    const [currentArray, setCurrentArray] = React.useState(buldakArray);

    function onSearchResultChanged(query: string) {
        console.log(`Search: ${query}`);
        const re = new RegExp(`.*${query}.*`);
        setCurrentArray(buldakArray.filter((item) => re.test(item['name'].toLowerCase())));
    }

    return (
        <div className='shelf'>
            <div className='search-sort-container'>
                <SearchBar property='name' onChange={onSearchResultChanged}/>
                <Sorting />
                <Sorting />
                <Sorting />
            </div>
            <List>
                {currentArray.map((buldak) => 
                <ListItem key={buldak.id} 
                    onClick={() => onItemClicked(buldak)} 
                    className='buldak-item'
                >
                    <img src={buldak.imageUrl} />
                </ListItem>)}
            </List>
        </div>
    )
}