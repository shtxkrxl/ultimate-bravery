import { observer } from 'mobx-react-lite'
import React from 'react'
import { useEffect } from 'react'
import ItemList from './itemBuild/ItemList'
import MyButton from './UI/MyButton'
import itemBuild from '../store/itemBuild'
import SkillOrder from './skillOrder/SkillOrder'
import skillsOrder from '../store/skillsOrder'
import SummonerList from './summonerBuild/SummonerList'
import summonerBuild from '../store/summonerBuild'
import RunesList from './runesBuild/RunesList'
import runesBuild from '../store/runesBuild'
import CharacterFrame from './character/CharacterFrame'
import characterStore from '../store/characterStore'

const CardBuild = observer(() => {
    useEffect(() => changeEverything(), [])

    const changeEverything = () => {
        characterStore.changeChracter()
        skillsOrder.changeOrder()
        summonerBuild.changeBuild()
        runesBuild.changeBuild()
        itemBuild.changeBuild(characterStore.character0.tags[0])
    }

    return (
        <div>
            <div className='grid grid-cols-4 gap-y-10 pt-10'>
                <div className='col-span-1 flex items-center justify-center gap-3'>
                    <CharacterFrame character={characterStore.character} />
                    <SummonerList summoner={summonerBuild.build} />
                </div>
                <div className='col-span-2 flex justify-center'>
                    <ItemList build={itemBuild.build} />
                </div>
                <div className='flex items-center justify-center'>
                    <MyButton onClick={changeEverything}>Generate</MyButton>
                </div>

                <RunesList runes={runesBuild.build} />
                <div className='col-span-2 flex items-start pl-8'>
                    <SkillOrder skills={skillsOrder.order} />
                </div>
            </div>
        </div>
    )
})

export default CardBuild
