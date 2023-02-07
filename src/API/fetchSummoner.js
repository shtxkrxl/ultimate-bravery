import axios from "axios";

const summonerUrl='http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/summoner.json'

export default async function fetchSummoner (id) {
    const response = await axios.get(summonerUrl)
    return response.data.data[id]
}
