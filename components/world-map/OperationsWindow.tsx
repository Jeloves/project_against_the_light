import React, { ReactNode, useState } from "react";
import styles from "./OperationsWindow.module.scss"
import { label_missions, title_mission_type_0 } from "@/constants";
import { Mission } from "@/missions/mission";
import MissionItem from "./MissionItem";

type OperationsWindowProp = {
    missions: Mission[];
};

const orderMissionsByType = (missions: Mission[]): Map<string, Mission[]> => {
    const missionTypeMap = new Map<string, Mission[]>();
    for (let mission of missions) {
        const missionType = mission.getType();
        if (missionTypeMap.has(missionType)) {
            const updatedMissions = [...missionTypeMap.get(missionType)];
            updatedMissions.push(mission);
            missionTypeMap.set(missionType, updatedMissions);
        } else {
            missionTypeMap.set(missionType, [mission]);
        }
    }
    return missionTypeMap;
}

const OperationsWindow = ({ missions }: OperationsWindowProp) => {

    const [missionsMap, setMissionsMap] = useState<Map<string, Mission[]>>(orderMissionsByType(missions));

    const subcontainers = [];
    missionsMap.forEach((value: Mission[], key: string) => {
        const missionsList = [];
        for (let mission of value) {
            missionsList.push(<MissionItem mission={mission}/>)
        }
        subcontainers.push(
            <div className={styles.subcontainer}>
                <h2 className={styles.missionType}>{key}</h2>
                <div className={styles.missionsList}>
                    {missionsList}
                </div>
            </div>
        )
    })

    return (
        <div className={styles.container}>
            <h1>{label_missions}</h1>
            <div>
                {subcontainers}
            </div>
        </div>
    )

}


export default OperationsWindow;
