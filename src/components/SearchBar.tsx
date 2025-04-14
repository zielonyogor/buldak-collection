import { ChangeEvent } from "react";

interface SearchBarProps {
    property: string;
    onChange: (query: string) => void;
}

export default function SearchBar({property, onChange}: SearchBarProps) {

    function returnSearch(e: ChangeEvent<HTMLInputElement>) {
        onChange(e.currentTarget.value);
    }

    return (
        <div className="search-container">
            <input type="text" name="search" autoComplete="off" placeholder="Search..." onChange={returnSearch}></input>
        </div>
    )
}