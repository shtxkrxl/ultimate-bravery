import fetchItem from "../../API/fetchItems";
import randomFromArray from "../randomFromArray";

export default async function randomLegendary() {
    const legendary = [];
    const legendaryList = [
        3041, 3504, 3011, 3109, 3222, 3107, 6616, 3179, 3050, 3165, 3094, 3102,
        3124, 3033, 3004, 3046, 3085, 3116, 6695, 3110, 3095, 3075, 6609, 3508,
        3181, 3135, 3742, 3814, 4401, 3156, 3065, 8020, 3003, 4629, 4637, 3026,
        4628, 3100, 3036, 3139, 3115, 3143, 6035, 6676, 3083, 3142, 3157, 3071,
        3053, 3091, 3193, 6694, 3153, 6333, 3748, 3072, 3031, 6675, 3074, 3089,
    ];
    for (let i = 0; i < 4; i++) {
        const itemID = randomFromArray(legendaryList);
        const itemIndex = legendaryList.indexOf(itemID);
        legendaryList.splice(itemIndex, 1);
        const legendaryItem = await fetchItem(itemID);
        legendary.push(legendaryItem);
    }
    return legendary;
}
