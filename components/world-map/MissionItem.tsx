import React, { ReactNode, useState } from "react";
import Image from "next/image";
import styles from "./MissionItem.module.scss"
import { Mission } from "@/missions/mission";
import { formatSecondsIntoHours } from "@/utils/format";

type MissionItemProp = {
    mission: Mission;
};


const MissionItem = ({ mission }: MissionItemProp) => {


    return (
        <div className={styles.container}>
            <div className={styles.emblem}>
                <Image src={mission.getEmblemURL()} alt="Emblem Icon" width={40} height={40} />
            </div>

            <div className={styles.subcontainer}>
                <h1>{mission.getName()}</h1>
                <h2>{mission.getDestination()}</h2>
            </div>
            <p className={styles.duration}>{formatSecondsIntoHours(mission.getCurrentDuration())} hrs</p>
        </div>
    )

}


export default MissionItem;