import BuldakInfoProps from '@/types/buldak';
import Rating from '@/components/Rating';

export default function ListItem(props: BuldakInfoProps) {
    return (
        <div>
            <h2>{props.name}</h2>
            <button>Click</button>
            <Rating rating={props.rating} maxValue={10}/>
        </div>
    )
}