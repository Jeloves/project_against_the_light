export enum MissionStatus {
    available = "available",    // Pre-acceptance: mission does NOT have to be accepted
    order = "order",            // Pre-acceptance: mission must be accepted
    deployed = "deployed",      // Soldiers are en route to the AO
    engaged = "engaged",        // Soldiers are active in the AO
    success = "success",
    failure = "failure",
    hidden = "hidden"
}