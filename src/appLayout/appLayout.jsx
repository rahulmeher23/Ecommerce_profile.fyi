// import React from 'react'
// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from '../components/navbar/Navbar';

// const Layout = () => {


//     return (
//         // <div className='flex flex-col w-full  min-h-screen h-full '>
//         <div className='flex flex-col w-full  min-h-screen '>
//             <div className='w-full'>
//                 <Navbar />
//             </div>

//             <main className=' flex-1 h-full'>
//                 <Outlet />
//             </main>

//             {/* <div className=''>
//                 <Footer />
//             </div> */}
//         </div>
//     )
// }

// export default Layout

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const Layout = () => {
    return (
        <div className='flex flex-col w-full min-h-screen '>
            <Navbar />
            <main className='flex flex-col flex-1 h-full' >
                <Outlet />
            </main>
            {/* If you want to include the footer later, ensure it's styled correctly */}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
