import React, { useContext, useEffect, useState } from 'react';
import SummaryApi from '../common';
import Context from '../context';
import displayINRCurrency from '../helpers/displayCurrency';
import { MdDelete } from "react-icons/md";
import { loadStripe } from '@stripe/stripe-js';
import {toast} from "react-toastify";

const Cart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const context = useContext(Context);
    const loadingCart = new Array(4).fill(null);
    const [cartProductCount,setCartProductCount] = useState(0)

    // Address State
    const [address, setAddress] = useState({
        fullName: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: ''
    });
    const [errors, setErrors] = useState({});

    const fetchUserAddToCart = async()=>{
        const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
            method : SummaryApi.addToCartProductCount.method,
            credentials : 'include'
        })

        const dataApi = await dataResponse.json()

        setCartProductCount(dataApi?.data?.count)
    }
    const fetchData = async () => {
        try {
            const response = await fetch(SummaryApi.addToCartProductView.url, {
                method: SummaryApi.addToCartProductView.method,
                credentials: 'include',
                headers: {
                    "content-type": 'application/json'
                },
            });
            const responseData = await response.json();
            if (responseData.success) {
                setData(responseData.data);
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchData().finally(() => setLoading(false));
    }, []);

    const updateCartQuantity = async (id, qty) => {
        try {
            const response = await fetch(SummaryApi.updateCartProduct.url, {
                method: SummaryApi.updateCartProduct.method,
                credentials: 'include',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify({ _id: id, quantity: qty })
            });
            const responseData = await response.json();
            if (responseData.success) fetchData();
        } catch (error) {
            console.error("Error updating cart quantity:", error);
        }
    };

    const deleteCartProduct = async (id) => {
        try {
            const response = await fetch(SummaryApi.deleteCartProduct.url, {
                method: SummaryApi.deleteCartProduct.method,
                credentials: 'include',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify({ _id: id })
            });
            const responseData = await response.json();
            if (responseData.success) {
                fetchData();
                context.fetchUserAddToCart();
            }
        } catch (error) {
            console.error("Error deleting cart product:", error);
        }
    };

    const handlePayment = async () => {
        const { fullName, phone, address: addr, city, state, pincode } = address;

        // Validation using toast errors
        if (!fullName || !phone || !addr || !city || !state || !pincode) {
            toast.error("Please fill in all address fields!");
            return;
        }

        if (phone.length !== 10 || isNaN(phone)) {
            toast.error("Please enter a valid 10-digit phone number!");
            return;
        }

        if (pincode.length !== 6 || isNaN(pincode)) {
            toast.error("Please enter a valid 6-digit pincode!");
            return;
        }

        const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

        try {
            const response = await fetch(SummaryApi.payment.url, {
                method: SummaryApi.payment.method,
                credentials: 'include',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify({ cartItems: data, address }) // Send address too if needed
            });

            const responseData = await response.json();
            if (responseData?.id) {
                const stripe = await stripePromise;
                stripe.redirectToCheckout({ sessionId: responseData.id });

                // After successful checkout, clear the cart in frontend
                setData([]); // Clear the cart items from frontend state
                context.fetchUserAddToCart(); // Reset the cart in global context

                // Clear the cart in the backend
                await fetch(SummaryApi.clearCart.url, {
                    method: SummaryApi.clearCart.method,
                    credentials: 'include',
                    headers: {
                        "content-type": 'application/json'
                    }})
                // Optionally, notify the user
                toast.success("Payment successful! Your order is being processed.");
            }
        } catch (error) {
            console.error("Error processing payment:", error);
        }
    };


    useEffect(()=>{
        /**user Details */
        fetchUserAddToCart()
        /**user Details cart product */


    },[])
    const totalQty = data.reduce((prev, curr) => prev + curr.quantity, 0);
    const totalPrice = data.reduce((prev, curr) => prev + (curr.quantity * curr?.productId?.sellingPrice), 0);

    return (
        <div className='container mx-auto'>
            <div className='text-center text-lg my-3'>
                {data.length === 0 && !loading && <p className='bg-white py-5'>No Data</p>}
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
                <div className='w-full max-w-3xl'>
                    {loading ? (
                        loadingCart.map((_, index) => (
                            <div key={index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'></div>
                        ))
                    ) : (
                        data.map((product) => (
                            <div key={product._id} className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'>
                                <div className='w-32 h-32 bg-slate-200'>
                                    <img src={product?.productId?.productImage[0]} className='w-full h-full object-scale-down mix-blend-multiply' alt='product' />
                                </div>
                                <div className='px-4 py-2 relative'>
                                    <div className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer' onClick={() => deleteCartProduct(product._id)}>
                                        <MdDelete />
                                    </div>
                                    <h2 className='text-lg lg:text-xl'>{product?.productId?.productName}</h2>
                                    <p className='capitalize text-slate-500'>{product?.productId?.category}</p>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.productId?.sellingPrice)}</p>
                                        <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.productId?.sellingPrice * product?.quantity)}</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-1'>
                                        <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded' onClick={() => updateCartQuantity(product._id, product.quantity - 1)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded' onClick={() => updateCartQuantity(product._id, product.quantity + 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Right Summary & Address */}
                {data.length > 0 && (
                    <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                        {/* Address Section */}
                        <div className='bg-white rounded-md overflow-hidden'>
                            <h2 className='text-white bg-red-600 px-4 py-2'>Shipping Address</h2>
                            <div className='px-4 py-2 space-y-2'>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                                    value={address.fullName}
                                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                                    value={address.phone}
                                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                                />
                                <textarea
                                    placeholder="Address"
                                    rows="2"
                                    className="w-full border border-gray-300 px-2 py-1 rounded text-sm resize-none"
                                    value={address.address}
                                    onChange={(e) => setAddress({ ...address, address: e.target.value })}
                                />
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="w-1/2 border border-gray-300 px-2 py-1 rounded text-sm"
                                        value={address.city}
                                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder="State"
                                        className="w-1/2 border border-gray-300 px-2 py-1 rounded text-sm"
                                        value={address.state}
                                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Pincode"
                                    className="w-full border border-gray-300 px-2 py-1 rounded text-sm"
                                    value={address.pincode}
                                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Summary Section */}
                        <div className='bg-white mt-4'>
                            <h2 className='text-white bg-red-600 px-4 py-1'>Summary</h2>
                            <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                <p>Quantity</p>
                                <p>{totalQty}</p>
                            </div>
                            <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                <p>Total Price</p>
                                <p>{displayINRCurrency(totalPrice)}</p>
                            </div>
                            <button className='bg-blue-600 p-2 text-white w-full mt-2' onClick={handlePayment}>
                                Payment
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
