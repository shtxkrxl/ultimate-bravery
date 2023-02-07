import { makeAutoObservable, runInAction } from "mobx";
import randomSummoner from "../utils/randomSummoner/randomSummoner";

class summonerBuild {
    build = 0;

    constructor() {
        makeAutoObservable(this);
    }

    async changeBuild() {
        const summoner = await randomSummoner();
        runInAction(() => {
            this.build = summoner;
        });
    }
}

export default new summonerBuild();
