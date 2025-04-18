import React from 'react';

interface RatingProps {
    rating: number,
    disabled: boolean,
    onRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Rating({rating, disabled = false, onRatingChange} : RatingProps) {
    const [currentRating, setRating] = React.useState(rating);

    React.useEffect(() => {
        setRating(rating);
    }, [rating])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(`current rating: ${e.currentTarget.value}`);
        //onRatingChange(parseInt(e.currentTarget.value));
        //setRating(Number(e.currentTarget.value));
    }
    
    return (
        <div className="rating-container">
            {Array.from({ length: 10 }, (_, i) => (
            <div
                key={i}
                className={`circle ${i < rating ? 'filled' : ''}`}
            />
            ))}
            <div
                className="knob"
                style={{
                transform: `rotate(${(rating - 1) * (290 / 10) - 180}deg)`
                }}
            ></div>
            <input className="rating-input" type="range" 
                min={1} max={10} step={1} value={currentRating}
                onChange={onRatingChange}
                disabled={disabled}
            ></input>
        </div>
    )
}