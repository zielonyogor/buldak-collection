export enum Spiciness {
    Mild,
    Spicy,
    Extra_Spicy,
    Dangerously_Spicy
}

export default interface BuldakInfoProps {
    id: number;
    name: string;
    imageUrl: string;
    rating: number;
    spiciness: string;
    whereToBuy: Array<string>;
    bestWith: Array<string>;
}