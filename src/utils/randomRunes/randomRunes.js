import r111 from '../../assets/runes/111.png'
import r112 from '../../assets/runes/112.png'
import r113 from '../../assets/runes/113.png'
import r114 from '../../assets/runes/114.png'
import r121 from '../../assets/runes/121.png'
import r122 from '../../assets/runes/122.png'
import r123 from '../../assets/runes/123.png'
import r131 from '../../assets/runes/131.png'
import r132 from '../../assets/runes/132.png'
import r133 from '../../assets/runes/133.png'
import r141 from '../../assets/runes/141.png'
import r142 from '../../assets/runes/142.png'
import r143 from '../../assets/runes/143.png'

import r211 from '../../assets/runes/211.png'
import r212 from '../../assets/runes/212.png'
import r213 from '../../assets/runes/213.png'
import r214 from '../../assets/runes/214.png'
import r221 from '../../assets/runes/221.png'
import r222 from '../../assets/runes/222.png'
import r223 from '../../assets/runes/223.png'
import r231 from '../../assets/runes/231.png'
import r232 from '../../assets/runes/232.png'
import r233 from '../../assets/runes/233.png'
import r241 from '../../assets/runes/241.png'
import r242 from '../../assets/runes/242.png'
import r243 from '../../assets/runes/243.png'
import r244 from '../../assets/runes/244.png'

import r311 from '../../assets/runes/311.png'
import r312 from '../../assets/runes/312.png'
import r313 from '../../assets/runes/313.png'
import r321 from '../../assets/runes/321.png'
import r322 from '../../assets/runes/322.png'
import r323 from '../../assets/runes/323.png'
import r331 from '../../assets/runes/331.png'
import r332 from '../../assets/runes/332.png'
import r333 from '../../assets/runes/333.png'
import r341 from '../../assets/runes/341.png'
import r342 from '../../assets/runes/342.png'
import r343 from '../../assets/runes/343.png'

import r411 from '../../assets/runes/411.png'
import r412 from '../../assets/runes/412.png'
import r413 from '../../assets/runes/413.png'
import r421 from '../../assets/runes/421.png'
import r422 from '../../assets/runes/422.png'
import r423 from '../../assets/runes/423.png'
import r431 from '../../assets/runes/431.png'
import r432 from '../../assets/runes/432.png'
import r433 from '../../assets/runes/433.png'
import r441 from '../../assets/runes/441.png'
import r442 from '../../assets/runes/442.png'
import r443 from '../../assets/runes/443.png'

import r511 from '../../assets/runes/511.png'
import r512 from '../../assets/runes/512.png'
import r513 from '../../assets/runes/513.png'
import r521 from '../../assets/runes/521.png'
import r522 from '../../assets/runes/522.png'
import r523 from '../../assets/runes/523.png'
import r531 from '../../assets/runes/531.png'
import r532 from '../../assets/runes/532.png'
import r533 from '../../assets/runes/533.png'
import r541 from '../../assets/runes/541.png'
import r542 from '../../assets/runes/542.png'
import r543 from '../../assets/runes/543.png'

import adaptive from '../../assets/stats/adaptive.png'
import armor from '../../assets/stats/armor.png'
import attackspeed from '../../assets/stats/attackspeed.png'
import haste from '../../assets/stats/haste.png'
import health from '../../assets/stats/health.png'
import magicresist from '../../assets/stats/magicresist.png'

import randomFromArray from '../randomFromArray'

export default function randomRunes() {
    const runes = []

    const runesList = [
        [
            // точность
            [r111, r112, r113, r114],
            [r121, r122, r123],
            [r131, r132, r133],
            [r141, r142, r143],
            'shadow-yellow-400/70 hover:shadow-yellow-400/70 border-yellow-400',
        ],
        [
            // доминирование
            [r211, r212, r213, r214],
            [r221, r222, r223],
            [r231, r232, r233],
            [r241, r242, r243, r244],
            'shadow-rose-600/70 hover:shadow-rose-600/70 border-rose-600',
        ],
        [
            // колдовство
            [r311, r312, r313],
            [r321, r322, r323],
            [r331, r332, r333],
            [r341, r342, r343],
            'shadow-indigo-400/70 hover:shadow-indigo-400/70 border-indigo-400',
        ],
        [
            // прочность
            [r411, r412, r413],
            [r421, r422, r423],
            [r431, r432, r433],
            [r441, r442, r443],
            'shadow-lime-400/70 hover:shadow-lime-400/70 border-lime-400',
        ],
        [
            // вдохновение
            [r511, r512, r513],
            [r521, r522, r523],
            [r531, r532, r533],
            [r541, r542, r543],
            'shadow-sky-400/70 hover:shadow-sky-400/70 border-sky-400',
        ],
    ]

    let runeBranch = randomFromArray(runesList)
    for (let i = 0; i < 4; i++) {
        runes.push(randomFromArray(runeBranch[i]))
    }
    runes.push(runeBranch[4])

    const runeBranchID = runesList.indexOf(runeBranch)
    runesList.splice(runeBranchID, 1)

    runeBranch = randomFromArray(runesList)
    for (let i = 1; i < 3; i++) {
        runes.push(randomFromArray(runeBranch[i]))
    }
    runes.push(runeBranch[4])

    for (let i = 0; i < 3; i++) {
        runes.push(randomFromArray(stats[i]))
    }

    return runes
}

const stats = [
    [
        {
            image: adaptive,
            style: 'shadow-violet-600/70 hover:shadow-violet-600/70 border-violet-600',
        },
        {
            image: attackspeed,
            style: 'shadow-yellow-400/70 hover:shadow-yellow-400/70 border-yellow-400',
        },
        {
            image: haste,
            style: 'shadow-white/70 hover:shadow-white/70 border-white',
        },
    ],
    [
        {
            image: adaptive,
            style: 'shadow-violet-600/70 hover:shadow-violet-600/70 border-violet-600',
        },
        {
            image: armor,
            style: 'shadow-red-400/70 hover:shadow-red-400/70 border-red-400',
        },
        {
            image: magicresist,
            style: 'shadow-sky-400/70 hover:shadow-sky-400/70 border-sky-400',
        },
    ],
    [
        {
            image: health,
            style: 'shadow-green-700/70 hover:shadow-green-700/70 border-green-700',
        },
        {
            image: armor,
            style: 'shadow-red-400/70 hover:shadow-red-400/70 border-red-400',
        },
        {
            image: magicresist,
            style: 'shadow-sky-400/70 hover:shadow-sky-400/70 border-sky-400',
        },
    ],
]
