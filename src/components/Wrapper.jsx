/* eslint-disable react/prop-types */
import React from 'react'

export default function Wrapper({ children }) {
    return (
        <div className='h-screen bg-neutral-900'>
            <div className='mx-auto max-w-screen-xl'>{children}</div>
        </div>
    )
}
