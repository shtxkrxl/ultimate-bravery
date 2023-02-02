import axios from "axios";

const itemUrl='http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/item.json'

export default async function fetchItem (id) {
    const response = await axios.get(itemUrl)
    return response.data.data[id]
}
