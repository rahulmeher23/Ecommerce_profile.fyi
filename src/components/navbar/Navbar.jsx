import React, { useState, useEffect } from 'react'
import { CartIcon, HamburgerIcon, Logo } from '../../assets/AppIcons'
import { ShopIcon } from '../../assets/AppIcons'
import { WishlistIcon } from '../../assets/AppIcons'
import { SearchIcon } from '../../assets/AppIcons'
import { AccountIcon } from '../../assets/AppIcons'
import { Link, useLocation } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav
                className={`font-tenor w-full transition-all duration-300 z-20 px-5 2xl:px-10 py-5 bg-black text-white `}
            >
                <div className=" flex justify-between items-center w-full">

                    <div className='md:hidden w-6 h-6 text-white' onClick={() => setMenuOpen(prev => !prev)}>
                        <HamburgerIcon />
                    </div>

                    <div className="text-lg font-bold h-10 sm:h-16 text-white">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="flex gap-10">
                        <div href="/products" className="hidden sm:flex  h-6 "><ShopIcon /></div>
                        <div href="#" className="hidden sm:flex  h-6"><WishlistIcon /></div>
                        <div href="#" className="hidden sm:flex  h-6"><AccountIcon /></div>
                        <div href="/cart" className=" h-6"><CartIcon /></div>
                    </div>
                </div>

                <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            </nav>
        </>
    )
}

export default Navbar