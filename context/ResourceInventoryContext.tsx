import { PrimaryResource } from "@/game/resources/resources";
import { createContext, useContext } from "react";

export type ResourceInventoryState = {
    rations: number;
    supplies: number;
    intel: number;
    soldierIDs: string[];
    civilianIDs: string[];
    facilityIDs: string[];
}

export type ResourceInventoryAction =
    | { type: 'INCREASE_RESOURCE'; payload: { resource: PrimaryResource.rations | PrimaryResource.supplies | PrimaryResource.intel, addend: number } }
    | { type: 'DECREASE_RESOURCE'; payload: { resource: PrimaryResource.rations | PrimaryResource.supplies | PrimaryResource.intel, subtrahend: number } }
    | { type: 'ADD_ID'; payload: { resource: PrimaryResource.soldiers | PrimaryResource.civilians | PrimaryResource.facilities, ids: string[] } }
    | { type: 'REMOVE_ID'; payload: { resource: PrimaryResource.soldiers | PrimaryResource.civilians | PrimaryResource.facilities, ids: string[] } };


export const resourceInventoryReducer = (state: ResourceInventoryState, action: ResourceInventoryAction): ResourceInventoryState => {
    switch (action.type) {
        // Adding to rations, supplies, or intel
        case 'INCREASE_RESOURCE':
            switch (action.payload.resource) {
                case PrimaryResource.rations:
                    return { ...state, rations: state.rations + action.payload.addend };
                case PrimaryResource.supplies:
                    return { ...state, supplies: state.supplies + action.payload.addend };
                case PrimaryResource.intel:
                    return { ...state, intel: state.intel + action.payload.addend };
                default:
                    console.error("Unhandled resource type in INCREASE_RESOURCE:", action.payload.resource);
                    return state;
            }
        // Subtracting from rations, supplies, or intel
        case 'DECREASE_RESOURCE':
            switch (action.payload.resource) {
                case PrimaryResource.rations:
                    return { ...state, rations: state.rations - action.payload.subtrahend };
                case PrimaryResource.supplies:
                    return { ...state, supplies: state.supplies - action.payload.subtrahend };
                case PrimaryResource.intel:
                    return { ...state, intel: state.intel - action.payload.subtrahend };
                default:
                    console.error("Unhandled resource type in DECREASE_RESOURCE:", action.payload.resource);
                    return state;
            }
        // Adding new IDs to soldier, civilian, or facility ids.
        case 'ADD_ID':
            switch (action.payload.resource) {
                case PrimaryResource.soldiers:
                    return { ...state, soldierIDs: [...state.soldierIDs, ...action.payload.ids].filter((value, index, self) => self.indexOf(value) === index) };
                case PrimaryResource.civilians:
                    return { ...state, civilianIDs: [...state.civilianIDs, ...action.payload.ids].filter((value, index, self) => self.indexOf(value) === index) };
                case PrimaryResource.facilities:
                    return { ...state, facilityIDs: [...state.facilityIDs, ...action.payload.ids].filter((value, index, self) => self.indexOf(value) === index) };
                default:
                    console.error("Unhandled resource type in ADD_ID:", action.payload.resource);
                    return state;
            }
        // Removing IDs from soldier, civilian, or facility ids.
        case 'REMOVE_ID':
            switch (action.payload.resource) {
                case PrimaryResource.soldiers:
                    return { ...state, soldierIDs: state.soldierIDs.filter(id => !action.payload.ids.includes(id)) };
                case PrimaryResource.civilians:
                    return { ...state, civilianIDs: state.civilianIDs.filter(id => !action.payload.ids.includes(id)) };
                case PrimaryResource.facilities:
                    return { ...state, facilityIDs: state.facilityIDs.filter(id => !action.payload.ids.includes(id)) };
                default:
                    console.error("Unhandled resource type in REMOVE_ID:", action.payload.resource);
                    return state;
            }
        default:
            console.error("Unhandled action type in resourceInventoryReducer.");
            return state;
    }
};

export const ResourceInventoryContext = createContext<{ resourceInventoryState: ResourceInventoryState; dispatchResourceInventory: React.Dispatch<ResourceInventoryAction> } | undefined>(undefined);

export const useResourceInventoryContext = () => {
    const context = useContext(ResourceInventoryContext);

    // Throw an error if the context is used outside of a provider
    if (!context) {
        throw new Error('useResourceInventoryContext must be used within a ResourceInventoryProvider');
    }

    return context;
}
