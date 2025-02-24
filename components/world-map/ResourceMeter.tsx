import React, { ReactNode, useState } from "react";
import Image from "next/image";
import styles from "./ResourceMeter.module.scss"
import { title_resource_0, title_resource_1, title_resource_2, title_resource_3, title_resource_4, title_resource_5, url_resource_0, url_resource_1, url_resource_2, url_resource_3, url_resource_4, url_resource_5 } from "@/constants";
type ResourceMeterProp = {
    resourceType: string;
};

const ResourceMeter = (props: ResourceMeterProp) => {
    let iconURL: string;
    switch (props.resourceType) {
        case title_resource_0:
            iconURL = url_resource_0;
            break;
        case title_resource_1:
            iconURL = url_resource_1;
            break;
        case title_resource_2:
            iconURL = url_resource_2;
            break;
        case title_resource_3:
            iconURL = url_resource_3;
            break;
        case title_resource_4:
            iconURL = url_resource_4;
            break;
        case title_resource_5:
            iconURL = url_resource_5;
            break;
        default:
            iconURL = "";
            break;
    }

    return (
        <div className={styles.container}>
            
            <div className={styles.icon}>
                <Image src={iconURL} alt="Resource Icon" width={24} height={24} />
            </div>

            <p className={styles.values}>0</p>
        </div>
    )

}

export default ResourceMeter;
