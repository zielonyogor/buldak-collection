import List from '@/components/List';
import SearchBar from '@/components/SearchBar';
import ListItem from '@/components/ListItem';
import Sorting from './Sorting';
import React from 'react';

import BuldakInfoProps from '@/types/buldak';
import buldakArray from '@/data/buldak_data.json';
import { SortingState } from "@/types/sortingState";
import "@/assets/styles/buldak_collection.scss";

interface ShelfProps {
    onItemClicked: (buldak: BuldakInfoProps) => void;
}

export default function Shelf({onItemClicked}: ShelfProps) {

    const [currentArray, setCurrentArray] = React.useState(buldakArray);
    const [currentSort, setCurrentSort] = React.useState<{property: string, state: SortingState} | null>(null);


    function onSearchResultChanged(query: string) {
        console.log(`Search: ${query}`);
        const re = new RegExp(`.*${query}.*`);
        setCurrentArray(buldakArray.filter((item) => re.test(item['name'].toLowerCase())));
    }

    function onSortingChanged(property: string, newSortingState: SortingState) {
        if(newSortingState === SortingState.off) {
            setCurrentSort(null);
            setCurrentArray(buldakArray);
            return;
        }
        
        setCurrentSort({property, state: newSortingState});
        
        console.log(`Sorting by: ${currentSort?.property} - ${currentSort?.state}`);
    }

    return (
        <div className='shelf'>
            <div className='search-sort-container'>
                <SearchBar property='name' onChange={onSearchResultChanged}/>

                <Sorting property='name' onSortingChange={onSortingChanged} />
                <Sorting property='rating' onSortingChange={onSortingChanged} />
                <Sorting property='spiciness' onSortingChange={onSortingChanged} />
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