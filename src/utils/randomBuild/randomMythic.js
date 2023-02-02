import fetchItem from "../../API/fetchItems";
import randomFromArray from "../randomFromArray";

export default async function randomMythic() {
    const id = randomFromArray(mythicsList);
    const mythic = await fetchItem(id);
    return mythic;
}

const mythicsList = [
    3001, 4005, 3190, 6617, 2065, 4644, 6656, 6657, 6662, 6667, 6691, 6692,
    6693, 6655, 3084, 3152, 4633, 6665, 6653, 4636, 6630, 6632, 6631, 3078,
    6671, 6672, 6673,
];
