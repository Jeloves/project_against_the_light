import { v4 as uuidv4 } from 'uuid';
import { Mission } from "./mission";
import { getMissionTitle } from '@/missions/titles';
import { ForceLevel, ForceLevelReport } from '../enemy/ForceLevel';
import { StateProfile } from '../map/StateProfile';
import { USStateAbbreviation } from '../map/USStateAbbreviation';
import { getRandomLocationByState } from '../map/locations';
import { MissionType } from '@/missions/mission-type';
import { getRandomObjectiveByType, getRandomOptionalByType } from './Objectives';
import { createTimestamp, getTimestampBySecondsFromEpoch, Timestamp } from '../time/timestamp';
import { seconds_per_day } from '@/constants';
import { getRandomInteger } from '@/utils/math';


export function generateRandomMission(discoveryState: USStateAbbreviation, operationState: USStateAbbreviation, stateProfiles: Map<USStateAbbreviation, StateProfile>, type: MissionType, urgency: number | null, currentDate: Timestamp): Mission {

    const id = "missionID_" + uuidv4();
    const name = getMissionTitle();
    const location = getRandomLocationByState(operationState);
    const objectives = [getRandomObjectiveByType(type)];
    const optionals = [getRandomOptionalByType(type)]
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet arcu ut libero pharetra eleifend. Vivamus euismod, erat in sollicitudin iaculis, elit lorem pellentesque nulla, id faucibus sapien felis sit amet libero. Quisque malesuada purus eu tortor feugiat, at lacinia nisl faucibus. Ut suscipit, lorem ac mollis tempus, turpis arcu tincidunt tortor, vel interdum nulla odio sit amet libero. Aliquam auctor volutpat ante, nec euismod eros pretium nec. Sed gravida, augue sit amet pretium malesuada, enim eros sollicitudin felis, at lobortis ipsum tortor sed odio. Mauris sollicitudin, nisi at faucibus feugiat, erat erat venenatis nulla, et convallis magna felis nec orci. Vivamus vehicula lorem ac dolor posuere, at lacinia leo egestas. Nunc condimentum ipsum sit amet turpis tempor, et tristique orci tincidunt. Nullam venenatis viverra orci, eu lobortis dolor bibendum ac. Curabitur at tincidunt ante. Cras in sapien ac orci scelerisque maximus. Curabitur imperdiet tortor non ante placerat, ut consequat odio sodales. Suspendisse potenti. Nunc tristique lobortis sollicitudin. Fusce convallis, lorem vel vehicula lacinia, sapien elit facilisis ligula, vel dignissim eros augue id est.";

    /* Difficulty - properties that will greatly affect the difficulty of a mission */
    let operationStateProfile: StateProfile | null = null;
    stateProfiles.forEach((value, key) => {
        if (key === operationState) {
            operationStateProfile = value;
        }
    })

    if (operationStateProfile) {
        const playerForceLevel = operationStateProfile.getForces().player;

        // Soldier Limit: Affected by player strength in operation state
        let soldierLimit = 1;
        if (playerForceLevel.presence > 5) {
            // At presence 5 to 9, soldierLimit is 2. Every 10 presence, the limit increases by 2. 
            soldierLimit = 2 + 2 * Math.floor(playerForceLevel.presence / 10);
        }

        // Expiration Date: Determined by urgency
        let minSecondsFromEpoch: number | null;
        let maxSecondsFromEpoch: number | null;
        switch (urgency) {
            case 0: // Permanent
                minSecondsFromEpoch = null;
                maxSecondsFromEpoch = null;
                break;
            case 1: // 1-2 days
                minSecondsFromEpoch = currentDate.secondsFromEpoch + seconds_per_day;
                maxSecondsFromEpoch = currentDate.secondsFromEpoch + seconds_per_day * 2;
                break;
            case 2: // 3-5 days
                minSecondsFromEpoch = currentDate.secondsFromEpoch + seconds_per_day * 3;
                maxSecondsFromEpoch = currentDate.secondsFromEpoch + seconds_per_day * 5;
                break;
            case 3: // 6-9 days
                minSecondsFromEpoch = currentDate.secondsFromEpoch + seconds_per_day * 6;
                maxSecondsFromEpoch = currentDate.secondsFromEpoch + seconds_per_day * 9;
                break;
            case 4: // 10-12 days
                minSecondsFromEpoch = currentDate.secondsFromEpoch + seconds_per_day * 10;
                maxSecondsFromEpoch = currentDate.secondsFromEpoch + seconds_per_day * 12;
                break;
            default:
                throw new Error("Unhandled case: failed to generate expiration date.");
        }
        let randomSecondsFromEpoch = getRandomInteger(minSecondsFromEpoch, maxSecondsFromEpoch);
        let expirationDate = getTimestampBySecondsFromEpoch(randomSecondsFromEpoch);

        // Arrival Date: Determined by a randomized grace period, 0 to 24 hours after expiration date.
        let gracePeriod = getRandomInteger(expirationDate.secondsFromEpoch, expirationDate.secondsFromEpoch + seconds_per_day);
        let arrivalDate = createTimestamp(gracePeriod + expirationDate.secondsFromEpoch);

        return new Mission(id, type, name, discoveryState, operationState, location, objectives, optionals, description, soldierLimit, expirationDate, arrivalDate);

    } else {
        throw new Error("Failed to find matching operation state.");
    }
}

