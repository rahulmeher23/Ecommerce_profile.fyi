import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { productsDB } from '../database/productsDB';
import ClipLoader from "react-spinners/ClipLoader";
import { addItem, removeItem } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';

const ProductDescription = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);
    const [loading, setLoading] = useState(false)
    console.log(id);

    // const { products, loading } = useSelector(state => state.products)
    const product = productsDB.find((prod) => prod.id === id);

    // Function to add item to cart
    const handleAddtoCartBtn = (product) => {
        if (product) {
            dispatch(addItem(product));
            toast.success('Item Added to Cart!');
        } else {
            toast.error('Failed to Add to Cart!');
        }
    };

    // Function to remove item from cart
    const handleRemovefromCartBtn = (id) => {
        console.log(id)
        if (id) {
            dispatch(removeItem(id));
            toast.success('Item Removed from Cart!');
        } else {
            toast.error('Failed to Remove from Cart!');
        }
    };



    const { name, image, price, description } = product;

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
                        />  </div>
                ) : (
                    <div className='font-tenor flex flex-col justify-between lg:p-10'>
                        <div className='h-[75%] md:h-[55%] lg:h-[50%] flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-10'>
                            {/* Product Image */}
                            <div className='h-[70%] md:h-[50%] lg:h-[500px] flex justify-center items-center  md:rounded-lg'>
                                {/* <div className='flex justify-center items-center h-full md:rounded-lg'> */}
                                <img
                                    src={image}
                                    alt={name}
                                    className='w-full max-w-[600px] h-full lg:h-[80%] object-cover  xl:transform xl:transition-transform duration-300 xl:hover:scale-110 md:rounded-lg'
                                />
                                {/* </div> */}
                            </div>

                            {/* Product Details */}
                            <div className='  px-4 flex sm:px-10   flex-col justify-center gap-2 '>
                                <div className='lg:flex  lg:flex-col lg:justify-between lg:h-[40%]'>
                                    <div className=''>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-xl xl:text-2xl font-semibold tracking-wider'>
                                                {product?.name.toUpperCase()}
                                            </p>
                                            <p className='text-lg font-italiana tracking-widest font-semibold  text-gray-600'>
                                                {product?.description}
                                            </p>
                                        </div>

                                        <div className='flex items-center '>
                                            <span className='text-3xl font-bold text-primary mr-4'>${price}</span>
                                        </div>
                                    </div>

                                    <div className='hidden md:flex'>
                                        {
                                            items.some((item) => item.id === product.id) ? (
                                                <button onClick={() => handleRemovefromCartBtn(product?.id)} className='bg-black text-white z-20 cursor-pointer rounded-md py-2 px-3 text-sm md:text-sm transform transition-transform duration-300 hover:scale-105'>
                                                    REMOVE FROM CART
                                                </button>
                                            ) : (
                                                <button onClick={() => handleAddtoCartBtn(product)} className='bg-black text-white z-20 cursor-pointer rounded-md py-2 px-3 text-sm md:text-sm transform transition-transform duration-300 hover:scale-105'>
                                                    ADD TO CART
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className=' md:hidden w-full'>
                            {
                                items.some((item) => item.id === product.id) ? (
                                    <button onClick={() => handleRemovefromCartBtn(product?.id)} className='bg-black text-white z-20 cursor-pointer rounded-md w-full  py-3 text-center text-xl md:text-sm transform transition-transform duration-300 hover:scale-105'>
                                        REMOVE FROM CART
                                    </button>
                                ) : (
                                    <button onClick={() => handleAddtoCartBtn(product)} className='bg-black text-white z-20 cursor-pointer rounded-md w-full  py-3 text-center text-xl md:text-sm transform transition-transform duration-300 hover:scale-105'>
                                        ADD TO CART
                                    </button>
                                )
                            }
                        </div>
                    </div >
                )
            }
        </>



    );
};

export default ProductDescription;
