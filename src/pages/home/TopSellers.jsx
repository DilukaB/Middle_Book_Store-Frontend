import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

const TopSellers = () => {
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    useEffect(() => {
        fetch("books.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    const filteredBooks =
        selectedCategory === "Choose a genre"
            ? books
            : books.filter((book) => book.category === selectedCategory.toLowerCase());

    return (
        <div className="p-10 bg-gradient-to-r from-indigo-50 via-white to-indigo-100 rounded-xl shadow-3xl">
            {/* Header */}
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                    Top Sellers
                </span>
            </h2>

            {/* Category Selector */}
            <div className="flex justify-center mb-6">
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 bg-gradient-to-r from-gray-100 to-gray-50  px-5 py-4 text-gray-800 text-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-200"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Swiper */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <div className="border border-gray-200 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 p-6">
                                <BookCard book={book} />
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-center text-gray-500 text-lg">
                        No books available in this category.
                    </p>
                )}
            </Swiper>
        </div>
    );
};

export default TopSellers; 