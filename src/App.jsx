import React, { useEffect, useState } from "react";
import ItemList from "./components/itemBuild/ItemList";
import Wrapper from "./components/Wrapper";
import MyButton from "./components/UI/MyButton";
import getBuild from "./utils/randomBuild/getBuild";
import itemBuild from "./store/itemBuild";
import { observer } from "mobx-react-lite";


const App = observer(() => {
    
    return (
        <Wrapper>
            <div className="flex gap-10 items-center justify-center">
                <ItemList build={itemBuild.build} /> 
                <MyButton onClick={() => itemBuild.changeBuild()}>Build</MyButton>
            </div>
        </Wrapper>
    );
})

export default App;
