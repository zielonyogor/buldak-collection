import { Spiciness } from "@/types/buldak";


export default function compare(property: string, a: any, b: any) {
    if(property === "spiciness"){
        const aValue = Spiciness[a];
        const bValue = Spiciness[b];
        console.log(`${aValue} i ${bValue}`);   

        return aValue - bValue;
    }
    if(typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    } 
    else if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }

    return 0;
}