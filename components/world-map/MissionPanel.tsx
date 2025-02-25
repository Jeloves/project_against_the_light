import React, { ReactNode, useState } from "react";
import styles from "./MissionPanel.module.scss"
import { label_missions, title_mission_type_0 } from "@/constants";
import { Mission } from "@/game/missions/mission";
import MissionItem from "./MissionItem";
import { useMapContext } from "@/context/MapContext";
import { MissionStatus } from "@/game/missions/MissionStatus";

type MissionPanelProp = {
  
};


const MissionPanel = ({  }: MissionPanelProp) => {

    const { mapState, dispatchMap } = useMapContext();

    const activeMissionIndices = [];
    for (let i = 0; i < mapState.missions.length; i++) {
        const mission = mapState.missions[i];
        if (
            mission.getStatus() !== MissionStatus.success && 
            mission.getStatus() !== MissionStatus.failure &&
            mission.getStatus() !== MissionStatus.hidden 
        ) {
            activeMissionIndices.push(i);
        }
    }
    
    const missionItems = [];
    for (let i of activeMissionIndices) {
        missionItems.push(<MissionItem missionIndex={i}/>)
    }

    
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{label_missions.toUpperCase()}</h1>
            <div className={styles.subcontainer}>
                {missionItems}
            </div>
        </div>
    )

}


export default MissionPanel;
