import React from "react";

export default function MyButton({ children, ...props }) {
    return (
        <button
            {...props}
            className="rounded-md border-2 border-rose-600 text-xl w-40 h-20
            text-white transition ease-out hover:bg-rose-600 active:bg-rose-300"
        >
            {children}
        </button>
    );
}
