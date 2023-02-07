import fetchSummoner from "../../API/fetchSummoner";
import randomFromArray from "../randomFromArray";

export default async function randomSummoner() {
    const summoners = []
    const summonerList = [
        "SummonerBarrier", "SummonerBoost", "SummonerDot", "SummonerExhaust",
         "SummonerFlash", "SummonerHaste", "SummonerHeal", "SummonerSmite", "SummonerTeleport"
    ]
    for (let i = 0; i < 2; i++) {
        const id = randomFromArray(summonerList);
        const summonerIndex = summonerList.indexOf(id);
        summonerList.splice(summonerIndex, 1);
        const summoner = await fetchSummoner(id);
        summoners.push(summoner)
    }
    return summoners;
}
