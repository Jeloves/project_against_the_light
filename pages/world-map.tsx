import styles from "@/styles/NewPage.module.css";

const WorldMap = () => {
    return (
        <main>
            <div className={styles.topbar}>
                <div className={styles.resources}>Resources</div>
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