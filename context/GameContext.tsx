import { createContext, useContext } from "react";

export type GameState = {
    resources: number;
    time: string;
    isPaused: boolean;
};

export type Action =
    | { type: 'INCREASE_RESOURCES'; payload: number }
    | { type: 'SET_TIME'; payload: string }
    | { type: 'TOGGLE_PAUSE' };


export const gameReducer = (state: GameState, action: Action): GameState => {
    switch (action.type) {
        case 'INCREASE_RESOURCES':
            return { ...state, resources: state.resources + action.payload };
        case 'SET_TIME':
            return { ...state, time: action.payload };
        case 'TOGGLE_PAUSE':
            return { ...state, isPaused: !state.isPaused };
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