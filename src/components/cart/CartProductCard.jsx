import React from 'react'
import { AddIcon, CloseBtn, DeleteIcon, MinusIcon } from '../../assets/AppIcons';
import { decreaseQty, increaseQty, removeItem } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const CartProductCard = ({ product }) => {
    const { id, name, price, image, quantity, totalPrice } = product;
    const dispatch = useDispatch();

    return (
        <>
            {/* card for displaying the cart item */}
            <div className='font-tenor h-52 xl:h-[300px]   shadow-md flex justify-start items-center gap-3'>
                {/* item image */}
                <div className='w-[150px] h-52 xl:w-[250px] xl:h-[300px]'>
                    <img src={image} alt="img" className='h-full w-[150px] xl:w-full object-cover' />
                </div>

                {/* item qty and handler */}
                <div className='h-[90%] xl:h-[90%] flex-1  xl:p-2 flex flex-col justify-between gap-5'>
                    <div className='flex justify-between'>
                        <p className='text-lg xl:text-2xl'>{name.toUpperCase()}</p>
                    </div>
                    <div className='flex items-center justify-start gap-5'>
                        <div className='w-6 h-6 md:w-8 md:h-8 md:p-2 cursor-pointer rounded-full hover:bg-gray  border-gray border text-black  ' onClick={() => dispatch(decreaseQty(id))}>
                            <MinusIcon />
                        </div>
                        <div className='text-2xl'>
                            {quantity}
                        </div>
                        <div className='w-6 h-6 md:w-8 md:h-8 md:p-2 cursor-pointer rounded-full hover:bg-gray   border-gray border text-black ' onClick={() => dispatch(increaseQty(id))}>
                            <AddIcon />
                        </div>
                    </div>

                    {/* item price and subtotal */}
                    <div className='flex justify-between items-center'>
                        <div>
                            <div className='text-base md:text-2xl text-green  font-medium xl:font-semibold'>
                                Price: ${price}
                            </div>
                            <div className='text-base md:text-2xl text-primary'>
                                Subtotal: <span className='text-primary font-medium xl:font-semibold'>${totalPrice}</span>
                            </div>
                        </div>
                        <div className='w-6 h-6 text-black mr-5' onClick={() => { dispatch(removeItem(id)); toast.success('Item deleted successfully!') }}>
                            <DeleteIcon />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CartProductCard