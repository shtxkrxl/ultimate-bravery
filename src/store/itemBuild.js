import { makeAutoObservable, runInAction } from "mobx";
import getBuild from "../utils/randomBuild/getBuild";

class itemBuild {
    build = 0;

    constructor() {
        makeAutoObservable(this);
    }

    async changeBuild(classCharacter) {
        const build = await getBuild(classCharacter);
        runInAction(() => {
            this.build = build;
        });
    }
}

export default new itemBuild();
