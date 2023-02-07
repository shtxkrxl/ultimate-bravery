import { makeAutoObservable } from "mobx"
import getSkillsOrder from "../utils/randomSkillsOrder/getSkillsOrder"

class skillsOrder {
    order = getSkillsOrder()

    constructor() {
        makeAutoObservable(this)
    }

    changeOrder() {
        this.order = getSkillsOrder()
    }
}

export default new skillsOrder()