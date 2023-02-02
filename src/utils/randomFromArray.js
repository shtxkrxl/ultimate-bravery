export default function randomFromArray(array) {
    const rand = Math.floor(Math.random() * array.length);
    return array[rand];
}