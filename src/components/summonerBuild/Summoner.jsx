/* eslint-disable react/prop-types */
import React from 'react'

export default function Summoner({ summoner }) {
    let summonerURL =
        "url('http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/" +
        summoner.image.full
    const backStyle = {
        backgroundImage: summonerURL,
    }

    return (
        <div
            title={summoner.name}
            className='h-14 w-14 rounded-lg border-4 border-yellow-400
            bg-contain bg-no-repeat shadow-md shadow-yellow-600/50 transition
            ease-out hover:shadow-lg hover:shadow-yellow-600/50'
            style={backStyle}
        ></div>
    )
}
