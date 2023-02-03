import randomBoots from "./randomBoots";
import randomMythic from "./randomMythic";
import randomLegendary from "./randomLegendary";

export default async function getBuild() {
    const build = [];
    build.push(await randomMythic());
    build.push(await randomBoots());
    build.push(await randomLegendary());
    build.push(Date.now())
    return build;
}