/* eslint-disable react/prop-types */
import React from 'react'

export default function SkillFrame({ skill }) {
    return (
        <div
            className='flex h-14 w-14 select-none items-center justify-center rounded-lg
        border-4 border-cyan-500 text-3xl font-medium text-white
        shadow-md shadow-cyan-500/50 transition ease-out
        hover:bg-cyan-900 hover:shadow-lg hover:shadow-cyan-500/50'
        >
            {skill}
        </div>
    )
}
