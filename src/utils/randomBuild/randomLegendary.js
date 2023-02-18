import fetchItem from "../../API/fetchItems";
import randomFromArray from "../randomFromArray";

export default async function randomLegendary(classItem) {
    switch (classItem) {
        case "Fighter":
            return await getLegendary(legendaryFighter);
        case "Marksman":
            return await getLegendary(legendaryMarksman);
        case "Assassin":
            return await getLegendary(legendaryAssassin);
        case "Mage":
            return await getLegendary(legendaryMage);
        case "Tank":
            return await getLegendary(legendaryTank);
        case "Support":
            return await getLegendary(legendarySupport);
        default:
            return await getLegendary(legendaryList);
    }
}

async function getLegendary(classLegendary) {
    const legendary = [];
    const legendaryList = classLegendary.slice();
    for (let i = 0; i < 4; i++) {
        const itemID = randomFromArray(legendaryList);
        const itemIndex = legendaryList.indexOf(itemID);
        legendaryList.splice(itemIndex, 1);
        const legendaryItem = await fetchItem(itemID);
        legendary.push(legendaryItem);
    }
    return legendary;
}


const legendaryList = [
    3041, 3504, 3011, 3109, 3222, 3107, 6616, 3179, 3050, 3165, 3094, 3102,
    3124, 3033, 3004, 3046, 3085, 3116, 6695, 3110, 3095, 3075, 6609, 3508,
    3181, 3135, 3742, 3814, 4401, 3156, 3065, 8020, 3003, 4629, 4637, 3026,
    4628, 3100, 3036, 3139, 3115, 3143, 6035, 6676, 3083, 3142, 3157, 3071,
    3053, 3091, 3193, 6694, 3153, 6333, 3748, 3072, 3031, 6675, 3074, 3089,
];

const legendaryFighter = [3124, 6609, 3181, 3156, 3026, 6035, 3071, 3053, 3091, 6694, 3153, 6333, 3074, 3742, 3161];

const legendaryMarksman = [3094, 3124, 3004, 3046, 3085, 3095, 3508, 3156, 3026, 3036, 3139, 3033, 6676, 3072, 3153, 6675, 3031, 6694];

const legendaryAssassin = [3179, 6695, 6609, 3004, 3814, 3156, 6696, 3142, 6676, 3026, 6035, 3071, 6694, 3074, 3161];

const legendaryMage = [3041, 3102, 3116, 3135, 3003, 3115, 4628, 4645, 3165, 3157, 3100, 4637, 4629, 3089];

const legendaryTank = [3109, 3050, 8001, 3119, 3110, 3075, 3068, 6664, 3065, 4401, 3742, 8020, 4637, 3083, 3143, 3053, 3193, 3748];

const legendarySupport = [3504, 6616, 3011, 3222, 3107, 3109, 3050, 3119, 6664, 8020];
