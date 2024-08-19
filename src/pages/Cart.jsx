import React, { useEffect } from 'react'
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import { Coupon, Star, Underline } from '../assets/AppIcons';
import CartProductCard from '../components/cart/CartProductCard';

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [paymentId, setPaymentId] = useState('');
    const dispatch = useDispatch();
    const { items, totalQuantity, totalCost } = useSelector(state => state.cart)

    //func for placing the order
    const placeOrder = () => {
        setShowModal(true);
        setLoading(true);
        // On ordering to Simulate a 2-second delay
        setTimeout(() => {
            setLoading(false);
            setPaymentId('15263541');
            setShowModal(false);
        }, 2000);
    };

    useEffect(() => {
        placeOrder();
    }, [])

    return (
        <>
            {   //if cart is empty, show empty msg
                items.length == 0 ? (
                    <div className="font flex flex-col items-center justify-center h-[80vh] flex-1 w-full font-tenor gap-5">
                        <h1 className=" text-3xl">Cart is Empty!</h1>
                        <Link to="/products">
                            <button
                                onClick={() => {
                                    filterDispatch({ type: "CATEGORY", payload: "All" });
                                }}
                                className="px-5 py-2 border-2 boreder-black text-black hover:bg-black hover:text-white"
                            >
                                SHOP NOW!
                            </button>
                        </Link>
                    </div>
                ) : ( // else show cart items
                    <div className='font-tenor flex flex-col  p-5 xl:p-10'>
                        <div className="flex flex-col w-full item-center justify-center mt-5 ">
                            <p className="text-center text-2xl md:text-3xl tracking-wider">CHECKOUT</p>
                            <div className="flex justify-center items-center  h-10">
                                <div className="w-1/2 h-10 md:w-1/4 xl:w-[125px] ">
                                    <Underline />
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-4 gap-5 xl:gap-10 '>
                            {/* Cart Items/prodcut card */}
                            <div className='md:col-span-3 lg:col-span-4 xl:col-span-3 flex flex-col  gap-3 md:gap-10'>
                                <div className=' flex flex-col gap-3 md:gap-10'>
                                    {
                                        items.map((prod) => {
                                            return (
                                                <CartProductCard product={prod} key={prod.id} />
                                            )
                                        })
                                    }
                                </div>
                                <div className='bg-red text-center  text-white text-base md:text-xl font-medium p-2  md:w-[150px] self-end' onClick={() => dispatch(clearCart())}>DELETE ALL</div>

                            </div>

                            {/* order summary */}
                            <div className='md:col-span-2 lg:col-span-2 xl:col-span-1 '>
                                <div className="bg-white border border-black p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
                                    <div className='text-lg font-medium md:font-semibold md:text-2xl text-center'>
                                        SUMMARY
                                        <div className='w-2/4 h-10 m-auto'>
                                            <Underline />
                                        </div>
                                    </div>
                                    <ul className="space-y-4">
                                        {items.map((item) => (
                                            <li key={item.id} className="flex justify-between">
                                                <span className='text-lg'>{item.name} x {item.quantity}</span>
                                                <span className='text-lg'>${item.price * item.quantity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 border-t pt-6 space-y-2">
                                        <div className="flex justify-between font-bold text-lg mt-2">
                                            <span className='text-lg text-primary'>EST. TOTAL</span>
                                            <span className='text-lg text-primary'>${totalCost}</span>
                                        </div>
                                    </div>
                                    <Link to="/payment-successful">
                                        <button className="mt-6 w-full bg-black text-white py-3 rounded-lg text-lg" onClick={() => {
                                            dispatch(clearCart());
                                            placeOrder()
                                        }}>
                                            ORDER
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>

                )
            }





        </>
    )
}

export default Cart