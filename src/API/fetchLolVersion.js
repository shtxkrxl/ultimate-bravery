import axios from "axios";

const versionUrl = "https://ddragon.leagueoflegends.com/api/versions.json"

export default async function fetchLolVersion () {
    const response = await axios.get(versionUrl);
    return response.data[0];
}