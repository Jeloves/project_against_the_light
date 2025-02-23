import { getRandomIndex } from "@/utils/math";

export enum ResourceType {
    supplies = "supplies",
    intel = "intel",
    food = "food",
    water = "water",
    civilians = "civilians",
    soldiers = "soldiers",
    workers = "workers",
    facilities = "facilities",
    medicine = "medicine",
    liquid_light = "liquid light"
}

export const totalResourceTypes = Object.keys(ResourceType).filter(key => isNaN(Number(key))).length;

export function getResourceTypeByIndex(index: number) {
    let count = 0;
    for (const key of Object.keys(ResourceType)) {
        if (count === index) {
            return ResourceType[key as keyof typeof ResourceType];
        }
        count++;
    }
}
