import { ReactNode, useReducer } from "react";
import { ResourceInventory } from "@/game/resources/resources";
import { MapContext, mapReducer, MapState } from "./MapContext";
import { GameContext } from "./GameContext";
import { createAllDefaultStateProfiles } from "@/game/map/StateProfile";

type MapProviderProps = {
  children: ReactNode;
};

const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const initialState: MapState = {
    stateProfiles: createAllDefaultStateProfiles()
  };

  const [state, dispatch] = useReducer(mapReducer, initialState);

  return (
    <MapContext.Provider value={{ state, dispatch }}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider as MapProvider };

