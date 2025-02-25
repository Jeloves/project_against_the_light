import { MissionType } from "@/game/missions/mission-type";
import { USStateAbbreviation } from "../map/USStateAbbreviation";
import { Timestamp } from "../time/timestamp";
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
    private expirationDate: Timestamp | null;           // Urgency
    private arrivalDate: Timestamp;                     // Distance
    private timeTraveled: number = 0;

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
        this.expirationDate = expirationDate;
        this.arrivalDate = arrivalDate;
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

    public getExpirationDate(): Timestamp | null {
        return this.expirationDate;
    }
    public setExpirationDate(expirationDate: Timestamp | null): void {
        this.expirationDate = expirationDate;
    }

    public getArrivalDate(): Timestamp {
        return this.arrivalDate;
    }
    public setArrivalDate(arrivalDate: Timestamp): void {
        this.arrivalDate = arrivalDate;
    }

    public getTimeTraveled(): number {
        return this.timeTraveled;
    }
    public setTimeTraveled(timeTraveled: number): void {
        this.timeTraveled = timeTraveled;
    }
}
