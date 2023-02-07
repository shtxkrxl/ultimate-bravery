import React from "react";
import Summoner from "./Summoner";

export default function SummonerList({ summoner }) {
    if (summoner === 0) {
        return;
    }

    return (
        <div className="flex flex-col gap-5">
            <Summoner summoner={summoner[0]} />
            <Summoner summoner={summoner[1]} />
        </div>
    );
}
