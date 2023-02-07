import { makeAutoObservable, runInAction } from "mobx";
import getBuild from "../utils/randomBuild/getBuild";

class itemBuild {
    build = 0;

    constructor() {
        makeAutoObservable(this);
    }

    async changeBuild() {
        const build = await getBuild();
        runInAction(() => {
            this.build = build;
        });
    }
}

export default new itemBuild();
