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

function compare(property: string, a: any, b: any) {
    if(typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    } 
    else if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }

    return 0;
}

export default function Shelf({onItemClicked}: ShelfProps) {

    const [currentArray, setCurrentArray] = React.useState(buldakArray);
    const [currentShownArray, setCurrentShownArray] = React.useState(buldakArray);
    const [currentSort, setCurrentSort] = React.useState<{property: string, state: SortingState}>({
        property: 'name', 
        state: SortingState.asc,
    });

    React.useEffect(() => {
        applySorting(currentSort.property, currentSort.state);
    }, [currentSort]);

    function onSearchResultChanged(query: string) {
        const re = new RegExp(`.*${query}.*`);
        setCurrentShownArray(currentArray.filter((item) => re.test(item['name'].toLowerCase())));
        applySorting(currentSort.property, currentSort.state);
    }

    function onSortingChanged(property: string, newSortingState: SortingState) {
        if (newSortingState === SortingState.off) {
            setCurrentSort({ property: 'name', state: SortingState.asc });
            return;
        }
    
        setCurrentSort({ property, state: newSortingState });
    }

    function applySorting(property: string, state: SortingState, baseArray = currentShownArray) {
        if (state === SortingState.off) {
            setCurrentShownArray(currentArray);
            return;
        }
    
        const sortedArray = [...baseArray].sort((a, b) => {
            const aValue = a[property as keyof BuldakInfoProps];
            const bValue = b[property as keyof BuldakInfoProps];
            return state === SortingState.asc
                ? compare(property, aValue, bValue)
                : -compare(property, aValue, bValue);
        });
    
        console.log(sortedArray);
        setCurrentArray(sortedArray);
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
                {currentShownArray.map((buldak) => 
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