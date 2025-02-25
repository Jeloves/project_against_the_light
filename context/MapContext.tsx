import { v4 as uuidv4 } from 'uuid';
import { StateProfile } from "@/game/map/StateProfile";
import { getListOfUSStates, USStateAbbreviation } from "@/game/map/USStateAbbreviation";
import { Mission } from "@/game/missions/mission";
import { MissionType } from "@/game/missions/mission-type";
import { createTimestamp } from "@/game/time/timestamp";
import { createContext, useContext } from "react";
import { getMissionTitle } from '@/missions/titles';

export type MapState = {
    stateProfiles: Map<USStateAbbreviation, StateProfile>;
    missions: Mission[];
};

export type MapAction =
    | { type: "CREATE_DEFAULT_MISSION"}


export const mapReducer = (state: MapState, action: MapAction): MapState => {
    switch (action.type) {
        case "CREATE_DEFAULT_MISSION":
            const defaultMission = new Mission(
                "missionID_default" + uuidv4(),
                MissionType.assault,
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
                createTimestamp(7200),
                createTimestamp(1200)
            );
            return {...state, missions: [...state.missions, ...[defaultMission]]};
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