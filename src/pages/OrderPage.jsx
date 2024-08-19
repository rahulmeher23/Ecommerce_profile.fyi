import React, { useEffect, useState } from 'react';
import { Tick, CloseBtn, Coupon } from '../assets/AppIcons';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const OrderPage = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     // Show the modal after 1.5 seconds
    //     const timer = setTimeout(() => {
    //         setModalVisible(true);
    //     }, 1500);


    // Cleanup the timer if the component is unmounted
    //     return () => clearTimeout(timer);
    // }, []);

    const closeModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            setModalVisible(true)
        }, [1000])
    }, [])

    useEffect(() => {
        toast.success("Payment Successful!")
    }, [])

    const paymentId = Math.floor(100000 + Math.random() * 900000);

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
                    </div>
                ) : (
                    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">

                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                                Thank you for shopping with us!
                            </h1>

                            <button className='text-black border border-black hover:bg-black  hover:text-white px-3 py-2 text-semibold text-2xl'>
                                <Link to="/products">
                                    Back to Home
                                </Link>
                            </button>
                        </div>


                        {isModalVisible && (
                            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                                <div className="bg-white rounded-lg shadow-lg p-6  w-[90%]  md:w-[400px] relative flex flex-col items-center justify-center gap-5">
                                    <button
                                        className="absolute top-4 right-4 z-20 text-black w-8 h-8 hover:bg-gray hover:opacity-50  p-1 rounded-full "
                                        onClick={closeModal}
                                    >
                                        <CloseBtn />
                                    </button>
                                    <h2 className="text-center text-xl font-bold mb-4 text-black">PAYMENT SUCCESSFUL</h2>
                                    <div className="flex justify-center items-center m-auto">
                                        <span className=" text-primary w-16 h-16 m-auto"><Tick /></span>
                                    </div>
                                    <p className="text-center text-lg w-[80%] flex items-center justify-center">Your payment was successful. The order will be delivered within 3-4 buisness days.</p>
                                    <div className='text-center text-lg'>HAPPY SHOPPING!</div>
                                    <p className="text-center  text-gray-500 mb-6 text-medium text-lg">ORDER ID:  {paymentId}</p>
                                    <div className="flex justify-between">
                                        <Link to="/products">
                                            <button
                                                className="bg-black text-white py-2 px-8  z-20"
                                                onClick={closeModal}
                                            >
                                                Shop More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )
            }
        </>
    );
};

export default OrderPage;
