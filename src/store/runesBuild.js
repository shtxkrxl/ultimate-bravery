import { makeAutoObservable } from "mobx";
import randomRunes from "../utils/randomRunes/randomRunes";

class runesBuild {
    build = randomRunes()

    constructor() {
        makeAutoObservable(this)
    }

    changeBuild() {
        this.build = randomRunes()
    }
}

export default new runesBuild()