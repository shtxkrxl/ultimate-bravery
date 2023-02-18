import React from "react";

export default function MainRune({ rune, theme }) {
    const className = "h-20 w-20 rounded-full border-4 shadow-md hover:shadow-lg transition ease-out " + theme

    return (
        <img
            src={rune}
            className={className}
        />
    );
}
