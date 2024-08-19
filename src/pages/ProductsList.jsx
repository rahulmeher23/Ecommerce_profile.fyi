import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Underline } from '../assets/AppIcons';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
// import { addProducts, fetchProducts } from '../redux/slices/productsSlice';
import ProductCard from '../components/products/ProductCard';
import { productsDB } from '../database/productsDB';
import ClipLoader from "react-spinners/ClipLoader";

const ProductsList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items, totalCost } = useSelector(state => state.cart)
    const [loading, setLoading] = useState(true)

    console.log("items :", items, "totalCost: ", totalCost)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, [1000])
    }, [])

    return (
        <>
            {
                loading ? (
                    <div className='h-[80vh] w-full flex items-center justify-center'>
                        <ClipLoader
                            color="#000"
                            loading={loading}
                            // cssOverride={override}
                            size={75}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>) : (
                    <div className='flex flex-col justify-center items-center p-5 md:p-5 xl:p-10 gap-5 md:gap-10'>
                        <div className="flex flex-col w-full item-center justify-center">
                            <p className="text-center text-2xl xl:text-3xl font-medium">EXPLORE OUR PRODUCTS</p>
                            <div className="flex justify-center items-center  h-10">
                                <div className="w-1/2 md:w-1/6">
                                    <Underline />
                                </div>
                            </div>
                        </div>

                        {/* each Product card */}
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 xl:gap-10 2xl:gap-10'>
                            {productsDB.length > 0 && productsDB.map((product) => {
                                return (
                                    <ProductCard {...product} />
                                );
                            })}
                        </div>
                    </div>
                )
            }

        </>
    );
}

export default ProductsList;
