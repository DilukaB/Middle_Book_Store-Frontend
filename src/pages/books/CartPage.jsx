import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import { clearCart, removeFromCart } from "../../redux/features/cart/cartSlice";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalPrice = cartItems
        .reduce((acc, item) => acc + item.newPrice, 0)
        .toFixed(2);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="bg-gradient-to-r from-gray-100 via-white to-gray-200 min-h-screen py-16 px-6">
            <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
                {/* Header */}
                <div className="px-8 py-6 bg-gradient-to-r from-indigo-900 to-purple-700 text-white shadow-md">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-extrabold tracking-wide">
                            Your Shopping Cart
                        </h1>
                        <button
                            onClick={handleClearCart}
                            className="bg-red-500 px-5 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-transform transform hover:scale-105"
                        >
                            Clear Cart
                        </button>
                    </div>
                    <p className="text-sm text-gray-300 mt-2">
                        Review your selected items below and proceed to checkout.
                    </p>
                </div>

                {/* Cart Items */}
                <div className="px-8 py-10">
                    {cartItems.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {cartItems.map((product) => (
                                <li
                                    key={product._id}
                                    className="flex items-center py-6 gap-6 bg-white hover:shadow-lg rounded-lg px-4 transition-shadow duration-300"
                                >
                                    <img
                                        src={getImgUrl(product.coverImage)}
                                        alt={product.title}
                                        className="w-28 h-28 object-cover rounded-xl shadow-md"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold text-gray-800">
                                            <Link
                                                to={`/product/${product._id}`}
                                                className="hover:underline hover:text-indigo-600"
                                            >
                                                {product.title}
                                            </Link>
                                        </h3>
                                        <p className="text-gray-500 mt-2">
                                            <strong>Category:</strong> {product.category}
                                        </p>
                                        <p className="text-lg font-medium text-gray-800 mt-4">
                                            ${product.newPrice}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <p className="text-gray-500">
                                            <strong>Qty:</strong> 1
                                        </p>
                                        <button
                                            onClick={() => handleRemoveFromCart(product)}
                                            className="mt-4 bg-white-500 text-black px-4 py-2 rounded-lg text-sm  transition-all"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-500 text-lg mt-12">
                            Your cart is empty. Start shopping to add items to your cart!
                        </p>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                    <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
                        <p>Subtotal</p>
                        <p className="text-2xl">${totalPrice || 0}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                        Shipping and taxes will be calculated at checkout.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <Link
                            to="/checkout"
                            className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-4 rounded-lg font-medium shadow-md hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg transition-all"
                        >
                            Proceed to Checkout
                        </Link>
                        <Link
                            to="/"
                            className="flex-1 bg-gray-200 text-gray-800 text-center py-4 rounded-lg font-medium hover:bg-gray-300 hover:shadow transition-all"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
