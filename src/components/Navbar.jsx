import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch, IoBookSharp } from "react-icons/io5";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

const books = [
    "Thinking, Fast and Slow",               // T
    "The Great Gatsby",                     // T
    "Influence: The Psychology of Persuasion", // I
    "1984",                                 // 1
    "Sapiens: A Brief History of Humankind", // S
    "The Shining",                          // T
    "Dracula",                              // D
    "Moby-Dick",                            // M
    "The Adventures of Huckleberry Finn",   // T
    "Pride and Prejudice",                  // P
    "The Art of War",                       // T
    "The Call of Cthulhu",                  // T
    "The Road",                             // T
    "Journey to the Center of the Earth",   // J
    "The Count of Monte Cristo",            // T
    "Treasure Island",                      // T
    "Frankenstein",                         // F
    "The Wealthy Gardener",                 // T
    "The Odyssey",                          // T
    "The Power of Habit",                   // T
    "Anna Karenina",                        // A
    "Brave New World",                      // B
    "Crime and Punishment",                 // C
    "East of Eden",                         // E
    "Gone with the Wind",                   // G
    "Heart of Darkness",                    // H
    "Lolita",                               // L
    "North and South",                      // N
    "One Hundred Years of Solitude",        // O
    "Ulysses",                              // U
    "Vanity Fair",                          // V
    "War and Peace",                        // W
    "Xenogenesis: Dawn",                    // X
    "Zorba the Greek"                       // Z
];


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
    const [showDropdown, setShowDropdown] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { currentUser, logout } = useAuth();
    const dropdownTimeoutRef = useRef();

    useEffect(() => {
        if (currentUser) {
            setIsUserLoggedIn(true);
        }
    }, [currentUser]);

    useEffect(() => {
        if (searchQuery) {
            setFilteredBooks(
                books.filter((book) =>
                    book.toLowerCase().startsWith(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredBooks([]);
        }
    }, [searchQuery]);

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeoutRef.current);
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setShowDropdown(false);
        }, 300);
    };

    const handleSearchDropdownClick = (book) => {
        setSearchQuery(''); // Clear the search bar
        setFilteredBooks([]); // Clear the dropdown
        setShowDropdown(false); // Hide the dropdown
    };

    const handleLogout = () => {
        setShowDropdown(false);
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
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-sm"
                        >
                            <IoSearch className="text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Search for books or authors"
                                className="flex-1 bg-transparent outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>
                        {filteredBooks.length > 0 && (
                            <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-md z-10 w-full max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                            >
                                {filteredBooks.map((book, index) => (
                                    <Link
                                        to={`/book-details/${encodeURIComponent(book)}`}
                                        key={index}
                                        onClick={() => handleSearchDropdownClick(book)}
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        {book}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right-side */}
                <div className="flex items-center space-x-6">
                    {isUserLoggedIn ? (
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <FaUserCircle className="text-gray-800 text-3xl cursor-pointer" />
                            {showDropdown && (
                                <div className="absolute right-0 mt-2 bg-gradient-to-r from-white to-gray-100 border border-gray-300 rounded-lg shadow-xl z-10 p-4 w-64">
                                    {navigationItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.href}
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className="text-gray-800 text-xl">
                            <FaUserAlt className="transition-transform duration-300 hover:scale-110 hover:text-blue-500" />
                        </Link>
                    )}

                    <Link to="/Fs">
                        <button className="text-red-500 text-xl">
                            <BsFillHeartFill className="transition-transform duration-300 hover:scale-110" />
                        </button>
                    </Link>
                    <Link to="/cart" className="relative">
                        <FaCartShopping className="text-gray-800 text-2xl transition-transform duration-300 hover:scale-110 hover:text-green-500" />
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
