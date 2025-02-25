import { Faction } from "./Faction";

export type ForceLevel = {
    faction: Faction,       // Type of enemy
    strength: number,       // Danger of enemies
    presence: number        // Amount of enemies
}