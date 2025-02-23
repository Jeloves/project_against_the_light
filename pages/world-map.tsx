import styles from "@/styles/world-map.module.scss";
import ResourceMeter from "@/components/world-map/ResourceMeter";
import { title_resource_0, title_resource_1, title_resource_2, title_resource_3, title_resource_4, title_resource_5 } from "@/constants";
import TimeControl from "@/components/world-map/TimeControl";
import OperationsWindow from "@/components/world-map/OperationsWindow";
import { sampleMissions } from "@/utils/sample-data";

const WorldMap = () => {
    return (
        <main className={styles.container}>
            <div className={styles.topbar}>
                <div className={styles.resources}>
                    <ResourceMeter resourceType={title_resource_0} />
                    <ResourceMeter resourceType={title_resource_1} />
                    <ResourceMeter resourceType={title_resource_2} />
                    <ResourceMeter resourceType={title_resource_3} />
                    <ResourceMeter resourceType={title_resource_4} />
                    <ResourceMeter resourceType={title_resource_5} />
                </div>
                <TimeControl pauseplayTime={pauseplayTime} fastForwardTime={fastforwardTime} />
            </div>
            <div className={styles.midbar}>
                <div className={styles.menu}>M</div>
                <div className={styles.map}>M A P</div>
                <div className={styles.missions}><OperationsWindow missions={sampleMissions} /></div>
            </div>
            <div className={styles.botbar}>
                <div className={styles.log}>Action Log</div>
                <div className={styles.bot}>Nope</div>
            </div>
        </main>
    );
};

const pauseplayTime = (isPaused: boolean) => {
    if (isPaused) {
        console.log("Game is paused.")
    } else {
        console.log("Game has resumed.")
    }
}

const fastforwardTime = (newSpeed: number) => {
    console.log("Increased to " + newSpeed + "x time speed.")
}

export default WorldMap;