import React from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/slices/cartSlice';

const ProductCard = (product) => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);

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
        if (id) {
            dispatch(removeItem(id));
            toast.success('Item Removed from Cart!');
        } else {
            toast.error('Failed to Remove from Cart!');
        }
    };

    return (
        <div className='product-wrapper relative flex flex-col font-tenor  md:w-[320px] lg:w-[320px] xl:w-[400px] min-h-[670px] gap-3 bg-white shadow-lg rounded-lg md:transform md:transition-transform duration-300 md:hover:scale-105 md:hover:shadow-2xl'>
            {/* product Image */}
            <div className='overflow-hidden  cursor-pointer z-10 rounded-t-lg'>
                <Link to={`/product/${product.id}`} key={product?.id}>
                    <img
                        src={product?.image}
                        alt={product?.name}
                        className='w-full h-[450px] object-cover transform transition-transform duration-500 hover:scale-110'
                    />
                </Link>
            </div>

            {/* product details */}
            <div className='flex flex-col gap-2 p-4'>
                <p className='text-2xl font-semibold tracking-wider'>
                    {product?.name?.toUpperCase()}
                </p>
                <p className='text-base md:text-xl font-italiana tracking-widest font-semibold h-16 md:h-24 text-gray-600'>
                    {product?.description}
                </p>
            </div>

            <div className='flex justify-between items-center px-4 pb-4'>
                {/* product price  */}
                <div className='font-semibold tracking-widest text-3xl text-primary'>
                    ${product?.price}
                </div>
                {/* Add or remove button depending on cart state */}
                <div className='flex items-center justify-center'>
                    {
                        items.some((item) => item.id === product.id) ? (
                            <button onClick={() => handleRemovefromCartBtn(product?.id)} className='bg-red text-white z-10 cursor-pointer rounded-md py-2 px-3 text-sm md:text-sm transform transition-transform duration-300 hover:scale-105'>
                                REMOVE
                            </button>
                        ) : (
                            <button onClick={() => handleAddtoCartBtn(product)} className='bg-green text-white z-10 cursor-pointer rounded-md py-2 px-3 text-sm md:text-sm transform transition-transform duration-300 hover:scale-105'>
                                ADD TO CART
                            </button>
                        )
                    }
                </div>
            </div>
            <div className='absolute inset-0 bg-white opacity-0 transition-opacity duration-500 hover:opacity-10 rounded-lg'></div>
        </div>
    );
};

export default ProductCard;
