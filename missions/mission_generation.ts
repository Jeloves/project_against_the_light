import { getRandomUniqueIndices } from "@/utils/math";
import { getMissionTypeByIndex, totalMissionTypes } from "./mission-type";
import { USStateAbbreviation } from "./missions";

export function generateMission() {
    // Params

    // Code

}

export function generateMissionSelection(state: USStateAbbreviation, totalTravelTime: number, expirationTime: number) {

    // Determine mission types
    const count = 4;
    const indices = getRandomUniqueIndices(totalMissionTypes, count);
    const missionTypes = [];
    for (let i of indices) {
        missionTypes.push(getMissionTypeByIndex(i))
    }
    console.log(indices)
    console.log(missionTypes)

}