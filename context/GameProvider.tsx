import { ReactNode, useReducer } from "react";
import { GameContext, gameReducer, GameState } from "./GameContext";
import { ResourceInventory } from "@/game/resources/resources";

type GameProviderProps = {
  children: ReactNode;
};

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const initialState: GameState = {
    data: 0
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

