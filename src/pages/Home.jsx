import React from "react";
import { Link } from "react-router-dom";

import clothes from "../assets/images/clothes.jpg";
import necklace from "../assets/images/necklace.jpg";
import earrings from "../assets/images/earrings.jpg";
import CategoriesCard from "../components/home/CategoriesCard";
import Hero from "../components/home/Hero";
import { Underline } from "../assets/AppIcons";
import { productsDB } from "../database/productsDB";

const Home = () => {
    const categoriesDB = [
        {
            id: '1',
            name: "Clothes",
            img: clothes,
            description:
                "Explore our latest collection of luxurious clothes designed to make you stand out.",
        },
        {
            id: '2',
            name: "Necklaces",
            img: necklace,
            description:
                "Discover elegant necklaces that add a touch of luxury to any outfit.",
        },
        {
            id: '3',
            name: "Earrings",
            img: earrings,
            description:
                "Browse through our selection of exquisite earrings for every occasion.",
        },
    ];

    console.log(productsDB)


    return (
        <div className="flex flex-col items-center justify-center h-full flex-1 mb-10">
            <Hero />
            <div className="flex flex-col item-center justify-center font-tenor tracking tracking-wider font-bold  p-10 gap-10 ">
                <div className="flex flex-col w-full item-center justify-center">
                    <p className="text-center text-2xl md:text-3xl">EXPLORE CATEGORIES</p>
                    <div className="flex justify-center items-center  h-10">
                        <div className="w-1/2    xl:w-1/4">
                            <Underline />
                        </div>
                    </div>
                </div>

                {/* Category section in Home page */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                    {categoriesDB.map((category) => (
                        <CategoriesCard {...category} />
                    ))}
                </div>
            </div>

            <div className="flex w-full items-center justify-center">
                <Link to="/products">
                    <button className="text-2xl p-2 px-10 py-2  text-black border-2 border-black hover:bg-black hover:text-white">
                        EXPLORE ALL
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Home;
