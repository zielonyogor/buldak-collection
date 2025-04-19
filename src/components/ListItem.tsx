import { MouseEventHandler, ReactNode } from 'react';

interface ListItemProps {
    className?: string;
    children?: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function ListItem({className = "", children, onClick}: ListItemProps) {
    return (
        <div className={`list-item ${className}`}>
            <button onClick={onClick} >{children}</button>
        </div>
    )
}