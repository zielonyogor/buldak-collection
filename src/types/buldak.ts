export default interface BuldakInfoProps {
    id: number;
    name: string;
    packageColor: string;
    rating: number;
    spiciness: string;
    whereToBuy: Array<string>;
    bestWith: Array<string>;
}

export const Spiciness: Record<string, number> = {
    "Mild": 0,
    "Spicy": 1,
    "Extra Spicy": 2,
    "Dangerously Spicy": 3,
}

export const availableColors = [
    "#FAA5C0",
    "#DC2959",
    "#2A272D",
    "#84DC3B",
    "#432B83",
    "#EE9D9D",
    "#6F41A8",
];