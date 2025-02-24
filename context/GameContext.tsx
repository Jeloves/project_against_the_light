import { ResourceInventory } from "@/game/resources/resources";
import { createContext, useContext } from "react";

export type GameState = {
    data: number;
};

export type Action =
    | { type: 'ADD_NUMERICAL_RESOURCE'; payload: string }
    | { type: 'TOGGLE_PAUSE' };


export const gameReducer = (state: GameState, action: Action): GameState => {
    switch (action.type) {
        case 'ADD_NUMERICAL_RESOURCE':
            
        break;
        default:
            return state;
    }
};

export const GameContext = createContext<{ state: GameState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Custom hook to use the GameContext
export const useGameContext = () => {
    // Access the context value using useContext hook
    const context = useContext(GameContext);

    // Throw an error if the context is used outside of a provider
    if (!context) {
        throw new Error('useGameContext must be used within a GameProvider');
    }

    return context; // Return the context value (state and dispatch)
};