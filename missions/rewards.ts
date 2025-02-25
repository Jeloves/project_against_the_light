import { getResourceTypeByIndex, ResourceType } from "@/resources/resource-types";
import { MissionType } from "../game/missions/mission-type";
import { getRandomIndex, getRandomUniqueIndices } from "@/utils/math";

export type MissionReward = {
    resource: ResourceType;
    amount: number;
}

const missionRewardsMap = new Map<MissionType, ResourceType[]>();

missionRewardsMap.set(MissionType.assault, [ResourceType.supplies, ResourceType.facilities]);
missionRewardsMap.set(MissionType.counter_reconnaissance, []);
missionRewardsMap.set(MissionType.defense, [ResourceType.supplies]);
missionRewardsMap.set(MissionType.elimination, []);
missionRewardsMap.set(MissionType.exfiltration, []);
missionRewardsMap.set(MissionType.extraction, [ResourceType.workers, ResourceType.soldiers, ResourceType.civilians]);
missionRewardsMap.set(MissionType.raid, [ResourceType.intel]);
missionRewardsMap.set(MissionType.reconnaissance, []);
missionRewardsMap.set(MissionType.rescue, [ResourceType.workers, ResourceType.soldiers, ResourceType.civilians]);
missionRewardsMap.set(MissionType.scavenge, [ResourceType.supplies]);

const baseRewardsMap = new Map<string, number>();
baseRewardsMap.set(ResourceType.supplies, 50);
baseRewardsMap.set(ResourceType.intel, 5);
baseRewardsMap.set(ResourceType.food, 25);
baseRewardsMap.set(ResourceType.water, 25);
baseRewardsMap.set(ResourceType.civilians, 1);
baseRewardsMap.set(ResourceType.soldiers, 1);
baseRewardsMap.set(ResourceType.workers, 1);
baseRewardsMap.set(ResourceType.facilities, 1);

export function generateMissionRewards(type: MissionType, difficultyMultiplier: number): Map<ResourceType, number> {

    // Generates a list of 1-2 possible types of resources to be rewarded.
    let resourceTypes: ResourceType[] = getRandomReward(missionRewardsMap.get(type));

    // Generates a value for each reward type
    let rewardsMap = new Map<ResourceType, number>();
    for (let type of resourceTypes) {
        let value = baseRewardsMap.get(type) * difficultyMultiplier;
        rewardsMap.set(type, value);
    }
    return rewardsMap;
}

export function getRandomReward(possibleTypes: ResourceType[]): ResourceType[] {

    let mainReward: ResourceType[] = [];

    // Deciding if reward will be split into two different resource types
    const isSplit = Math.random() < 0.5;
    if (isSplit) {
        // Only two resource types can be rewarded
        const randomIndices = getRandomUniqueIndices(possibleTypes.length, 2);
        for (let i of randomIndices) {
            mainReward.push(possibleTypes[i])
        }
    } else {
        const randomIndex = getRandomIndex(possibleTypes.length);
        mainReward.push(possibleTypes[randomIndex]);
    }
    return mainReward;
}