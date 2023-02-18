import { makeAutoObservable, runInAction } from "mobx";
import randomCharacter from "../utils/randomChracter";

class characterStore {
    aatrox = {
        tags: ["Fighter"],
        name: "Aatrox",
        image: {
            full: "Aatrox.png"
        }
    }
    
    character0 = this.aatrox;
    character = "";

    constructor() {
        makeAutoObservable(this);
    }

    async changeChracter() {
        const character = await randomCharacter();
        runInAction(() => {
            this.character = this.character0;
            this.character0 = character;
        });
    }
}

export default new characterStore();
