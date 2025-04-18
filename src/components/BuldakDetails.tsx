import BuldakInfoProps, { Spiciness } from "@/types/buldak";
import Rating from "@/components/Rating";
import potIcon from '@/assets/images/pot.svg';
import trashIcon from '@/assets/images/trash-fill.svg';
import editIcon from '@/assets/images/edit-svgrepo-com.svg';
import React from "react";

interface BuldakDetailsProps {
    props: BuldakInfoProps,
    onEditClicked: (editedBuldak: BuldakInfoProps) => void;
    onDeleteClicked: (id: number) => void;
}

export default function BuldakDetails({props, onEditClicked, onDeleteClicked} : BuldakDetailsProps) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editingProps, setEditingProps] = React.useState(props);

    React.useEffect(() => {
        setEditingProps(props);
        setIsEditing(false);
    }, [props]);

    function switchEditBuldak() {
        if(isEditing) {
            onEditClicked(editingProps);
        }
        setIsEditing(prevIsEditing => !prevIsEditing);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        if(name === "bestWith" || name === "whereToBuy"){
            
        }
        else {
            setEditingProps(prevProps => ({
                ...prevProps, 
                [name]: value
            }))
        }
    }

    return (
        <div className="details-container">
            <div className="buldak-details">
                <img src={potIcon} />
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input 
                                    name="name"
                                    type="text"
                                    onChange={handleInputChange}
                                    value={editingProps.name}
                                    disabled = {!isEditing}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Spice:</td>
                            <td>
                                <select 
                                    name="spiciness"
                                    onChange={handleInputChange}
                                    value={editingProps.spiciness}
                                    disabled = {!isEditing}
                                >
                                    {Object.keys(Spiciness).map((spice) => 
                                        <option key={spice} value={spice}>{spice}</option>
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Best with:</td>
                            <td>
                                <input 
                                    name="bestWith"
                                    type="text"
                                    onChange={handleInputChange}
                                    value={editingProps.bestWith.join(", ")}
                                    disabled = {!isEditing}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Where to buy:</td>
                            <td>
                                <input 
                                    name="whereToBuy"
                                    type="text"
                                    onChange={handleInputChange}
                                    value={editingProps.whereToBuy.join(", ")}
                                    disabled = {!isEditing}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="detail-input-container">
                <button 
                    onClick={switchEditBuldak}
                >
                    <img src={editIcon} />
                </button>
                <Rating rating={editingProps.rating} disabled={!isEditing} onRatingChange={handleInputChange} />
                <button 
                    onClick={() => onDeleteClicked(editingProps.id)}
                >
                    <img src={trashIcon} />
                </button>
            </div>
        </div>
    )
}