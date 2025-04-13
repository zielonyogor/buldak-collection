import ListItem from '@/components/ListItem';
import BuldakInfoProps from '@/types/buldak';

interface ListProps {
    listItems: Array<BuldakInfoProps>;
}

export default function List({listItems}: ListProps) {
    console.log(listItems);

    return (
        <div>
            {listItems.map((item) => 
            <ListItem key={item.id} {...item} />
            )}
        </div>
    )
}