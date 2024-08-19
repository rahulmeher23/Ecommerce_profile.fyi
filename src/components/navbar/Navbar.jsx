import React, { useState, useEffect } from 'react'
import { CartIcon, HamburgerIcon, Logo } from '../../assets/AppIcons'
import { ShopIcon } from '../../assets/AppIcons'
import { WishlistIcon } from '../../assets/AppIcons'
import { SearchIcon } from '../../assets/AppIcons'
import { AccountIcon } from '../../assets/AppIcons'
import { Link, useLocation } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const { items, totalQuantity, totalCost } = useSelector(state => state.cart)

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
                        <div className="hidden sm:flex  w-8 h-8" title='Shop'>
                            <Link to="/products">
                                <ShopIcon />
                            </Link>
                        </div>
                        <div className="hidden lg:flex  w-8 h-8" title='Wishlist'>
                            <WishlistIcon />
                        </div>
                        <div className="hidden lg:flex  w-8 h-8" title='Account'>
                            <AccountIcon />
                        </div>

                        <div className='relative'>
                            <div className="w-8 h-8" title='Cart'>
                                <Link to="/cart">
                                    <CartIcon />
                                </Link>
                            </div>
                            {
                                totalQuantity > 0 && <div className='absolute -top-2 -right-2 bg-white text-black p-1 rounded-xl w-5 h-5 flex justify-center items-center'>{totalQuantity}</div>
                            }

                        </div>
                    </div>
                </div>

                <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            </nav>
        </>
    )
}

export default Navbar