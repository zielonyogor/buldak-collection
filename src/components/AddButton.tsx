import React from "react";
import { availableColors } from "@/types/buldak";

interface AddButtonProps {
    onAddItem: (color: string) => void;
}

export default function AddButton({onAddItem} : AddButtonProps) {
    const [currentColor, setCurrentColor] = React.useState(0);

    function switchColor(direction: number) {
        setCurrentColor(prevColor => (prevColor + direction + availableColors.length) % availableColors.length);
    }
    
    return (
        <div className="list-item buldak-item">
            <div className="add-btn">
                <button className="color-btn" onClick={() => {switchColor(-1)}}>
                    {'<'}
                </button>
                <button onClick={() => {
                    onAddItem(availableColors[currentColor]);
                }}>
                    <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.48438 118.935L12.2099 114.536C16.2806 112.219 20.8843 111 25.5686 111H95.4312C100.115 111 104.719 112.219 108.79 114.536L116.516 118.935C118.516 120.073 121 118.629 121 116.328C121 72.333 121 47.6669 121 3.67232C121 1.37092 118.516 -0.0734109 116.516 1.06514L109.33 5.28388C105.185 7.71711 100.466 8.99995 95.6601 8.99995H25.5688C20.8845 8.99995 16.2809 7.78127 12.2101 5.46366L4.48438 1.06514C2.48438 -0.0734109 0 1.37092 0 3.67232C0 47.6669 0 72.333 0 116.328C0 118.629 2.48438 120.073 4.48438 118.935Z" fill={availableColors[currentColor]}/>
                    </svg>
                </button>
                <button className="color-btn" onClick={() => {switchColor(1)}}>
                    {'>'}
                </button>
            </div>
        </div>
    )
}