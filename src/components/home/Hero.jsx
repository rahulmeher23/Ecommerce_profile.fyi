import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="w-full flex-1 h-screen bg-mobile-hero-img  sm:bg-hero-img object-fill bg-cover bg-center" >
            <div className="flex flex-col h-[92vh] items-start justify-end sm:justify-center p-10 md:pl-14  2xl:pl-28 md:w-2/3 2xl:w-1/2 text-white sm:text-black font-italiana">
                <div className="flex flex-col gap-5 text-3xl sm:text-7xl font-semibold md:font-medium 2xl:font-medium tracking-wide">
                    <div>
                        <p>Discover the Essence</p>
                        <p>of Timeless Elegance</p>
                    </div>
                    <div className='text-lg font-bold w-[80%]'>
                        <p>Step into the world where fashion meets art. Experience unparalleled luxury and sophisticated style with our exclusive collections.</p>
                    </div>
                </div>

                <Link to="/products">
                    <button className="mt-8 px-4 py-3 tracking-widest bg-white  sm:bg-black text-black sm:text-white text-lg font-semibold hover:bg-white hover:text-black border border-white transition-all duration-300">

                        Shop Now
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Hero;
