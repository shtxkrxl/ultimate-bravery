import React, { useEffect, useState } from "react";
import ItemList from "./components/itemBuild/ItemList";
import Wrapper from "./components/Wrapper";
import MyButton from "./components/UI/MyButton";
import getBuild from "./utils/randomBuild/getBuild";

function App() {
    const [build, setBuild] = useState()

    return (
        <Wrapper>
            <div className="flex gap-10 items-center justify-center">
                <ItemList build={build} />
                <MyButton onClick={async () => setBuild(await getBuild())}>Build</MyButton>   
            </div>
        </Wrapper>
    );
}

export default App;
