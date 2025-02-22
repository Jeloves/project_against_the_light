import React, { ReactNode, useState } from "react";
import styles from "./OperationsWindow.module.scss"
import { label_missions, title_mission_type_0 } from "@/constants";
import { Mission } from "@/missions/mission";

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

    missionsMap.forEach((value: Mission[], key: string) => {
        const subcontainer = (<div className={styles.subcontainer}></div>)
        const missionTypeHeader = (
            <h2 className={styles.missionType}>{key}</h2>
        )
        for (let mission of value) {

        }
    })

    return (
        <div className={styles.container}>
            <h1>{label_missions}</h1>
            <h2>{title_mission_type_0}</h2>
        </div>
    )

}


export default OperationsWindow;
