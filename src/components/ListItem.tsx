import { MouseEventHandler, ReactNode } from 'react';

interface ListItemProps {
    className?: string;
    children?: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function ListItem({className = "", children, onClick}: ListItemProps) {
    return (
        <button className={`list-item ${className}`} onClick={onClick} >{children}</button>
    )
}