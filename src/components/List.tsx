import { ReactNode } from 'react';

interface ListProps {
    className?: string,
    children: ReactNode,
}

export default function List({className = "", children}: ListProps) {

    return (
        <div className={`list-container ${className}`}>
            {children}
        </div>
    )
}