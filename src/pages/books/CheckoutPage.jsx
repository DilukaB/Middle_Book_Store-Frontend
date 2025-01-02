import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    const { currentUser } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [isChecked, setIsChecked] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const onSubmit = async data => {
        const newOrder = {
            name: data.name,
            email: currentUser?.email,
            address: {
                city: data.city,
                country: data.country,
                state: data.state,
                zipcode: data.zipcode
            },
            phone: data.phone,
            productIds: cartItems.map(item => item?._id),
            totalPrice: totalPrice,
        };

        try {
            if (cartItems.length > 0) {
                // Simulate API call for order placement
                setTimeout(() => {
                    setOrderPlaced(true); // Show success message
                }, 1000); // Simulating delay
            } else {
                setOrderPlaced(false); // Show failure message
            }
        } catch (error) {
            console.error("Error placing an order", error);
            alert("Failed to place an order");
        }
    };

    return (
        <section>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Checkout - Cash On Delivery</h2>
                        <p className="text-gray-600 mb-6">Total Price: ${totalPrice}</p>
                        <p className="text-gray-600 mb-8">Items: {cartItems.length > 0 ? cartItems.length : 0}</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="John Doe"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        disabled
                                        defaultValue={currentUser?.email}
                                        placeholder="email@domain.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="+123 456 7890"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="address" className="block text-gray-700 font-medium">Address / Street</label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="123 Main St"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="block text-gray-700 font-medium">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="New York"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="country" className="block text-gray-700 font-medium">Country / Region</label>
                                        <input
                                            type="text"
                                            name="country"
                                            id="country"
                                            className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="United States"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block text-gray-700 font-medium">State / Province</label>
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="New York"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="zipcode" className="block text-gray-700 font-medium">Zipcode</label>
                                    <input
                                        type="text"
                                        name="zipcode"
                                        id="zipcode"
                                        className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="10001"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="billing_same"
                                        id="billing_same"
                                        className="form-checkbox text-blue-600 focus:ring-2 focus:ring-blue-500"
                                        onChange={() => setIsChecked(!isChecked)}
                                    />
                                    <label htmlFor="billing_same" className="text-gray-700">
                                        I agree to the{' '}
                                        <Link to="/terms" className="text-blue-600 underline">Terms & Conditions</Link> and{' '}
                                        <Link to="/policy" className="text-blue-600 underline">Shopping Policy</Link>.
                                    </label>
                                </div>

                                <div className="text-right">
                                    <button
                                        disabled={!isChecked}
                                        className={`${!isChecked ? 'opacity-50 cursor-not-allowed' : ''
                                            } bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg`}
                                    >
                                        Place an Order
                                    </button>
                                </div>
                            </div>
                        </form>

                        {cartItems.length > 0 ? (
                            orderPlaced && (
                                <div className="mt-6 p-6 bg-green-100 rounded-lg shadow-md">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-green-800">Order Placed Successfully!</p>
                                            <p className="text-gray-600">Thank you for your purchase. You will receive a confirmation email shortly.</p>
                                            <Link to="/" className="mt-4 inline-block text-blue-600 underline">Back to Home</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        ) : (
                            <div className="mt-6 p-6 bg-red-100 rounded-lg shadow-md">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12h-6m-4 0h-6m4 0a2 2 0 100 4h2a2 2 0 100-4m6-6h-6m-4 0h-6m4 0a2 2 0 100 4h2a2 2 0 100-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-medium text-red-800">Order Failed!</p>
                                        <p className="text-gray-600">Your cart is empty. Please add items to your cart to proceed with the order.</p>
                                        <Link to="/" className="mt-4 inline-block text-blue-600 underline">Back to Home</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
