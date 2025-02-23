import { CombatMap } from "@/combat-map/combat-map";
import { Loot } from "@/combat-map/loot";

export type USStateAbbreviation =
    | "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA"
    | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD"
    | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ"
    | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC"
    | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";



export class TemplateMission {
    private name: string;
    private location: string;
    private state: USStateAbbreviation;
    private objectives: string;
    private description: string;
    private totalTravelTime: number; // Seconds
    private travelTime: number | null;     // Seconds, null = mission completed/failed
    private expirationTime: number | null   // Seconds, null = indefinite duration
    private combatMap: CombatMap;
    private rewards: Loot[];
    private lootTables: Loot[];
    private squadLimit: number;
    private squad: string[];                // Array of character ids

    constructor(
        name: string,
        location: string,
        state: USStateAbbreviation,
        objectives: string,
        description: string,
        totalTravelTime: number,
        expirationTime: number | null,
        combatMap: CombatMap,
        rewards: Loot[],
        lootTables: Loot[],
        squadLimit: number,
        squad: string[]
    ) {
        this.name = name;
        this.location = location;
        this.state = state;
        this.objectives = objectives;
        this.description = description;
        this.totalTravelTime = totalTravelTime;
        this.travelTime = totalTravelTime;
        this.expirationTime = expirationTime;
        this.combatMap = combatMap;
        this.rewards = rewards;
        this.lootTables = lootTables;
        this.squadLimit = squadLimit;
        this.squad = squad;
    }

    getName(): string { return this.name; }
    setName(name: string): void { this.name = name; }

    getLocation(): string { return this.location; }
    setLocation(location: string): void { this.location = location; }

    getState(): USStateAbbreviation { return this.state; }
    setState(state: USStateAbbreviation): void { this.state = state; }

    getObjectives(): string { return this.objectives; }
    setObjectives(objectives: string): void { this.objectives = objectives; }

    getDescription(): string { return this.description; }
    setDescription(description: string): void { this.description = description; }

    getTotalTravelTime(): number | null { return this.totalTravelTime; }
    setTotalTravelTime(totalTravelTime: number | null): void { this.totalTravelTime = totalTravelTime; }

    getTravelTime(): number | null { return this.travelTime; }
    setTravelTime(travelTime: number | null): void { this.travelTime = travelTime; }

    getExpirationTime(): number | null { return this.expirationTime; }
    setExpirationTime(expirationTime: number | null): void { this.expirationTime = expirationTime; }

    getCombatMap(): CombatMap { return this.combatMap; }
    setCombatMap(combatMap: CombatMap): void { this.combatMap = combatMap; }

    getRewards(): Loot[] { return this.rewards; }
    setRewards(rewards: Loot[]): void { this.rewards = rewards; }

    getLootTables(): Loot[] { return this.lootTables; }
    setLootTables(lootTables: Loot[]): void { this.lootTables = lootTables; }

    getSquadLimit(): number { return this.squadLimit; }
    setSquadLimit(squadLimit: number): void { this.squadLimit = squadLimit; }

    getSquad(): string[] { return this.squad; }
    setSquad(squad: string[]): void { this.squad = squad; }
}