import React from "react";

export default function SkillFrame({skill}) {
    return (
        <div className="h-16 w-16 flex items-center justify-center select-none rounded-lg
        border-4 border-cyan-500 text-3xl font-medium text-white
        transition ease-out shadow-md shadow-cyan-500/50
        hover:bg-cyan-900 hover:shadow-lg hover:shadow-cyan-500/50">
            {skill}
        </div>
    );
}
