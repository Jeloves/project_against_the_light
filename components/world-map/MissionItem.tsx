import React, { ReactNode, useState } from "react";
import Image from "next/image";
import styles from "./MissionItem.module.scss"
import { Mission } from "@/missions/mission";
import { formatSecondsIntoHours } from "@/utils/format";
import { useMapContext } from "@/context/MapContext";
import { expandStateAbbreviation } from "@/game/map/USStateAbbreviation";
import { MissionStatus } from "@/game/missions/MissionStatus";

type MissionItemProp = {
    missionIndex: number;
};


const MissionItem = ({ missionIndex }: MissionItemProp) => {

    const { mapState, dispatchMap } = useMapContext();


    const children = []

    children.push(
        <>
            <div className={styles.emblem}>
                <Image src="/icons/sample_emblem.svg" alt="Emblem Icon" width={40} height={40} />
            </div>
            <div className={styles.subcontainer}>
                <h1>{mapState.missions[missionIndex].getName() + "-" + mapState.missions[missionIndex].getStatus().toUpperCase()}</h1>
                <h2>{mapState.missions[missionIndex].getLocation() + ", " + expandStateAbbreviation(mapState.missions[missionIndex].getOperationState())}</h2>
            </div>
        </>
    )
    switch (mapState.missions[missionIndex].getStatus()) {
        case MissionStatus.available:   // Shows expiration countdown
            children.push(
                <p className={styles.duration}>{formatSecondsIntoHours(mapState.missions[missionIndex].getExpirationTimeRemaining())} hrs</p>
            )
            break;
        case MissionStatus.deployed:
            children.push(
                <p className={styles.duration}>{formatSecondsIntoHours(mapState.missions[missionIndex].getTravelTimeRemaining())} hrs</p>
            )
            break;
        case MissionStatus.engaged:
            children.push(
                <p className={styles.duration}>ONGOING</p>
            )
            break;
        case MissionStatus.failure:
            children.push(
                <p className={styles.duration}>FAILED</p>
            )
            break;
        case MissionStatus.order:
            children.push(
                <p className={styles.duration}>!</p>
            )
            break;
        case MissionStatus.success:
            children.push(
                <p className={styles.duration}>SUCCESS</p>
            )
            break;
        default:
    }

    if (missionIndex === 0) {
        return (
            <div className={styles.hidden}>
                {children}
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                {children}
            </div>
        )
    }

}

export default MissionItem;