/* eslint-disable react/prop-types */
import React from 'react'

export default function CharacterFrame({ character }) {
    if (character != '') {
        let summonerURL =
            "url('http://ddragon.leagueoflegends.com/cdn/13.3.1/img/champion/" +
            character.image.full
        const backStyle = {
            backgroundImage: summonerURL,
        }

        return (
            <div
                title={character.name}
                className='h-36 w-36 rounded-xl border-4 border-violet-700
                bg-contain bg-no-repeat shadow-md shadow-violet-700/50 transition
                ease-out hover:shadow-lg hover:shadow-violet-700/50'
                style={backStyle}
            ></div>
        )
    }
}
