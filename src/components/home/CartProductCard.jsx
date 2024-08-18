import React from 'react'
import { AddIcon, CloseBtn, DeleteIcon, MinusIcon } from '../../assets/AppIcons';
import { decreaseQty, increaseQty } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartProductCard = ({ product }) => {
    const { id, name, price, image, quantity, totalPrice } = product;
    const dispatch = useDispatch();

    return (
        <>
            <div className='font-tenor h-52 xl:h-[300px]   shadow-md flex justify-start items-center gap-3'>
                <div className='w-[150px] h-52 xl:w-[250px] xl:h-[300px]'>
                    <img src={image} alt="img" className='h-full w-[150px] xl:w-full object-cover' />
                </div>

                <div className='h-[95%] xl:h-[90%] flex-1  xl:p-2 flex flex-col justify-between gap-5'>
                    <div className='flex justify-between'>
                        <p className='text-lg xl:text-2xl'>{name.toUpperCase()}</p>
                        <div className='w-5 h-5 mt-1 mr-1 md:w-7 md:h-7 cursor-pointer hover:opacity-100  bg-gray rounded-full opacity-30'><CloseBtn /></div>
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

                    <div>
                        <div className='text-base md:text-2xl text-green  font-medium xl:font-semibold'>
                            Price: ${price}
                        </div>
                        <div className='text-base md:text-2xl text-primary'>
                            Subtotal: <span className='text-primary font-medium xl:font-semibold'>${totalPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProductCard