import randomBoots from "./randomBoots";
import randomMythic from "./randomMythic";
import randomLegendary from "./randomLegendary";

export default async function getBuild(classCharacter) {
    const build = [];
    build.push(await randomMythic(classCharacter));
    build.push(await randomBoots());
    build.push(await randomLegendary(classCharacter));
    return build;
}