import { SortingState } from "@/types/sortingState"
import { ReactNode } from "react"

interface SortingProps {
    property: string;
    state: SortingState;
    onSortingClick: (property: string) => void;
    children?: ReactNode;
}

export default function Sorting({property, state, onSortingClick, children} : SortingProps) {
    const onClick = () => onSortingClick(property);
    return (
        <button onClick={onClick} className="sorting-btn">
            {children} {state === SortingState.asc ? '^' : state === SortingState.desc ? 'v' : '-'}
        </button>
    )
}