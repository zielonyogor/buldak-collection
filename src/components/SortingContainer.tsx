import { SortingState } from "@/types/sortingState";
import Sorting from "./Sorting";
import React from "react";

interface SortingContainerProps {
    onSortBy: (property: string, newSortingState: SortingState) => void;
}

export default function SortingContainer({ onSortBy }: SortingContainerProps) {
    const [currentSort, setCurrentSort] = React.useState({
        property: "name",
        state: SortingState.asc
    })

    function updateSorting(property: string){
        let newSortingState: SortingState;
        if (property === currentSort.property) { // if sort didn't change
            newSortingState = (currentSort.state) % 2 + 1;
        }
        else {
            newSortingState = SortingState.asc;   
        }
        
        setCurrentSort({property: property, state: newSortingState});
        onSortBy(property, newSortingState);
    }

    const getState = (name: string) => 
        name === currentSort.property ? currentSort.state : SortingState.off;
    
    return (
        <>
            <Sorting property='name' state={getState('name')} onSortingClick={updateSorting}>
                Name
            </Sorting>
            <Sorting property='rating' state={getState('rating')} onSortingClick={updateSorting}>
                Rating
            </Sorting>
            <Sorting property='spiciness' state={getState('spiciness')} onSortingClick={updateSorting}>
                Spiciness
            </Sorting>
        </>
    )
}