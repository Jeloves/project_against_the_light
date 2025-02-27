import { v4 as uuidv4 } from 'uuid';
import { StateProfile } from "@/game/map/StateProfile";
import { getListOfUSStates, USStateAbbreviation } from "@/game/map/USStateAbbreviation";
import { Mission } from "@/game/missions/mission";
import { getRandomMissionType, MissionType } from "@/game/missions/mission-type";
import { createTimestamp } from "@/game/time/timestamp";
import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { getMissionTitle } from '@/missions/titles';
import { GameClock } from '@/game/time/GameClock';
import { MissionStatus } from '@/game/missions/MissionStatus';
import { TickRate } from '@/game/time/GameSpeed';
import { getRandomInteger } from '@/utils/math';

export type MapState = {
    stateProfiles: Map<USStateAbbreviation, StateProfile>;
    missions: Mission[];
    clock: GameClock;
    secondsFromEpoch: number;
};

export type MapAction =
    | { type: "CREATE_DEFAULT_MISSION" }
    | { type: "SAMPLE_ACTION" }
    | { type: "PAUSE_CLOCK" }
    | { type: "PLAY_CLOCK" }
    | { type: "SET_INCREMENT_PROPERTY", payload: any }
    | { type: "SET_CLOCK_DISPATCH", payload: any }
    | { type: "INCREMENT_SECONDS_FROM_EPOCH" }
    | { type: "DECREMENT_MISSION_TIMERS", payload: TickRate }
    ;

export const mapReducer = (state: MapState, action: MapAction): MapState => {
    const updatedClock = new GameClock(state.clock);
    const updatedMissions = state.missions.map((mission, index) => {
        if (index === 0) {
            const clone = new Mission(
                mission.getId(),
                mission.getType(),
                mission.getName(),
                mission.getDiscoveryState(),
                mission.getOperationState(),
                mission.getLocation(),
                mission.getObjectives(),
                mission.getOptionals(),
                mission.getDescription(),
                mission.getSoldierLimit(),
                mission.getEnemyLimit(),
                mission.getDiscoveryDate(),
                mission.getExpirationDate(),
                mission.getArrivalDate()
            );
            return clone;
        }
        return mission;
    });

    switch (action.type) {
        case "CREATE_DEFAULT_MISSION":
            const defaultMission = new Mission(
                "missionID_default" + uuidv4(),
                getRandomMissionType(),
                getMissionTitle(),
                "MD",
                "MD",
                "Reisterstown Outskirts",
                ["Neutralize all enemies in the AO."],
                [],
                "Lorem ipsum",
                6,
                8,
                createTimestamp(0),
                createTimestamp(getRandomInteger(6000,7200)),
                createTimestamp(getRandomInteger(800,1200))
            );
            return { ...state, missions: [...state.missions, defaultMission] };
        case "SAMPLE_ACTION":
            state.missions.map((mission, index) => {
                if (index === 0) {
                    const newExpirationTime = mission.getExpirationTimeRemaining() - 1;

                    const updatedMission = new Mission(
                        mission.getId(),
                        mission.getType(),
                        mission.getName(),
                        mission.getDiscoveryState(),
                        mission.getOperationState(),
                        mission.getLocation(),
                        mission.getObjectives(),
                        mission.getOptionals(),
                        mission.getDescription(),
                        mission.getSoldierLimit(),
                        mission.getEnemyLimit(),
                        mission.getDiscoveryDate(),
                        mission.getExpirationDate(),
                        mission.getArrivalDate()
                    );

                    updatedMission.setExpirationTimeRemaining(Math.max(newExpirationTime, 0)); // Ensure expiration time doesn't go below 0

                    return updatedMission;
                }
                return mission;
            });

            return { ...state, missions: updatedMissions };
        case "PAUSE_CLOCK":
            console.log("Paused.")
            updatedClock.pause();
            return { ...state, clock: updatedClock };
        case "PLAY_CLOCK":
            console.log("Playing...")
            updatedClock.start();
            return { ...state, clock: updatedClock };
        case "SET_CLOCK_DISPATCH":
            updatedClock.setDispatchAction(action.payload);
            return { ...state, clock: updatedClock }
        case "INCREMENT_SECONDS_FROM_EPOCH":
            return { ...state, secondsFromEpoch: state.secondsFromEpoch + 1 }
        case "DECREMENT_MISSION_TIMERS":

            for (let mission of updatedMissions) {
                switch (mission.getStatus()) {
                    case MissionStatus.available:   // Decrement expiration time
                        mission.setExpirationTimeRemaining(mission.getExpirationTimeRemaining() - action.payload);
                        break;
                    case MissionStatus.deployed:   // Decrement travel time
                        mission.setTravelTimeRemaining(mission.getTravelTimeRemaining() - action.payload);
                        break;
                    case MissionStatus.engaged:
                        break;
                    case MissionStatus.failure:   // Decrement return-travel time
                        mission.setTravelTimeRemaining(mission.getTravelTimeRemaining() + action.payload);
                        break;
                    case MissionStatus.order:
                        break;
                    case MissionStatus.success:   // Decrement return-expiration time
                        mission.setTravelTimeRemaining(mission.getTravelTimeRemaining() + action.payload);
                        break;
                    default:
                        throw new Error("Unhandled case: failed to decrement mission timers.");
                }
            }

            return { ...state, missions: updatedMissions };
        default:
            return state;
    }
};

export const MapContext = createContext<{ mapState: MapState; dispatchMap: React.Dispatch<MapAction> } | undefined>(undefined);

export const useMapContext = () => {
    // Access the context value using useContext hook
    const context = useContext(MapContext);

    // Throw an error if the context is used outside of a provider
    if (!context) {
        throw new Error('useMapContext must be used within a GameProvider');
    }

    return context;
};