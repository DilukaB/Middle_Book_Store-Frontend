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
                setTimeout(() => {
                    setOrderPlaced(true);
                }, 1000);
            } else {
                setOrderPlaced(false);
            }
        } catch (error) {
            console.error("Error placing an order", error);
            alert("Failed to place an order");
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-r from-purple-50 via-pink-100 to-blue-50 flex items-center justify-center p-6">
            <div className="container max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">Checkout - Cash On Delivery</h2>
                    <p className="text-gray-700 text-lg mb-2">Total Price: <span className="font-semibold text-green-600">${totalPrice}</span></p>
                    <p className="text-gray-700 text-lg mb-6">Items: <span className="font-semibold">{cartItems.length > 0 ? cartItems.length : 0}</span></p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-600 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all"
                                    placeholder="John Doe"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-600 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-100 focus:outline-none"
                                    disabled
                                    defaultValue={currentUser?.email}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-gray-600 font-medium">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all"
                                placeholder="+123 456 7890"
                                {...register("phone", { required: "Phone number is required" })}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="city" className="block text-gray-600 font-medium">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all"
                                    placeholder="New York"
                                    {...register("city", { required: "City is required" })}
                                />
                                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-gray-600 font-medium">Country / Region</label>
                                <input
                                    type="text"
                                    id="country"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all"
                                    placeholder="United States"
                                    {...register("country", { required: "Country is required" })}
                                />
                                {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="form-checkbox text-indigo-600 focus:ring-2 focus:ring-indigo-600"
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            <label htmlFor="terms" className="text-gray-700">
                                I agree to the <Link to="/terms" className="text-indigo-600 underline">Terms & Conditions</Link>.
                            </label>
                        </div>

                        <div className="text-right">
                            <button
                                type="submit"
                                disabled={!isChecked}
                                className={`py-3 px-6 rounded-lg text-white font-bold ${!isChecked ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                            >
                                Place Order
                            </button>
                        </div>
                    </form>

                    {orderPlaced && (
                        <div className="mt-6 p-4 bg-green-100 rounded-lg text-green-700 flex items-center">
                            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Order Placed Successfully! Thank you for your purchase.</span>
                        </div>
                    )}

                    {!orderPlaced && cartItems.length === 0 && (
                        <div className="mt-6 p-4 bg-red-100 rounded-lg text-red-700 flex items-center">
                            <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-6.364 6.364M6 6l6 6" />
                            </svg>
                            <span>Your cart is empty. Add items to proceed with the order.</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
