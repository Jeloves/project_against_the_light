import { MissionType } from "@/missions/mission-type";

const missionObjectives = new Map<number, string>();

missionObjectives.set(0, "Eliminate enemy forces in the AO.");
missionObjectives.set(1, "Prevent enemy from securing allied intel.");
missionObjectives.set(2, "Defend the AO against an enemy assault.");
missionObjectives.set(3, "Rendezvous with the VIP(s) and proceed to evac.");
missionObjectives.set(4, "Eliminate the HVT(s).");
missionObjectives.set(5, "Capture the HVT(s) and proceed to evac.");
missionObjectives.set(6, "Loot and sabotage the AO before enemy reinforcements arrive.");
missionObjectives.set(7, "Survey the AO.");
missionObjectives.set(8, "Free the VIP(s) from captivity and proceed to evac.");
missionObjectives.set(9, "Loot the AO.");

missionObjectives.set(-1, "Minimize damage to structures and supplies.");
missionObjectives.set(-2, "Minimize damage to allied structures and supplies.");
missionObjectives.set(-3, "Evacuate all VIP(s).");
missionObjectives.set(-4, "Eliminate all HVT(s).");
missionObjectives.set(-5, "Evacuate all HVT(s).");
missionObjectives.set(-6, "Minimize damage to supplies.");
missionObjectives.set(-7, "Do not break concealment.");
missionObjectives.set(-8, "Fully loot the AO.");

export function getRandomObjectiveByType(type: MissionType): string {
    switch (type) {
        case MissionType.assault:
            return missionObjectives.get(0);
        case MissionType.counter_reconnaissance:
            return missionObjectives.get(1);
        case MissionType.defense:
            return missionObjectives.get(2);
        case MissionType.elimination:
            return missionObjectives.get(4);
        case MissionType.exfiltration:
            return missionObjectives.get(3);
        case MissionType.extraction:
            return missionObjectives.get(5);
        case MissionType.raid:
            return missionObjectives.get(6);
        case MissionType.reconnaissance:
            return missionObjectives.get(7);
        case MissionType.rescue:
            return missionObjectives.get(8);
        case MissionType.scavenge:
            return missionObjectives.get(9);
        default:
            throw new Error("Unhandled case when retrieving random mission objective.");
    }
}

export function getRandomOptionalByType(type: MissionType): string {
    switch (type) {
        case MissionType.assault:
            return missionObjectives.get(-1);
        case MissionType.counter_reconnaissance:
            return missionObjectives.get(-2);
        case MissionType.defense:
            return missionObjectives.get(-2);
        case MissionType.elimination:
            return missionObjectives.get(-4);
        case MissionType.exfiltration:
            return missionObjectives.get(-3);
        case MissionType.extraction:
            return missionObjectives.get(-5);
        case MissionType.raid:
            return missionObjectives.get(-6);
        case MissionType.reconnaissance:
            return missionObjectives.get(-7);
        case MissionType.rescue:
            return missionObjectives.get(-3);
        case MissionType.scavenge:
            return missionObjectives.get(-8);
        default:
            throw new Error("Unhandled case when retrieving random mission optional.");
    }
}