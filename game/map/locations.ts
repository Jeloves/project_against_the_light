import { getRandomIndex } from "@/utils/math";
import { USStateAbbreviation } from "./USStateAbbreviation";

const missionLocations: Record<USStateAbbreviation, string[]> = {
    AL: ["Birmingham", "Montgomery", "Huntsville", "Mobile", "Tuscaloosa", "Hoover", "Auburn", "Dothan", "Decatur", "Florence"],
    AK: ["Anchorage", "Juneau", "Fairbanks", "Sitka", "Ketchikan", "Wasilla", "Kenai", "Kodiak", "Bethel", "Palmer"],
    AZ: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Glendale", "Gilbert", "Tempe", "Peoria", "Surprise"],
    AR: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "Rogers", "Conway", "North Little Rock", "Bentonville", "Hot Springs"],
    CA: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose", "Fresno", "Long Beach", "Oakland", "Bakersfield", "Anaheim"],
    CO: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo", "Boulder"],
    CT: ["Hartford", "New Haven", "Stamford", "Bridgeport", "Waterbury", "Norwalk", "Danbury", "New Britain", "Greenwich", "Bristol"],
    DE: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Milford", "Seaford", "Georgetown", "Elsmere", "Millsboro"],
    FL: ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee", "St. Petersburg", "Fort Lauderdale", "Hialeah", "Gainesville", "Sarasota"],
    GA: ["Atlanta", "Savannah", "Augusta", "Columbus", "Macon", "Athens", "Albany", "Roswell", "Marietta", "Valdosta"],
    HI: ["Honolulu", "Hilo", "Kailua", "Kapolei", "Lahaina", "Kaneohe", "Waipahu", "Pearl City", "Mililani", "Kihei"],
    ID: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello", "Caldwell", "Coeur d'Alene", "Twin Falls", "Lewiston", "Post Falls"],
    IL: ["Chicago", "Springfield", "Peoria", "Rockford", "Naperville", "Joliet", "Aurora", "Champaign", "Evanston", "Bloomington"],
    IN: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Bloomington", "Carmel", "Fishers", "Hammond", "Lafayette", "Gary"],
    IA: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Waterloo", "Ames", "West Des Moines", "Council Bluffs", "Dubuque"],
    KS: ["Wichita", "Overland Park", "Kansas City", "Topeka", "Olathe", "Lawrence", "Shawnee", "Salina", "Manhattan", "Lenexa"],
    KY: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Richmond", "Georgetown", "Florence", "Hopkinsville", "Paducah"],
    LA: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Alexandria", "Houma"],
    ME: ["Portland", "Augusta", "Bangor", "Lewiston", "Auburn", "Biddeford", "Sanford", "Saco", "Westbrook", "Waterville"],
    MD: ["Baltimore", "Annapolis", "Frederick", "Rockville", "Gaithersburg", "Bowie", "Hagerstown", "Salisbury", "College Park", "Laurel"],
    MA: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell", "Brockton", "Quincy", "Lynn", "New Bedford", "Fall River"],
    MI: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing", "Flint", "Kalamazoo", "Muskegon", "Dearborn", "Bay City", "Saginaw"],
    MN: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington", "Brooklyn Park", "Plymouth", "St. Cloud", "Eagan", "Burnsville"],
    MS: ["Jackson", "Gulfport", "Biloxi", "Hattiesburg", "Southaven", "Meridian", "Tupelo", "Greenville", "Olive Branch", "Clinton"],
    MO: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence", "Lee's Summit", "O'Fallon", "St. Charles", "St. Joseph", "Joplin"],
    MT: ["Billings", "Missoula", "Great Falls", "Bozeman", "Helena", "Butte", "Kalispell", "Havre", "Miles City", "Livingston"],
    NE: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "Norfolk", "Columbus", "North Platte"],
    NV: ["Las Vegas", "Reno", "Henderson", "Carson City", "Sparks", "Elko", "North Las Vegas", "Fernley", "Mesquite", "Fallon"],
    NH: ["Manchester", "Concord", "Nashua", "Portsmouth", "Dover", "Keene", "Rochester", "Laconia", "Claremont", "Berlin"],
    NJ: ["Newark", "Jersey City", "Trenton", "Atlantic City", "Camden", "Paterson", "Elizabeth", "Edison", "Woodbridge", "Toms River"],
    NM: ["Albuquerque", "Santa Fe", "Las Cruces", "Roswell", "Farmington", "Hobbs", "Clovis", "Carlsbad", "Gallup", "Los Alamos"],
    NY: ["New York City", "Buffalo", "Rochester", "Albany", "Syracuse", "Yonkers", "Binghamton", "Utica", "White Plains", "Troy"],
    NC: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Wilmington", "Fayetteville", "Asheville", "High Point", "Gastonia", "Concord"],
    ND: ["Fargo", "Bismarck", "Grand Forks", "Minot", "Williston", "Mandan", "Dickinson", "Jamestown", "Wahpeton", "Devils Lake"],
    OH: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Youngstown", "Canton", "Lorain", "Hamilton"],
    OK: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond", "Lawton", "Moore", "Midwest City", "Stillwater", "Enid"],
    OR: ["Portland", "Eugene", "Salem", "Gresham", "Medford", "Hillsboro", "Bend", "Beaverton", "Corvallis", "Albany"],
    PA: ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "York"],
    RI: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "Newport", "Central Falls", "Westerly", "Coventry"],
    SC: ["Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville", "Sumter", "Goose Creek", "Hilton Head Island"],
    SD: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Yankton", "Pierre", "Huron", "Spearfish"],
    TN: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Franklin", "Jackson", "Johnson City", "Bartlett"],
    TX: ["Houston", "Austin", "Dallas", "San Antonio", "Fort Worth", "El Paso", "Lubbock", "Plano", "Arlington", "Corpus Christi"],
    UT: ["Salt Lake City", "Provo", "West Valley City", "Orem", "St. George", "Ogden", "Sandy", "Layton", "Lehi", "Logan"],
    VT: ["Burlington", "Montpelier", "Rutland", "Barre", "Bennington", "Brattleboro", "St. Albans", "Newport", "Middlebury", "Stowe"],
    VA: ["Richmond", "Virginia Beach", "Norfolk", "Chesapeake", "Arlington", "Alexandria", "Roanoke", "Charlottesville", "Newport News", "Hampton"],
    WA: ["Seattle", "Spokane", "Tacoma", "Bellevue", "Everett", "Vancouver", "Bellingham", "Kennewick", "Renton", "Yakima"],
    WV: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Weirton", "Fairmont", "Martinsburg", "Beckley", "Clarksburg"],
    WI: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Oshkosh", "Eau Claire", "Janesville"],
    WY: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Green River", "Evanston", "Riverton", "Jackson"]
};

export function getRandomLocationByState(state: USStateAbbreviation): string {
    const locationList = missionLocations[state];
    const randomIndex = getRandomIndex(locationList.length);
    return locationList[randomIndex];
}