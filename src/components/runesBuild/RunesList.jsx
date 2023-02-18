import React from 'react'
import AdditionalRunes from './AdditionalRunes'
import MainRune from './MainRune'
import SecondRune from './SecondRune'
import Stats from './Stats'

export default function RunesList({runes}) {
  return (
    <div className='flex justify-center items-start gap-5'>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <MainRune rune={runes[0]} theme={runes[4]}/>
            <AdditionalRunes rune={runes[1]} theme={runes[4]}/>
            <AdditionalRunes rune={runes[2]} theme={runes[4]}/>
            <AdditionalRunes rune={runes[3]} theme={runes[4]}/>
        </div>
        <div className='flex flex-col items-center justify-center gap-3 pt-5'>
            <SecondRune rune={runes[5]} theme={runes[7]}/>
            <SecondRune rune={runes[6]} theme={runes[7]}/>
            <Stats stat={runes[8]}/>
            <Stats stat={runes[9]}/>
            <Stats stat={runes[10]}/>
        </div>
    </div>
    
  )
}
