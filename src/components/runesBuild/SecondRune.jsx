/* eslint-disable react/prop-types */
import React from "react";

export default function SecondRune({ rune, theme }) {
    const className =
        "h-14 w-14 rounded-full border-4 shadow-md hover:shadow-lg transition ease-out " +
        theme;

    return <img src={rune} className={className} />;
}
