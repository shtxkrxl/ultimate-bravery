import fetchCharacter from '../API/fetchCharacter'

export default async function randomCharacter() {
    const character = await fetchCharacter('Ahri')
    return character
}
