import { v4 as uuidv4 } from 'uuid';
import { Mission } from "./mission";
import { getMissionTitle } from '@/missions/titles';
import { ForceLevel } from '../enemy/ForceLevel';
import { StateProfile } from '../map/StateProfile';
import { USStateAbbreviation } from '../map/USStateAbbreviation';
import { getRandomLocationByState } from '../map/locations';
import { MissionType } from '@/missions/mission-type';
import { getRandomObjectiveByType, getRandomOptionalByType } from './Objectives';


export function generateRandomMission(discoveryState: USStateAbbreviation, operationState: USStateAbbreviation, forceLevels: ForceLevel[], type: MissionType): Mission {

    const id = "missionID_" + uuidv4();
    const name = getMissionTitle();
    const location = getRandomLocationByState(operationState);
    const objectives = [getRandomObjectiveByType(type)];
    const optionals = [getRandomOptionalByType(type)]
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet arcu ut libero pharetra eleifend. Vivamus euismod, erat in sollicitudin iaculis, elit lorem pellentesque nulla, id faucibus sapien felis sit amet libero. Quisque malesuada purus eu tortor feugiat, at lacinia nisl faucibus. Ut suscipit, lorem ac mollis tempus, turpis arcu tincidunt tortor, vel interdum nulla odio sit amet libero. Aliquam auctor volutpat ante, nec euismod eros pretium nec. Sed gravida, augue sit amet pretium malesuada, enim eros sollicitudin felis, at lobortis ipsum tortor sed odio. Mauris sollicitudin, nisi at faucibus feugiat, erat erat venenatis nulla, et convallis magna felis nec orci. Vivamus vehicula lorem ac dolor posuere, at lacinia leo egestas. Nunc condimentum ipsum sit amet turpis tempor, et tristique orci tincidunt. Nullam venenatis viverra orci, eu lobortis dolor bibendum ac. Curabitur at tincidunt ante. Cras in sapien ac orci scelerisque maximus. Curabitur imperdiet tortor non ante placerat, ut consequat odio sodales. Suspendisse potenti. Nunc tristique lobortis sollicitudin. Fusce convallis, lorem vel vehicula lacinia, sapien elit facilisis ligula, vel dignissim eros augue id est.";
    
    /* Difficulty - properties that will greatly affect the difficulty of a mission */
    // Soldier Limit - based off operationState player force levels
    

}   

/*

in/out state
soldier limit
urgency
distance

*/