import { Faction } from "../enemy/Faction";
import { ForceLevel, ForceLevelReport } from "../enemy/ForceLevel";
import { getListOfUSStates, USStateAbbreviation } from "./USStateAbbreviation";

export class StateProfile {
    private name: USStateAbbreviation;
    private forces: ForceLevelReport;

    constructor(name: USStateAbbreviation, forces: ForceLevelReport) {
        this.name = name;
        this.forces = forces;
    }

    getName(): string {
        return this.name;
    }
    getForces(): ForceLevelReport {
        return this.forces;
    }
}

function createDefaultStateProfile(name: USStateAbbreviation): StateProfile {

    const forces = {
        player: {
            faction: Faction.player,
            strength: 0,
            presence: 20
        },
        meyerhoff: {
            faction: Faction.meyerhoff,
            strength: 0,
            presence: 20
        },
        infected: {
            faction: Faction.infected,
            strength: 0,
            presence: 50
        },
        raider: {
            faction: Faction.raider,
            strength: 0,
            presence: 10
        }
    }

    return new StateProfile(name, forces);
}
export function createAllDefaultStateProfiles(): Map<USStateAbbreviation, StateProfile> {
    const stateProfiles = new Map<USStateAbbreviation, StateProfile>();

    for (let state of getListOfUSStates()) {
        stateProfiles.set(state, createDefaultStateProfile(state));
    }

    return stateProfiles;
}