import React, { useEffect } from 'react'
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import { Star, Underline } from '../assets/AppIcons';
import CartProductCard from '../components/home/CartProductCard';

const Cart = () => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [paymentId, setPaymentId] = useState('');
    const dispatch = useDispatch();
    const { items, totalQuantity, totalCost } = useSelector(state => state.cart)

    const handleCloseModal = () => {
        setShowModal(false);
        toast.success('Clicked')
    };

    const shipping = 150;
    const tax = 150;
    const total = 150;

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
            <div className='font-tenor p-5 xl:p-10'>
                <div className="flex flex-col w-full item-center justify-center mt-5 ">
                    <p className="text-center text-2xl md:text-3xl tracking-wider">CHECKOUT</p>
                    <div className="flex justify-center items-center  h-10">
                        <div className="w-1/2 h-10 md:w-1/4 xl:w-[125px] ">
                            <Underline />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 2xl:grid-cols-4 gap-5 xl:gap-10 '>
                    {/* Cart Items */}
                    <div className='2xl:col-span-3 flex flex-col  gap-3 md:gap-8'>
                        {
                            items.map((prod) => {
                                return (
                                    <CartProductCard product={prod} key={prod.id} />
                                )
                            })
                        }
                    </div>

                    {/* order summary */}
                    <div className='col-span-1 '>
                        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
                            <div className='text-lg font-medium md:font-semibold md:text-2xl text-center'>
                                SUMMARY
                                <div className='w-2/4 h-10 m-auto'>
                                    <Underline />
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {items.map((item) => (
                                    <li key={item.id} className="flex justify-between">
                                        <span>{item.name} x {item.quantity}</span>
                                        <span>${item.price * item.quantity}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 border-t pt-6 space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${totalCost.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>${tax?.toFixed(2) || 50}</span>
                                </div>
                                <div className="flex justify-between font-bold text-lg mt-2">
                                    <span>Total</span>
                                    <span>${total?.toFixed(2) || 1500}</span>
                                </div>
                            </div>
                            <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg text-lg" onClick={placeOrder}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>

                </div>

                {/* <SuccessModal paymentId="2314324" handleCloseModal={handleCloseModal} /> */}



            </div>
        </>
    )
}

export default Cart