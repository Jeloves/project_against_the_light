import { getRandomUniqueIndices } from "@/utils/math";
import { getMissionTypeByIndex, totalMissionTypes } from "../game/missions/mission-type";
import { USStateAbbreviation } from "./missions";
import { getMissionTitle } from "./titles";
import { getRandomLocationByState } from "../game/map/locations";

export function generateMission() {
    

}

export function generateInstateMission(state: USStateAbbreviation, type: string) {
    const title = getMissionTitle();
    const location = getRandomLocationByState(state);
}

export function generateMissionSelection(state: USStateAbbreviation, totalTravelTime: number, expirationTime: number) {

    // Determine mission types
    const count = 4;
    const indices = getRandomUniqueIndices(totalMissionTypes, count);
    const missionTypes = [];
    for (let i of indices) {
        missionTypes.push(getMissionTypeByIndex(i))
    }
    
    const missions = [];
    for (let type of missionTypes) {

    }

}