export class Mission {
    name: string;
    type: string;
    destination: string;
    currentDuration: number;
    totalDuration: number;
    isComplete: boolean;
    isSuccessful: boolean;
    partyIDs: string[];
    emblemURL: string;

    constructor(name: string, type: string, destination: string, totalDuration: number, partyIDs: string[], emblemURL: string) {
        this.name = name;
        this.type = type;
        this.destination = destination;
        this.currentDuration = totalDuration;
        this.totalDuration = totalDuration;
        this.isComplete = false; 
        this.isSuccessful = false;
        this.partyIDs = partyIDs;
        this.emblemURL = emblemURL;
    }

    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }

    getType(): string {
        return this.type;
    }
    setType(type: string): void {
        this.type = type;
    }

    getDestination(): string {
        return this.destination;
    }
    setDestination(destination: string) {
        this.destination = destination;
    }

    getCurrentDuration(): number {
        return this.currentDuration;
    }
    setCurrentDuration(duration: number): void {
        this.currentDuration = duration;
    }

    getTotalDuration(): number {
        return this.totalDuration;
    }
    setTotalDuration(duration: number): void {
        this.totalDuration = duration;
    }

    getIsComplete(): boolean {
        return this.isComplete;
    }
    setIsComplete(isComplete: boolean): void {
        this.isComplete = isComplete;
    }

    getIsSuccessful(): boolean {
        return this.isSuccessful;
    }
    setIsSuccessful(isSuccessful: boolean): void {
        this.isSuccessful = isSuccessful;
    }

    getEmblemURL(): string {
        return this.emblemURL;
    }
    setIcon(icon: string): void {
        this.emblemURL = icon;
    }
}