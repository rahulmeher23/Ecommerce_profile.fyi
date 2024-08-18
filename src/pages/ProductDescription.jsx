import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsDB } from '../database/productsDB';
import { useDispatch, useSelector, useStore } from 'react-redux';

const ProductDescription = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    console.log(id);
    const { products, loading } = useSelector(state => state.products)
    const product = products.find((prod) => prod.id === id);
    const store = useStore();
    const rehydrated = store.getState()._persist.rehydrated;

    useEffect(() => {
        // If products are not loaded and rehydration is complete, fetch them
        if (rehydrated && products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length, rehydrated]);

    if (!rehydrated) {
        return <div>Loading...</div>;
    }

    // Display loading state while fetching
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const { name, image, price, description } = product;

    return (
        <div className='font-tenor flex flex-col justify-between flex-1 h-full md:p-10'>
            <div className='h-[85%] md:h-full xl:h-[50%] flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-10'>
                {/* Product Image */}
                <div className='h-[80%] md:h-[500px] '>
                    <div className='flex justify-center items-center h-full md:rounded-lg'>
                        <img
                            src={image}
                            alt={name}
                            className='w-full  max-w-[600px] h-full md:h-[80%] object-cover  xl:transform xl:transition-transform duration-300 xl:hover:scale-110 md:rounded-lg'
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className='px-4 flex flex-col justify-center gap-2 '>
                    <div className='md:flex  md:flex-col md:justify-between md:h-[40%]'>
                        <div className=''>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xl md:text-2xl font-semibold tracking-wider'>
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
                            <button className='bg-primary text-white py-2 px-6 text-lg '>
                                ADD TO CART
                            </button>
                        </div>
                    </div>


                </div>
            </div>


            <button className='md:hidden bg-black text-white py-2 px-6 text-lg '>
                ADD TO CART
            </button>
        </div>
    );
};

export default ProductDescription;
