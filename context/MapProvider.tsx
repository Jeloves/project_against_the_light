import { ReactNode, useReducer } from "react";
import { MapContext, mapReducer, MapState } from "./MapContext";
import { createAllDefaultStateProfiles } from "@/game/map/StateProfile";
import { GameClock } from "@/game/time/GameClock";

type MapProviderProps = {
  children: ReactNode;
};

const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const initialState: MapState = {
    stateProfiles: createAllDefaultStateProfiles(),
    missions: [],
    clock: new GameClock()
  };

  const [mapState, dispatchMap] = useReducer(mapReducer, initialState);

  return (
    <MapContext.Provider value={{ mapState, dispatchMap }}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider as MapProvider };

