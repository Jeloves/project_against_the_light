import { v4 as uuidv4 } from 'uuid';
import { Mission } from "./mission";
import { getMissionTitle } from '@/missions/titles';


export function createMission(): Mission {

    const id = "missionID_" + uuidv4();
    const name = getMissionTitle();

    return new Mission();
}