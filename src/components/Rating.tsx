import React from 'react';

interface RatingProps {
    rating: number,
}

export default function Rating({rating} : RatingProps) {
    const [currentRating, setRating] = React.useState(rating);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRating(Number(e.currentTarget.value));
    }
    
    return (
        <div className="rating-container">
            {Array.from({ length: 10 }, (_, i) => (
            <div
                key={i}
                className={`circle ${i < currentRating ? 'filled' : ''}`}
            />
            ))}
            <input className="rating-input" type="range" 
                min={1} max={10} step={1} value={currentRating}
                onChange={handleChange}
            ></input>
        </div>
    )
}