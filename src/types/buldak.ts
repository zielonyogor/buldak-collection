export const Spiciness: Record<string, number> = {
    "Mild": 0,
    "Spicy": 1,
    "Extra Spicy": 2,
    "Dangerously Spicy": 3,
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