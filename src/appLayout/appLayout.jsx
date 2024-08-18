import React from 'react'
import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';

const Layout = () => {


    return (
        <div className='flex flex-col w-full  min-h-screen h-full '>
            <div className='w-full'>
                <Navbar />
            </div>

            <div className='flex flex-1 h-full'>
                <main className='flex-1 h-full'>
                    <Outlet />
                </main>
            </div>

            {/* <div className=''>
                <Footer />
            </div> */}
        </div>




    )
}

export default Layout