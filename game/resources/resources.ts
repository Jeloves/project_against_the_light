export enum PrimaryResource {
    rations = "rations",
    supplies = "supplies",
    intel = "intel",
    soldiers = "soldiers",
    civilians = "civilians",
    facilities = "facilities"
}

export class ResourceInventory {
    private rations: number;
    private supplies: number;
    private intel: number;
    private soldiers: string[];
    private civilians: string[];
    private facilities: string[];

    constructor(
        rations: number = 0,
        supplies: number = 0,
        intel: number = 0,
        soldiers: string[] = [],
        civilians: string[] = [],
        facilities: string[] = []
    ) {
        this.rations = rations;
        this.supplies = supplies;
        this.intel = intel;
        this.soldiers = soldiers;
        this.civilians = civilians;
        this.facilities = facilities;
    }

    public getRations(): number {
        return this.rations;
    }
    public setRations(rations: number): void {
        this.rations = rations;
    }

    public getSupplies(): number {
        return this.supplies;
    }
    public setSupplies(supplies: number): void {
        this.supplies = supplies;
    }

    public getIntel(): number {
        return this.intel;
    }
    public setIntel(intel: number): void {
        this.intel = intel;
    }

    public getSoldiers(): string[] {
        return this.soldiers;
    }
    public setSoldiers(soldiers: string[]): void {
        this.soldiers = soldiers;
    }

    public getCivilians(): string[] {
        return this.civilians;
    }
    public setCivilians(civilians: string[]): void {
        this.civilians = civilians;
    }

    public getFacilities(): string[] {
        return this.facilities;
    }
    public setFacilities(facilities: string[]): void {
        this.facilities = facilities;
    }

    public addSoldier(soldierId: string): void {
        this.soldiers.push(soldierId);
    }
    public removeSoldier(soldierId: string): void {
        this.soldiers = this.soldiers.filter(s => s !== soldierId);
    }

    public addCivilian(civilianId: string): void {
        this.civilians.push(civilianId);
    }
    public removeCivilian(civilianId: string): void {
        this.civilians = this.civilians.filter(c => c !== civilianId);
    }

    public addFacility(facilityId: string): void {
        this.facilities.push(facilityId);
    }
    public removeFacility(facilityId: string): void {
        this.facilities = this.facilities.filter(f => f !== facilityId);
    }
}
