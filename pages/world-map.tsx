import styles from "@/styles/world-map.module.scss";
import ResourceMeter from "@/components/world-map/ResourceMeter";
import { title_resource_0, title_resource_1, title_resource_2, title_resource_3, title_resource_4, title_resource_5 } from "@/constants";

const WorldMap = () => {
    return (
        <main>
            <div className={styles.topbar}>
                <div className={styles.resources}>
                    <ResourceMeter resourceType={title_resource_0}/>
                    <ResourceMeter resourceType={title_resource_1}/>
                    <ResourceMeter resourceType={title_resource_2}/>
                    <ResourceMeter resourceType={title_resource_3}/>
                    <ResourceMeter resourceType={title_resource_4}/>
                    <ResourceMeter resourceType={title_resource_5}/>
                </div>
                <div className={styles.time}>Date/Time</div>
            </div>
            <div className={styles.midbar}>
                <div className={styles.leftmenu}>MENU</div>
                <div className={styles.rightmenu}>Menu</div>
            </div>
            <div className={styles.botbar}>
                <div className={styles.log}>Action Log</div>
                <div className={styles.missions}>Missions</div>
            </div>
        </main>
    );
};

export default WorldMap;