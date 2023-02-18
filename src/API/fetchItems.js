import axios from "axios";
import fetchLolVersion from "./fetchLolVersion";

export default async function fetchItem(id) {
    const versionLol = await fetchLolVersion();
    const itemUrl =
        "http://ddragon.leagueoflegends.com/cdn/" +
        versionLol +
        "/data/en_US/item.json";

    const response = await axios.get(itemUrl);
    return response.data.data[id];
}
