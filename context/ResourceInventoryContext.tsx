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
    | { type: 'ADD_NUMERICAL_RESOURCE'; payload: string }
    | { type: 'TOGGLE_PAUSE' };


export const resourceInventoryReducer = (state: ResourceInventoryState, action: ResourceInventoryAction): ResourceInventoryState => {
    switch (action.type) {
        case 'ADD_NUMERICAL_RESOURCE':
            console.log("adding new resource")
            break;
        default:
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