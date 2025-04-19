import BuldakInfoProps, { Spiciness } from "@/types/buldak";
import Rating from "@/components/Rating";
import potIcon from '@/assets/images/icons/pot.svg';
import trashIcon from '@/assets/images/icons/trash-fill.svg';
import editIcon from '@/assets/images/icons/edit-svgrepo-com.svg';
import saveIcon from '@/assets/images/icons/floppy-fill.svg';
import React from "react";

interface BuldakDetailsProps {
    props: BuldakInfoProps,
    onEditClicked: (editedBuldak: BuldakInfoProps) => void;
    onDeleteClicked: (id: number) => void;
}

export default function BuldakDetails({props, onEditClicked, onDeleteClicked} : BuldakDetailsProps) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editingProps, setEditingProps] = React.useState(props);

    // temp for arrays
    const [bestWithInput, setBestWithInput] = React.useState(props.bestWith.join(", "));
    const [whereToBuyInput, setWhereToBuyInput] = React.useState(props.whereToBuy.join(", "));

    React.useEffect(() => {
        setEditingProps(props);
        if(props.id === 0) {
            setIsEditing(true);
        }
        else {
            setIsEditing(false);
        }
        setBestWithInput(props.bestWith.join(", "));
        setWhereToBuyInput(props.whereToBuy.join(", "));
    }, [props]);

    function switchEditBuldak() {
        if(isEditing) {
            onEditClicked(editingProps);
        }
        setIsEditing(prevIsEditing => !prevIsEditing);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        if(name === "bestWith") {
            setBestWithInput(value);

        }
        else if (name === "whereToBuy") {
            setWhereToBuyInput(value);
        }
        else {
            setEditingProps(prevProps => ({
                ...prevProps, 
                [name]: value
            }))
        }
    }

    function handleArrayChange(e: React.FocusEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setEditingProps(prevProps => ({
            ...prevProps,
            [name]: value.split(",").map(item => item.trim()).filter(item => item !== "")
        }));
    }

    function setRating(newRating: number) {
        setEditingProps(prevProps => ({
            ...prevProps, 
            ["rating"]: newRating
        }));
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
                                    onBlur={handleArrayChange}
                                    onChange={handleInputChange}
                                    value={bestWithInput}
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
                                    onBlur={handleArrayChange}
                                    onChange={handleInputChange}
                                    value={whereToBuyInput}
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
                    <img src={isEditing ? saveIcon : editIcon} />
                </button>
                <Rating rating={editingProps.rating} disabled={!isEditing} onRatingChange={setRating} />
                <button 
                    onClick={() => onDeleteClicked(editingProps.id)}
                >
                    <img src={trashIcon} />
                </button>
            </div>
        </div>
    )
}