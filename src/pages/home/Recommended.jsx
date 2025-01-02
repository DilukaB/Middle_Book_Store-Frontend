import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "../books/BookCard";

const Recommended = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("books.json")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div className="p-12 bg-gradient-to-r from-gray-50 via-white to-gray-100 rounded-2xl shadow-xl">
            {/* Header */}
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
                    Books to Suit Your Taste
                </span>
            </h2>

            {/* Swiper */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 3, spaceBetween: 50 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {books.length > 0 &&
                    books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <div className="border border-gray-200 rounded-xl bg-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6">
                                <BookCard book={book} />
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default Recommended;
