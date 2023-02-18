/* eslint-disable react/prop-types */
import React from "react";
import ItemMythic from "./ItemMythic";
import ItemLegendary from "./ItemLegendary";
import ItemBoots from "./ItemBoots";

export default function ItemList({ build }) {
    
    if (build === 0) {
        return;
    }
    
    return (
        <div className="flex items-center gap-4">
            <ItemMythic mythic={build[0]} />
            <ItemBoots boots={build[1]} />
            <ItemLegendary legendary={build[2][0]} />
            <ItemLegendary legendary={build[2][1]} />
            <ItemLegendary legendary={build[2][2]} />
            <ItemLegendary legendary={build[2][3]} />
        </div>
    );
}
