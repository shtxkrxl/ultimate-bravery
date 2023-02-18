import fetchItem from '../../API/fetchItems'
import randomFromArray from '../randomFromArray'

export default async function randomBoots() {
    const id = randomFromArray(bootsList)
    const boots = await fetchItem(id)
    return boots
}

const bootsList = [3006, 3009, 3020, 3047, 3111, 3117, 3158]
