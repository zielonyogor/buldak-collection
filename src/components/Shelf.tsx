import List from '@/components/List';
import SearchBar from '@/components/SearchBar';
import ListItem from '@/components/ListItem';
import React from 'react';

import BuldakInfoProps from '@/types/buldak';
import { SortingState } from "@/types/sortingState";
import "@/assets/styles/buldak_collection.scss";
import compare from '@/types/compare';
import SortingContainer from './SortingContainer';
import AddButton from './AddButton';

interface ShelfProps {
    array: Array<BuldakInfoProps>;
    onItemClicked: (buldak: BuldakInfoProps) => void;
    onAddItem: (color: string) => void;
}

export default function Shelf({array, onItemClicked, onAddItem}: ShelfProps) {

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
                    <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.48438 118.935L12.2099 114.536C16.2806 112.219 20.8843 111 25.5686 111H95.4312C100.115 111 104.719 112.219 108.79 114.536L116.516 118.935C118.516 120.073 121 118.629 121 116.328C121 72.333 121 47.6669 121 3.67232C121 1.37092 118.516 -0.0734109 116.516 1.06514L109.33 5.28388C105.185 7.71711 100.466 8.99995 95.6601 8.99995H25.5688C20.8845 8.99995 16.2809 7.78127 12.2101 5.46366L4.48438 1.06514C2.48438 -0.0734109 0 1.37092 0 3.67232C0 47.6669 0 72.333 0 116.328C0 118.629 2.48438 120.073 4.48438 118.935Z" fill={buldak.packageColor}/>
                    </svg>
                </ListItem>)}
                <AddButton onAddItem={onAddItem} />
            </List>
        </div>
    )
}