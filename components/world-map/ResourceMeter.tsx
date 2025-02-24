import React, {  } from "react";
import Image from "next/image";
import styles from "./ResourceMeter.module.scss"
import { url_civilians, url_facilities, url_intel, url_rations, url_soldiers, url_supplies } from "@/constants";
import { PrimaryResource } from "@/game/resources/resources";
import { useResourceInventoryContext } from "@/context/ResourceInventoryContext";

type ResourceMeterProp = {
    resource: PrimaryResource;
};

const ResourceMeter = ({ resource }: ResourceMeterProp) => {
    const { resourceInventoryState, dispatchResourceInventory } = useResourceInventoryContext();
    
    let iconURL: string;
    let displayValue: any;
    switch (resource) {
        case PrimaryResource.rations:
            iconURL = url_rations;
            displayValue = resourceInventoryState.rations;
            break;
        case PrimaryResource.supplies:
            iconURL = url_supplies;
            displayValue = resourceInventoryState.supplies;
            break;
        case PrimaryResource.intel:
            iconURL = url_intel;
            displayValue = resourceInventoryState.intel;
            break;
        case PrimaryResource.soldiers:
            iconURL = url_soldiers;
            displayValue = resourceInventoryState.soldierIDs.length;
            break;
        case PrimaryResource.civilians:
            iconURL = url_civilians;
            displayValue = resourceInventoryState.civilianIDs.length;
            break;
        case PrimaryResource.facilities:
            iconURL = url_facilities;
            displayValue = resourceInventoryState.facilityIDs.length;
            break;
        default:
            iconURL = "";
            displayValue = "ERROR"
            break;
    }
    

    return (
        <div className={styles.container}>

            <div className={styles.icon}>
                <Image src={iconURL} alt="Resource Icon" width={24} height={24} />
            </div>

            <p className={styles.values}>{displayValue}</p>
        </div>
    )

}

export default ResourceMeter;
