import styles from "@/styles/world-map.module.scss";
import Image from "next/image";
import TimeControl from "@/components/world-map/TimeControl";
import { useResourceInventoryContext } from "@/context/ResourceInventoryContext";
import ResourcePanel from "@/components/world-map/ResourcePanel";
import { PrimaryResource } from "@/game/resources/resources";
import MissionPanel from "@/components/world-map/MissionPanel";
import { useMapContext } from "@/context/MapContext";

const WorldMap = () => {
    const { resourceInventoryState, dispatchResourceInventory } = useResourceInventoryContext();
    const { mapState, dispatchMap } = useMapContext();

    const onClickMe = () => {
        dispatchMap({ type: 'CREATE_DEFAULT_MISSION'});
    }

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
    return (
        <main className={styles.container}>
            <div className={styles.topbar}>
                <ResourcePanel />
                <TimeControl pauseplayTime={pauseplayTime} fastForwardTime={fastforwardTime} />
            </div>

            <div className={styles.sidemenu}>
                <Image src='/icons/apple.svg' alt="Resource Icon" width={24} height={24} />
                <Image src='/icons/beaker.svg' alt="Resource Icon" width={24} height={24} />
                <Image src='/icons/people.svg' alt="Resource Icon" width={24} height={24} />
                <Image src='/icons/tools.svg' alt="Resource Icon" width={24} height={24} />
                <Image src='/icons/sample_emblem.svg' alt="Resource Icon" width={24} height={24} />
                <Image src='/icons/apple.svg' alt="Resource Icon" width={24} height={24} />
                <Image src='/icons/beaker.svg' alt="Resource Icon" width={24} height={24} />
                <Image src='/icons/people.svg' alt="Resource Icon" width={24} height={24} />
                <Image src='/icons/tools.svg' alt="Resource Icon" width={24} height={24} />
                <Image src='/icons/sample_emblem.svg' alt="Resource Icon" width={24} height={24} />
            </div>
            
            <MissionPanel/>

            <button className={styles.sample} onClick={onClickMe}>click me</button>

        </main>
    );

    /*
    return (
        <main className={styles.container}>
            <div className={styles.topbar}>
                <ResourcePanel />
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
    */
}



export default WorldMap;