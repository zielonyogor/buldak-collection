import React from 'react';

interface RatingProps {
    rating: number,
    maxValue: number
}

export default function Rating({rating, maxValue} : RatingProps) {
    const [currentRating, setRating] = React.useState(rating);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRating(Number(e.currentTarget.value));
    }
    
    return (
        <div className="rating-container">
            <input className="rating-input" type="range" 
                min={1} max={maxValue} step={1} value={currentRating}
                onChange={handleChange}
            ></input>
        </div>
    )
}