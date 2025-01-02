import React from 'react';
import book_banner from '../../assets/book_banner.jpg';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between py-20 px-12 bg-gradient-to-r from-pink-100 via-white to-blue-100 shadow-xl overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/3 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-white to-pink-50 opacity-50 blur-2xl rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative md:w-1/2 w-full text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight mb-8">
                    Discover Your Next Favorite Book
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
                    Immerse yourself in a curated selection of literary gems, from timeless classics to modern masterpieces.
                </p>
                <Link to={"/Ts"}> <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-blue-500 hover:shadow-2xl transform hover:scale-105 transition duration-300">
                    Get Started
                </button></Link>
            </div>

            {/* Banner Image */}
            <div className="relative md:w-1/3 w-full flex items-center justify-center">
                <img
                    src={book_banner}
                    alt="Book Banner"
                    className="rounded-3xl shadow-2xl border-4 border-white transform hover:scale-105 hover:rotate-1 transition duration-300"
                />
            </div>
        </div>
    );
}

export default Banner 