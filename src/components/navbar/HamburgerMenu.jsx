import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ menuOpen, toggleMenu }) => {

    return (
        <div className="relative">
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="flex justify-start absolute top-0 p-8">
                    <button onClick={toggleMenu} className="text-3xl">&times;</button>
                </div>

                {/* Nav Menus */}
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <Link to="/" onClick={toggleMenu} className="text-2xl hover:text-gray-400">Home</Link>
                    <Link to="/shop" onClick={toggleMenu} className="text-2xl hover:text-gray-400">Shop</Link>
                    <Link to="/wishlist" onClick={toggleMenu} className="text-2xl hover:text-gray-400">Wishlist</Link>
                    <Link to="/account" onClick={toggleMenu} className="text-2xl hover:text-gray-400">Account</Link>
                    <Link to="/cart" onClick={toggleMenu} className="text-2xl hover:text-gray-400">Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
