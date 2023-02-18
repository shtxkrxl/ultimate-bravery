import axios from "axios";
import fetchLolVersion from "./fetchLolVersion";

export default async function fetchSummoner(id) {
    const versionLol = await fetchLolVersion();
    const summonerUrl =
        "http://ddragon.leagueoflegends.com/cdn/" +
        versionLol +
        "/data/en_US/summoner.json";

    const response = await axios.get(summonerUrl);
    return response.data.data[id];
}
