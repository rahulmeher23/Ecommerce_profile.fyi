import React from 'react'
import { Logo } from '../assets/AppIcons'

const PageNotFound = () => {
    return (
        <div className='flex flex-col h-[95vh] w-full items-center justify-center'>
            <div className='w-52 h-52 '>
                <Logo />
            </div>
            <div className='text-5xl font-bold'>404</div>
            <p className='text-3xl font-semibold'>Page Not Found</p>
        </div>
    )
}

export default PageNotFound