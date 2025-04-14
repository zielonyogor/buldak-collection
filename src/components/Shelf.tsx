import List from '@/components/List';
import SearchBar from '@/components/SearchBar';
import ListItem from '@/components/ListItem';

import buldakArray from '@/data/buldak_data.json';
import "@/assets/styles/buldak_collection.scss";
import Sorting from './Sorting';

export default function Shelf() {

    function onItemClicked(value: any) {
        console.log(value);
    }

    function onSearchResultChanged(query: string) {
        console.log(`Search: ${query}`);
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
                {buldakArray.map((buldak) => <ListItem key={buldak.id} onClick={onItemClicked} className='buldak-item'>
                    <img src={buldak.imageUrl} />
                </ListItem>)}
            </List>
        </div>
    )
}