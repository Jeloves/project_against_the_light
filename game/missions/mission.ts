import { MissionType } from "@/game/missions/mission-type";
import { USStateAbbreviation } from "../map/USStateAbbreviation";
import { Timestamp } from "../time/timestamp";
import { MissionStatus } from "./MissionStatus";

export class Mission {
    private id: string;
    private type: MissionType;
    private name: string;
    private discoveryState: USStateAbbreviation;
    private operationState: USStateAbbreviation;
    private location: string;
    private objectives: string[];
    private optionals: string[];
    private description: string;
    private soldierLimit: number;
    private enemyLimit: number;
    private soldierIDs: string[] = [];
    private discoveryDate: Timestamp; 
    private expirationDate: Timestamp | null;           // Urgency
    private expirationTimeRemaining: number | null = null;
    private arrivalDate: Timestamp;                     // Distance
    private travelTimeRemaining: number | null = null;         // seconds
    private status: MissionStatus = MissionStatus.available;                

    constructor(
        id: string,
        type: MissionType,
        name: string,
        discoveryState: USStateAbbreviation,
        operationState: USStateAbbreviation,
        location: string,
        objectives: string[],
        optionals: string[],
        description: string,
        soldierLimit: number,
        enemyLimit: number,
        discoveryDate: Timestamp | null,
        expirationDate: Timestamp | null,
        arrivalDate: Timestamp
    ) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.discoveryState = discoveryState;
        this.operationState = operationState;
        this.location = location;
        this.objectives = objectives;
        this.optionals = optionals;
        this.description = description;
        this.soldierLimit = soldierLimit;
        this.enemyLimit = enemyLimit;
        this.discoveryDate = discoveryDate;
        this.expirationDate = expirationDate;
        this.arrivalDate = arrivalDate;

        if (expirationDate) {
            this.expirationTimeRemaining = expirationDate.secondsFromEpoch - arrivalDate.secondsFromEpoch;
        }
    }

    public getId(): string {
        return this.id;
    }
    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }
    public setName(name: string): void {
        this.name = name;
    }

    public getType(): MissionType {
        return this.type;
    }
    public setType(type: MissionType): void {
        this.type = type;
    }

    public getDiscoveryState(): USStateAbbreviation {
        return this.discoveryState;
    }
    public setDiscoveryState(state: USStateAbbreviation): void {
        this.discoveryState = state;
    }

    public getOperationState(): USStateAbbreviation {
        return this.operationState;
    }
    public setOperationState(state: USStateAbbreviation): void {
        this.operationState = state;
    }

    public getLocation(): string {
        return this.location;
    }
    public setLocation(location: string): void {
        this.location = location;
    }

    public getObjectives(): string[] {
        return this.objectives;
    }
    public setObjectives(objectives: string[]): void {
        this.objectives = objectives;
    }
    public getOptionals(): string[] {
        return this.optionals;
    }
    public setOptionals(optionals: string[]): void {
        this.optionals = optionals;
    }

    public getDescription(): string {
        return this.description;
    }
    public setDescription(description: string): void {
        this.description = description;
    }

    public getSoldierLimit(): number {
        return this.soldierLimit;
    }
    public setSoldierLimit(soldierLimit: number): void {
        this.soldierLimit = soldierLimit;
    }

    public getEnemyLimit(): number {
        return this.enemyLimit;
    }
    public setEnemyLimit(enemyLimit: number): void {
        this.enemyLimit = enemyLimit;
    }

    public getSoldierIDs(): string[] {
        return this.soldierIDs;
    }
    public setSoldierIDs(soldierIDs: string[]): void {
        this.soldierIDs = soldierIDs;
    }

    public getDiscoveryDate(): Timestamp | null {
        return this.discoveryDate;
    }
    public setDiscoveryDate(discoveryDate: Timestamp | null): void {
        this.discoveryDate = discoveryDate;
    }

    public getExpirationDate(): Timestamp | null {
        return this.expirationDate;
    }
    public setExpirationDate(expirationDate: Timestamp | null): void {
        this.expirationDate = expirationDate;
    }

    public getExpirationTimeRemaining() : number | null {
        return this.expirationTimeRemaining;
    }
    public setExpirationTimeRemaining(secondsRemaining: number | null) {
        this.expirationTimeRemaining = secondsRemaining;
    }

    public getArrivalDate(): Timestamp {
        return this.arrivalDate;
    }
    public setArrivalDate(arrivalDate: Timestamp): void {
        this.arrivalDate = arrivalDate;
    }

    public getTravelTimeRemaining(): number | null {
        return this.travelTimeRemaining;
    }
    public setTravelTimeRemaining(secondsRemaining: number | null): void {
        this.travelTimeRemaining = secondsRemaining;
    }

    public getStatus(): MissionStatus {
        return this.status;
    }
    public setStatus(status: MissionStatus): void {
        this.status = status;
    }
}

export function getActiveMissions(missions: Mission[], includeHidden: boolean = true): Mission[] {
    let activeMissions = [];
    for (let mission of missions) {
        if (
            mission.getStatus() === MissionStatus.available ||
            mission.getStatus() === MissionStatus.deployed ||
            mission.getStatus() === MissionStatus.engaged ||
            mission.getStatus() === MissionStatus.order
        ) {

            if (mission.getStatus() === MissionStatus.hidden) {
                includeHidden ? activeMissions.push(mission) : null;
            } else {
                activeMissions.push(mission);
            }
        } 
    }
    return activeMissions;
}

export function orderMissionsByType(missions: Mission[]): Map<MissionType, Mission[]> {
    const missionsTypeMap = new Map<MissionType, Mission[]>();
    for (let mission of missions) {
        if (missionsTypeMap.has(mission.getType())) {
            const updatedMissions = [...missionsTypeMap.get(mission.getType())];
            updatedMissions.push(mission);
            missionsTypeMap.set(mission.getType(), updatedMissions);
        } else {
            missionsTypeMap.set(mission.getType(), [mission]);
        }
    }

    return missionsTypeMap;
}