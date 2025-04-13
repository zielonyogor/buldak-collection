import BuldakInfoProps from "@/types/buldak";
import Rating from "@/components/Rating";

export default function BuldakDetails(props: BuldakInfoProps) {
    return (
        <div className="details-container">
            <div className="buldak-details">
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <td>Spice:</td>
                            <td>{props.spice}</td>
                        </tr>
                        <tr>
                            <td>Best with:</td>
                            <td>{props.bestWith.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>Where to buy:</td>
                            <td>{props.whereToBuy.join(", ")}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="detail-input-container">
                <Rating rating={props.rating} maxValue={10}/>
            </div>
        </div>
    )
}