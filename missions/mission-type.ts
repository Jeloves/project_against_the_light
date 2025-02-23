enum MissionType {
    assault = "assault",
    counter_reconnaissance = "counter-reconnaissance",
    defense = "defense",
    exfiltration = "exfiltration",
    elimination = "elimination",
    extraction = "extraction",
    raid = "raid",
    reconnaissance = "reconnaissance",
    rescue = "rescue",
    scavenge = "scavenge"
}

export const totalMissionTypes = Object.keys(MissionType).filter(key => isNaN(Number(key))).length;

export function getMissionTypeByIndex(index: number) {
    let count = 0;
    for (const key of Object.keys(MissionType)) {
        if (count === index) {
            return MissionType[key as keyof typeof MissionType];
        }
        count++;
    }
}