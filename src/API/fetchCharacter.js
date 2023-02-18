import axios from "axios";
import fetchLolVersion from "./fetchLolVersion";
import randomFromArray from "../utils/randomFromArray";

export default async function fetchCharacter() {
    const versionLol = await fetchLolVersion();
    const characterUrl =
        "http://ddragon.leagueoflegends.com/cdn/" +
        versionLol +
        "/data/en_US/champion.json";

    const response = await axios.get(characterUrl);
    const characterList = Object.keys(response.data.data);
    const res = randomFromArray(characterList);
    return response.data.data[res];
}
