import { SortingState } from "@/types/sortingState"
import React from "react"

interface SortingProps {
    property: string;
    onSortingChange: (property: string, newSortingState: SortingState) => void;
}

export default function Sorting({property, onSortingChange} : SortingProps) {
    const [state, setState] = React.useState(SortingState.off);

    function updateSorting() {
        setState(prevState => (prevState + 1) % 3);
        onSortingChange(property, state);
    }

    return (
        <button onClick={updateSorting} className="sorting-container">
            Sort
        </button>
    )
}