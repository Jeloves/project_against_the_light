import { ReactNode, useReducer } from "react";
import { GameContext, gameReducer, GameState } from "./GameContext";

type GameProviderProps = {
  children: ReactNode;
};

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const initialState: GameState = {
    resources: 100,
    time: '2025-02-23T10:00:00',
    isPaused: false,
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

