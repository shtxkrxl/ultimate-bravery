import React from 'react'

export default function Wrapper({children}) {
  return (
    <div className='bg-neutral-900 h-screen'>
        <div className='mx-auto max-w-screen-xl'>
            {children}
        </div>
    </div>
  )
}
