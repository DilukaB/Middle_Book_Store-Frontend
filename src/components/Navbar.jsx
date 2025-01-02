import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch, IoBookSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import avatar_icon from "../assets/avatar.jpg";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const books = [
    "Thinking, Fast and Slow",
    "The Great Gatsby",
    "1984",
    "Animal Farm",
    "The Odyssey",
    "The Adventures of Huckleberry Finn",
];

const searchBooks = (query) => {
    return books.filter((book) =>
        book.toLowerCase().startsWith(query.toLowerCase())
    );
};

const navigationItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Cart Page", href: "/cart" },
    { name: "CheckOut", href: "/checkout" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Us", href: "/about" },
];

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [isDropdownOpen, setIsDropdown] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);
    const { currentUser, logout } = useAuth();

    useEffect(() => {
        if (searchQuery) {
            setFilteredBooks(searchBooks(searchQuery));
        } else {
            setFilteredBooks([]);
        }
    }, [searchQuery]);

    useEffect(() => {
        let timer;
        if (isDropdownOpen && !isHovered) {
            timer = setTimeout(() => {
                setIsDropdown(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [isDropdownOpen, isHovered]);

    const handleLogOut = () => {
        logout();
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="flex items-center justify-between px-6 py-4">
                {/* Left-side */}
                <div className="flex items-center space-x-4">
                    <Link to="/" className="text-gray-800 text-3xl">
                        <IoBookSharp className="transition-transform duration-300 hover:scale-125 hover:text-blue-500" />
                    </Link>

                    {/* Search Bar */}
                    <div className="relative w-64">
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-sm">
                            <IoSearch className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Search for books"
                                className="flex-1 bg-transparent outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                        {searchQuery && (
                            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                                {filteredBooks.length > 0 ? (
                                    filteredBooks.map((book, index) => (
                                        <div
                                            key={index}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {book}
                                        </div>
                                    ))
                                ) : (
                                    <p className="p-4 text-gray-500 text-sm">
                                        No books found for "{searchQuery}"
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right-side */}
                <div className="flex items-center space-x-6">
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            setIsDropdown(true);
                            setIsHovered(true);
                        }}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {currentUser ? (
                            <>
                                <button
                                    onClick={() => setIsDropdown(!isDropdownOpen)}
                                    className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    <img
                                        src={avatar_icon}
                                        alt="User avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                                {isDropdownOpen && (
                                    <div
                                        className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40"
                                    >
                                        <ul className="py-2">
                                            {navigationItems.map((item) => (
                                                <li key={item.name} className="hover:bg-gray-100">
                                                    <Link
                                                        to={item.href}
                                                        className="block px-4 py-2 text-gray-800 transition-colors duration-200 hover:text-blue-500"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <button
                                                    onClick={handleLogOut}
                                                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-red-500"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to="/login" className="text-gray-800 text-xl">
                                <FaUserAlt className="transition-transform duration-300 hover:scale-110 hover:text-blue-500" />
                            </Link>
                        )}
                    </div>

                    <Link to="/Fs">
                        <button className="text-red-500 text-xl">
                            <BsFillHeartFill className="transition-transform duration-300 hover:scale-110" />
                        </button>
                    </Link>

                    <Link to="/cart" className="relative">
                        <FaCartShopping className="text-gray-800 text-xl transition-transform duration-300 hover:scale-110 hover:text-green-500" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar; 