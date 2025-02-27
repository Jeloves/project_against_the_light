import React, { ReactNode, useState } from "react";
import Image from "next/image";
import styles from "./TimeControl.module.scss"
import { useMapContext } from "@/context/MapContext";
import { formatSecondsFromEpoch, formatTimestamp } from "@/utils/format";
import { getTimestampBySecondsFromEpoch, Timestamp } from "@/game/time/timestamp";
import { GameClock } from "@/game/time/GameClock";
import { TickRate } from "@/game/time/GameSpeed";
type TimeControlProp = {
    clock: GameClock;
    pauseplayTime: (isPaused: boolean) => void;
    fastForwardTime: (newSpeed: number) => void;
};


const TimeControl = ({ clock, pauseplayTime, fastForwardTime }: TimeControlProp) => {
    const { mapState, dispatchMap } = useMapContext();


    const [isPaused, setIsPaused] = useState<boolean>(true);
    const [tickRate, setTickRate] = useState<TickRate>(TickRate.real);

    const [date, setDate] = useState<{ date: string, time: string, standardTime: string }>(formatSecondsFromEpoch(clock.getElapsedSeconds()))

    if (!mapState.clock.hasDispatchAction()) {
        console.log("ding")
        dispatchMap({type: "SET_CLOCK_DISPATCH", payload: 
            () => {
                dispatchMap({type: "INCREMENT_SECONDS_FROM_EPOCH"});
            }
        })
    }


    const pauseplayOnClick = () => {
        pauseplayTime(isPaused);
        setIsPaused(!isPaused);
    }

    const fastforwardOnClick = () => {
        if (isPaused) {
            pauseplayTime(false);
            setIsPaused(false);
            setTickRate(1);
            fastForwardTime(1);
        } else {
            const newSpeed = tickRate + 1;
            if (newSpeed === 4) {
                setTickRate(1);
                fastForwardTime(1);
            } else {
                setTickRate(newSpeed);
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
                <p>{formatSecondsFromEpoch(clock.getElapsedSeconds()).date}</p>
                <p>{formatSecondsFromEpoch(clock.getElapsedSeconds()).time}</p>
            </div>
            <button className={styles.fastForwardButton} onClick={fastforwardOnClick}>
                <Image src="/icons/fast_forward.svg" alt={"Fast Forward Button"} width={24} height={24} />
            </button>
        </div>
    )

}

export default TimeControl;
