import React from 'react'
import SkillFrame from './SkillFrame'
import triangle from '../../assets/triangle.png'

export default function SkillOrder({skills}) {
    return (
        <div className='flex gap-5 justify-center items-center'>
            <SkillFrame skill={skills[0]}/>
            <img src={triangle} className='h-8 w-8' />
            <SkillFrame skill={skills[1]}/>
            <img src={triangle} className='h-8 w-8' />
            <SkillFrame skill={skills[2]}/>
        </div>
    )
}
