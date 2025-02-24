import React, { ReactNode, useState } from "react";
import Image from "next/image";
import styles from "./ResourcePanel.module.scss"
import { title_resource_0, title_resource_1, title_resource_2, title_resource_3, title_resource_4, title_resource_5 } from "@/constants";
import ResourceMeter from "./ResourceMeter";
import { PrimaryResource } from "@/game/resources/resources";

type ResourcePanelProp = {
};

const ResourcePanel = (props: ResourcePanelProp) => {

    return (
        <div className={styles.container}>
            <ResourceMeter resource={PrimaryResource.rations} />
            <ResourceMeter resource={PrimaryResource.supplies} />
            <ResourceMeter resource={PrimaryResource.intel} />
            <ResourceMeter resource={PrimaryResource.soldiers} />
            <ResourceMeter resource={PrimaryResource.civilians} />
            <ResourceMeter resource={PrimaryResource.facilities} />
        </div>
    )

}

export default ResourcePanel;
