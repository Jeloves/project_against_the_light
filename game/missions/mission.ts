export type USStateAbbreviation =
    | "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "FL" | "GA"
    | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD"
    | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ"
    | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC"
    | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";

export class Mission {

    // Context
    private id: string;
    private name: string;
    private state: USStateAbbreviation;
    private location: string;
    private objectives: string[];           // TBD
    private optionals: string[];            // TBD
    private description: string;
    private expirationTimer: number | null       // measured in seconds, null = no expiration
    private travelTimer: number                // measured in miles         
}