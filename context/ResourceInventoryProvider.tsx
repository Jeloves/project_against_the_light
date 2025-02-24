import { ReactNode, useReducer } from "react";
import { ResourceInventoryState, resourceInventoryReducer, ResourceInventoryContext } from "./ResourceInventoryContext";

type ResourceInventoryProviderProps = {
    children: ReactNode;
};

export const ResourceInventoryProvider: React.FC<ResourceInventoryProviderProps> = ({ children }) => {
  const initialState: ResourceInventoryState = {
    rations: 50,
    supplies: 100,
    intel: 10,
    soldierIDs: ["Rookie Abigail", "Squaddie Kyle", "Sergeant Phineas", "Commander Zhao", "Rookie Jhin", "Rookie Maddie", "Sergeant J"],
    civilianIDs: ["John Decker", "Jinxy Pop", "Robert Egg"],
    facilityIDs: ["facilityID_0001", "facilityID_0002", "facilityID_0003", "facilityID_0004", "facilityID_0005"]
  };

  const [resourceInventoryState, dispatchResourceInventory] = useReducer(resourceInventoryReducer, initialState);

  return (
    <ResourceInventoryContext.Provider value={{ resourceInventoryState, dispatchResourceInventory }}>
      {children}
    </ResourceInventoryContext.Provider>
  );
};

