import List from '@/components/List';
import SearchBar from '@/components/SearchBar';
import ListItem from '@/components/ListItem';
import React from 'react';

import BuldakInfoProps from '@/types/buldak';
import { SortingState } from "@/types/sortingState";
import "@/assets/styles/buldak_collection.scss";
import compare from '@/types/compare';
import SortingContainer from './SortingContainer';

interface ShelfProps {
    array: Array<BuldakInfoProps>;
    onItemClicked: (buldak: BuldakInfoProps) => void;
}

export default function Shelf({array, onItemClicked}: ShelfProps) {

    const [currentArray, setCurrentArray] = React.useState(array);
    const [currentShownArray, setCurrentShownArray] = React.useState(array);
    const [currentSort, setCurrentSort] = React.useState<{property: string, state: SortingState}>({
        property: 'name', 
        state: SortingState.asc,
    });

    React.useEffect(() => {
        setCurrentArray(array);
        setCurrentShownArray(array);
        applySorting(currentSort.property, currentSort.state, array);
    }, [array]);

    function onSearchResultChanged(query: string) {
        const re = new RegExp(`.*${query}.*`);
        const sortedArray = currentArray.filter((item) => re.test(item['name'].toLowerCase()));
        applySorting(currentSort.property, currentSort.state, sortedArray);
    }

    function applySorting(property: string, state: SortingState, baseArray = currentShownArray) {
       setCurrentSort({property: property, state: state});
    
        const sortedArray = [...baseArray].sort((a, b) => {
            const aValue = a[property as keyof BuldakInfoProps];
            const bValue = b[property as keyof BuldakInfoProps];
            return state === SortingState.asc
                ? compare(property, aValue, bValue)
                : -compare(property, aValue, bValue);
        });
        
        setCurrentShownArray(sortedArray);
    }

    return (
        <div className='shelf'>
            <div className='search-sort-container'>
                <SearchBar property='name' onChange={onSearchResultChanged}/>
                <SortingContainer onSortBy={applySorting} />
            </div>
            <List>
                {currentShownArray.map((buldak) => 
                <ListItem key={buldak.id} 
                    onClick={() => {
                        onItemClicked(buldak);
                    }} 
                    className='buldak-item'
                >
                    <img src={buldak.imageUrl} />
                </ListItem>)}
            </List>
        </div>
    )
}