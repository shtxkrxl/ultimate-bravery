import React from "react";

export default function ItemMythic({ mythic }) {
    let itemUrl =
        "url('http://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/" +
        mythic.image.full;
    const backStyle = {
        backgroundImage: itemUrl,
    };

    return (
        <div
            title={mythic.name}
            className="h-24 w-24 rounded-md border-4 border-rose-600
            bg-contain bg-no-repeat shadow-lg shadow-rose-600/50 transition
            ease-out hover:shadow-xl hover:shadow-rose-600/50"
            style={backStyle}
        ></div>
    );
}
