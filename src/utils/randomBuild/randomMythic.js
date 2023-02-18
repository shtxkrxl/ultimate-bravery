import fetchItem from '../../API/fetchItems'
import randomFromArray from '../randomFromArray'

export default async function randomMythic(classItem) {
    switch (classItem) {
        case 'Fighter':
            return await getMythic(mythicFighter)
        case 'Marksman':
            return await getMythic(mythicMarksman)
        case 'Assassin':
            return await getMythic(mythicAssassin)
        case 'Mage':
            return await getMythic(mythicMage)
        case 'Tank':
            return await getMythic(mythicTank)
        case 'Support':
            return await getMythic(mythicSupport)
        default:
            return await getMythic(mythicList)
    }
}

async function getMythic(classMythic) {
    const id = randomFromArray(classMythic)
    const mythic = await fetchItem(id)
    return mythic
}

const mythicList = [
    3001, 4005, 3190, 6617, 2065, 4644, 6656, 6657, 6662, 6667, 6691, 6692,
    6693, 6655, 3084, 3152, 4633, 6665, 6653, 4636, 6630, 6632, 6631, 3078,
    6671, 6672, 6673,
]

const mythicFighter = [6632, 6630, 6631, 3078, 6692]

const mythicMarksman = [6671, 6673, 6672]

const mythicAssassin = [6691, 6692, 6693]

const mythicMage = [6656, 3152, 6653, 6655, 4636, 4633, 6657, 4644]

const mythicTank = [3001, 6662, 3084, 6665, 6667, 3190]

const mythicSupport = [4005, 3190, 6617, 2065, 3001]
