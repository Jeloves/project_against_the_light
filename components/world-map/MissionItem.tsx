import React, { ReactNode, useState } from "react";
import styles from "./OperationsWindow.module.scss"
import { label_missions, title_mission_type_0 } from "@/constants";
import { Mission } from "@/missions/mission";

type MissionItemProp = {
    missions: Mission[];
};


const MissionItem = ({ missions }: MissionItemProp) => {


    return (
        <div className={styles.container}>
            <h1>{label_missions}</h1>
            <h2>{title_mission_type_0}</h2>
        </div>
    )

}


export default MissionItem;