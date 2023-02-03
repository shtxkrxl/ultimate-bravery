import { makeAutoObservable } from "mobx"
import getBuild from "../utils/randomBuild/getBuild"

class itemBuild {
    build = 0

    constructor() {
        makeAutoObservable(this)
    }

    async changeBuild() {
        this.build = await getBuild()
    }
}

export default new itemBuild()