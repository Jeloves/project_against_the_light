import React, { ReactNode, useState } from "react";
import Image from "next/image";
import styles from "./TimeControl.module.scss"
type TimeControlProp = {
    pauseplayTime: (isPaused: boolean) => void;
    fastForwardTime: (newSpeed: number) => void;
};

const TimeControl = ({ pauseplayTime, fastForwardTime }: TimeControlProp) => {
    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [timeSpeed, setTimeSpeed] = useState<number>(0);

    const pauseplayOnClick = () => {
        pauseplayTime(!isPaused);
        setIsPaused(!isPaused);

        if (isPaused) {
            setTimeSpeed(0);
        }
    }

    const fastforwardOnClick = () => {

        if (isPaused) {
            pauseplayTime(false);
            setIsPaused(false);
            setTimeSpeed(1);
            fastForwardTime(1);
        } else {
            const newSpeed = timeSpeed + 1;
            if (newSpeed === 4) {
                setTimeSpeed(1);
                fastForwardTime(1);
            } else {
                setTimeSpeed(newSpeed);
                fastForwardTime(newSpeed);
            }
        }
    }

    return (
        <div className={styles.container}>
            <button className={styles.playButton} onClick={pauseplayOnClick}>
                <Image src={isPaused ? "/icons/play.svg" : "/icons/pause.svg"} alt={"Pause/Play Button"} width={24} height={24} />
            </button>
            <div className={styles.datetime}>
                <p>January 1, 2025</p>
                <p>8:30 AM</p>
            </div>
            <button className={styles.fastForwardButton} onClick={fastforwardOnClick}>
                <Image src="/icons/fast_forward.svg" alt={"Fast Forward Button"} width={24} height={24} />
            </button>
        </div>
    )

}

export default TimeControl;
