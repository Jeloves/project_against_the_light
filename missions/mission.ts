export class Mission {
    name: string;
    type: string;
    currentDuration: number;
    totalDuration: number;
    isComplete: boolean;
    isSuccessful: boolean;
    partyIDs: string[];
    icon: string;

    constructor(name: string, type: string, totalDuration: number, partyIDs: string[], icon: string) {
        this.name = name;
        this.type = type;
        this.currentDuration = 0;
        this.totalDuration = totalDuration;
        this.isComplete = false; 
        this.isSuccessful = false;
        this.partyIDs = partyIDs;
        this.icon = icon;
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

    getIcon(): string {
        return this.icon;
    }
    setIcon(icon: string): void {
        this.icon = icon;
    }
}