import React, { useEffect, useState } from "react";
import ItemList from "./components/itemBuild/ItemList";
import Wrapper from "./components/Wrapper";
import MyButton from "./components/UI/MyButton";
import itemBuild from "./store/itemBuild";
import { observer } from "mobx-react-lite";
import SkillOrder from "./components/skillOrder/SkillOrder";
import skillsOrder from "./store/skillsOrder";
import Summoner from "./components/summonerBuild/Summoner";
import randomSummoner from './utils/randomSummoner/randomSummoner'
import SummonerList from "./components/summonerBuild/SummonerList";
import summonerBuild from "./store/summonerBuild";

const App = observer(() => {
    useEffect(() => changeEverything(), []);

    const changeEverything = () => {
        itemBuild.changeBuild();
        skillsOrder.changeOrder();
        summonerBuild.changeBuild();
    };


    return (
        <Wrapper>
            <div className="grid grid-cols-3 grid-rows-2">
                <div className="col-span-2 flex items-center justify-center">
                    <ItemList build={itemBuild.build} />
                </div>
                <div className="flex items-center justify-center py-12">
                    <MyButton onClick={changeEverything}>Generate</MyButton>
                </div>
                <div className="col-span-2 flex items-center justify-center gap-16">
                    <SummonerList summoner={summonerBuild.build}/>
                    <SkillOrder skills={skillsOrder.order} />
                </div>
            </div>
        </Wrapper>
    );
});

export default App;
