import React from "react";

export default function ItemBoots({ boots }) {
    let itemUrl =
        "url('http://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/" +
        boots.image.full;
    const backStyle = {
        backgroundImage: itemUrl,
    };

    return (
        <div
            title={boots.name}
            className="h-20 w-20 rounded-md border-4 border-yellow-400
            bg-contain bg-no-repeat shadow-md shadow-yellow-600/50 transition
            ease-out hover:shadow-lg hover:shadow-yellow-600/50"
            style={backStyle}
        ></div>
    );
}
