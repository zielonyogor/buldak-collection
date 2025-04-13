import BuldakInfoProps from "@/types/buldak";
import Rating from "@/components/Rating";

export default function BuldakDetails(props: BuldakInfoProps) {
    return (
        <div className="details-container">
            <div className="buldak-details">
                <p>{props.name}</p>
                <p>{props.spice}</p>
                <p>{props.bestWith}</p>
                <p>{props.whereToBuy}</p>
            </div>
            <Rating rating={props.rating} maxValue={10}/>
        </div>
    )
}