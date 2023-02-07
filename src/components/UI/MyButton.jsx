import React from "react";

export default function MyButton({ children, ...props }) {
    return (
        <button
            {...props}
            className="rounded-lg border-2 border-rose-600 text-xl w-40 h-20
            text-white transition ease-out shadow-md shadow-rose-600/50
            hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/50 active:bg-rose-300"
        >
            {children}
        </button>
    );
}
