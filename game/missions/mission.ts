import { Timestamp } from "../time/timestamp";
import { MissionObjective } from "./objectives";

export type USStateAbbreviation =
    | "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA"
    | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD"
    | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ"
    | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC"
    | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";

export class Mission {

    private id: string;
    private name: string;
    private state: USStateAbbreviation;
    private location: string;
    private objectives: MissionObjective[];
    private optionals: MissionObjective[];
    private description: string;
    private soldierLimit: number;
    private soldierIDs: string[] = [];
    private expirationDate: Timestamp | null;
    private arrivalDate: Timestamp;
    private timeTraveled: number = 0;

    constructor(
        id: string,
        name: string,
        state: USStateAbbreviation,
        location: string,
        objectives: MissionObjective[],
        optionals: MissionObjective[],
        description: string,
        soldierLimit: number,
        expirationDate: Timestamp | null,
        arrivalDate: Timestamp
    ) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.location = location;
        this.objectives = objectives;
        this.optionals = optionals;
        this.description = description;
        this.soldierLimit = soldierLimit;
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

    public getState(): USStateAbbreviation {
        return this.state;
    }
    public setState(state: USStateAbbreviation): void {
        this.state = state;
    }

    public getLocation(): string {
        return this.location;
    }
    public setLocation(location: string): void {
        this.location = location;
    }

    public getObjectives(): MissionObjective[] {
        return this.objectives;
    }
    public setObjectives(objectives: MissionObjective[]): void {
        this.objectives = objectives;
    }
    public getOptionals(): MissionObjective[] {
        return this.optionals;
    }
    public setOptionals(optionals: MissionObjective[]): void {
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
