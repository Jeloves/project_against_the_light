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
    | { type: 'INCREASE_RESOURCE'; payload: { resource: PrimaryResource, addend: number } }
    | { type: 'TOGGLE_PAUSE' };


export const resourceInventoryReducer = (state: ResourceInventoryState, action: ResourceInventoryAction): ResourceInventoryState => {
    switch (action.type) {
        case 'INCREASE_RESOURCE':
            switch (action.payload.resource) {
                case PrimaryResource.rations:
                    return { ...state, rations: state.rations + action.payload.addend };
                case PrimaryResource.supplies:
                    return { ...state, supplies: state.supplies + action.payload.addend };
                case PrimaryResource.intel:
                    return { ...state, intel: state.intel + action.payload.addend };
                default:
                    console.error("INCREASE_RESOURCE default value***")
                    break;
            }
        default:
            console.error("INCREASE_RESOURCE default value")
            break;
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

export function increaseResource(state: ResourceInventoryState, action: ResourceInventoryAction, resource: PrimaryResource, addend: number) {
    switch (resource) {
        case PrimaryResource.rations:
            return { ...state, resources: state.rations + addend };
        case PrimaryResource.supplies:
            break;
        case PrimaryResource.intel:
            break;
        case PrimaryResource.soldiers:
            break;
        case PrimaryResource.civilians:
            break;
        case PrimaryResource.facilities:
            break;
        default:
            console.error("Failed to increase resource amount: Default value.")
            break;
    }
}