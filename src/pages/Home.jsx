import React from "react";
import heroImage from "../assets/images/heroImage.jpg";

import CategoriesCard from "../components/home/CategoriesCard";
import Hero from "../components/home/Hero";
import { Underline } from "../assets/AppIcons";
import { Link } from "react-router-dom";

const Home = () => {
    const categoriesDB = [
        {
            id: '1',
            name: "Clothes",
            img: heroImage,
            description:
                "Explore our latest collection of luxurious clothes designed to make you stand out.",
        },
        {
            id: '2',
            name: "Necklaces",
            img: heroImage,

            description:
                "Discover elegant necklaces that add a touch of luxury to any outfit.",
        },
        {
            id: '3',
            name: "Earrings",
            img: heroImage,
            description:
                "Browse through our selection of exquisite earrings for every occasion.",
        },

    ];

    return (
        <div className="flex flex-col items-center justify-center h-full flex-1">
            <Hero />

            <div className="flex flex-col item-center justify-center font-tenor tracking tracking-wider font-bold  p-10 gap-10 ">
                <div className="flex flex-col w-full item-center justify-center">
                    <p className="text-center text-2xl md:text-3xl">EXPLORE CATEGORIES</p>
                    <div className="flex justify-center items-center  h-10">
                        <div className="w-1/2 md:w-1/4">
                            <Underline />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                    {categoriesDB.map((category) => (
                        <CategoriesCard {...category} />
                    ))}
                </div>
            </div>

            <div className="flex w-full items-center justify-center">
                <Link to="/products">
                    <button className="text-2xl p-2 px-10 py-2  text-black border-2 border-black">
                        EXPLORE ALL
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Home;
