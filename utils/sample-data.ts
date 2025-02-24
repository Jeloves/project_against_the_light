import { Mission } from "@/missions/mission";
import { User } from "../interfaces";
import { title_mission_type_0, title_mission_type_1, title_mission_type_2, title_mission_type_3, title_mission_type_4, title_mission_type_5, title_mission_type_6, title_mission_type_7, title_mission_type_8, title_mission_type_9 } from "@/constants";

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

// Sample missions


const sampleMission1 = new Mission(
  "Operation Crimson Vortex",
  title_mission_type_9,
  "Phoenix, Arizona",
  691200,
  ["charID_3412", "charID_7856", "charID_9023", "charID_6721", "charID_4509"],
  "/icons/sample_emblem.svg"
);

const sampleMission2 = new Mission(
  "Operation Iron Phantom",
  title_mission_type_1,
  "Seattle, Washington",
  518400,
  ["charID_2934", "charID_8650", "charID_7431", "charID_5147", "charID_3802"],
  "/icons/sample_emblem.svg"
);

const sampleMission3 = new Mission(
  "Operation Thunder Talon",
  title_mission_type_2,
  "Houston, Texas",
  777600,
  ["charID_1345", "charID_9682", "charID_5731", "charID_2048", "charID_8256"],
  "/icons/sample_emblem.svg"
);

const sampleMission4 = new Mission(
  "Operation Specter Howl",
  title_mission_type_4,
  "Denver, Colorado",
  604800,
  ["charID_4872", "charID_6193", "charID_7582", "charID_8431", "charID_2305"],
  "/icons/sample_emblem.svg"
);

const sampleMission5 = new Mission(
  "Operation Shadow Serpent",
  title_mission_type_5,
  "Los Angeles, California",
  691200,
  ["charID_3857", "charID_9621", "charID_7485", "charID_6230", "charID_5412"],
  "/icons/sample_emblem.svg"
);

const sampleMission6 = new Mission(
  "Operation Phantom Storm",
  title_mission_type_7,
  "Chicago, Illinois",
  432000,
  ["charID_8721", "charID_6943", "charID_5308", "charID_2179", "charID_6482"],
  "/icons/sample_emblem.svg"
);

const sampleMission7 = new Mission(
  "Operation Vortex Sabre",
  title_mission_type_8,
  "Miami, Florida",
  518400,
  ["charID_7412", "charID_6938", "charID_1257", "charID_8306", "charID_9752"],
  "/icons/sample_emblem.svg"
);

const sampleMission8 = new Mission(
  "Operation Eclipse Fang",
  title_mission_type_6,
  "New Orleans, Louisiana",
  777600,
  ["charID_2481", "charID_9530", "charID_6274", "charID_8093", "charID_3745"],
  "/icons/sample_emblem.svg"
);

const sampleMission9 = new Mission(
  "Operation Tempest Lance",
  title_mission_type_9,
  "Las Vegas, Nevada",
  604800,
  ["charID_1238", "charID_5762", "charID_4927", "charID_8301", "charID_6594"],
  "/icons/sample_emblem.svg"
);

const sampleMission10 = new Mission(
  "Operation Inferno Hawk",
  title_mission_type_0,
  "Atlanta, Georgia",
  691200,
  ["charID_3157", "charID_9824", "charID_4753", "charID_6278", "charID_8491"],
  "/icons/sample_emblem.svg"
);

const sampleMission11 = new Mission(
  "Operation Obsidian Wrath",
  title_mission_type_1,
  "San Diego, California",
  518400,
  ["charID_9403", "charID_6815", "charID_3729", "charID_2458", "charID_7596"],
  "/icons/sample_emblem.svg"
);

const sampleMission12 = new Mission(
  "Operation Celestial Pike",
  title_mission_type_3,
  "Boston, Massachusetts",
  777600,
  ["charID_4523", "charID_8169", "charID_7032", "charID_5784", "charID_6291"],
  "/icons/sample_emblem.svg"
);

const sampleMission13 = new Mission(
  "Operation Onyx Raptor",
  title_mission_type_2,
  "Detroit, Michigan",
  604800,
  ["charID_9256", "charID_4817", "charID_6934", "charID_2085", "charID_3749"],
  "/icons/sample_emblem.svg"
);

const sampleMission14 = new Mission(
  "Operation Dagger Storm",
  title_mission_type_4,
  "Portland, Oregon",
  691200,
  ["charID_5739", "charID_2941", "charID_8623", "charID_4075", "charID_1508"],
  "/icons/sample_emblem.svg"
);

const sampleMission15 = new Mission(
  "Operation Midnight Echo",
  title_mission_type_5,
  "Philadelphia, Pennsylvania",
  518400,
  ["charID_8317", "charID_5209", "charID_7942", "charID_6538", "charID_2685"],
  "/icons/sample_emblem.svg"
);

const sampleMission16 = new Mission(
  "Operation Titan Gale",
  title_mission_type_6,
  "Tampa, Florida",
  691200,
  ["charID_4561", "charID_8129", "charID_2937", "charID_6483", "charID_5724"],
  "/icons/sample_emblem.svg"
);

const sampleMission17 = new Mission(
  "Operation Avalanche Spear",
  title_mission_type_9,
  "St. Louis, Missouri",
  777600,
  ["charID_1294", "charID_6527", "charID_3409", "charID_8751", "charID_2496"],
  "/icons/sample_emblem.svg"
);

const sampleMission18 = new Mission(
  "Operation Storm Fang",
  title_mission_type_7,
  "Salt Lake City, Utah",
  604800,
  ["charID_7923", "charID_5836", "charID_2417", "charID_9538", "charID_4621"],
  "/icons/sample_emblem.svg"
);

const sampleMission19 = new Mission(
  "Operation Ember Strike",
  title_mission_type_0,
  "Minneapolis, Minnesota",
  518400,
  ["charID_6374", "charID_9215", "charID_3852", "charID_7486", "charID_1904"],
  "/icons/sample_emblem.svg"
);

const sampleMission20 = new Mission(
  "Operation Spectral Dagger",
  title_mission_type_3,
  "Albuquerque, New Mexico",
  691200,
  ["charID_2457", "charID_8931", "charID_5729", "charID_1608", "charID_4382"],
  "/icons/sample_emblem.svg"
);

export const sampleMissions = [
  sampleMission1, sampleMission2, sampleMission3, sampleMission4, sampleMission5,
  sampleMission6, sampleMission7, sampleMission8, sampleMission9, sampleMission10,
  sampleMission11, sampleMission12, sampleMission13, sampleMission14, sampleMission15,
  sampleMission16, sampleMission17, sampleMission18, sampleMission19, sampleMission20
].sort((a, b) => a.name.localeCompare(b.name));
