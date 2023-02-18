import React from "react";

export default function Stats({ stat }) {
    const className = "h-8 w-8 border-2 rounded-full p-1 shadow-sm hover:shadow-md transition ease-out " + stat.style

    return <img src={stat.image} className={className}/>;
}
