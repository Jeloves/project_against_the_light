import { StateProfile } from "@/game/map/StateProfile";
import { USStateAbbreviation } from "@/game/map/USStateAbbreviation";
import { ResourceInventory } from "@/game/resources/resources";
import { createContext, useContext } from "react";

export type MapState = {
    stateProfiles: Map<USStateAbbreviation, StateProfile>;
};

export type MapAction =
    | { type: 'GET_STATE_PROFILES'; payload: Map<USStateAbbreviation, StateProfile> }


export const mapReducer = (state: MapState, action: MapAction): MapState => {
    switch (action.type) {
        case 'GET_STATE_PROFILES':
        break;
        default:
            return state;
    }
};

export const MapContext = createContext<{ state: MapState; dispatch: React.Dispatch<MapAction> } | undefined>(undefined);

export const useMapContext = () => {
    // Access the context value using useContext hook
    const context = useContext(MapContext);

    // Throw an error if the context is used outside of a provider
    if (!context) {
        throw new Error('useMapContext must be used within a GameProvider');
    }

    return context; 
};