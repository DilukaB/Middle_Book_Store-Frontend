import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";

const DashboardLayout = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/your-endpoint');
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/");
    };

    return (
        <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
            <aside className="hidden sm:flex sm:flex-col bg-gray-900 text-white shadow-lg">
                <div className="flex-grow flex flex-col justify-between">
                    <nav className="flex flex-col mx-4 my-6 space-y-4">
                        <Link to="/dashboard" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-800 focus:bg-gray-800 text-white hover:text-white focus:text-white transition-all duration-300">
                            <IoBookSharp className="h-6 w-6 mr-3" />
                            Dashboard
                        </Link>
                        <Link to="/dashboard/add-new-book" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-800 focus:bg-gray-800 text-white hover:text-white focus:text-white transition-all duration-300">
                            <HiViewGridAdd className="h-6 w-6 mr-3" />
                            Add Book
                        </Link>
                        <Link to="/dashboard/manage-books" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-800 focus:bg-gray-800 text-white hover:text-white focus:text-white transition-all duration-300">
                            <MdOutlineManageHistory className="h-6 w-6 mr-3" />
                            Manage Books
                        </Link>
                    </nav>
                    <div className="flex items-center justify-center h-20 w-20 border-t border-gray-700">
                        <button className="p-3 hover:bg-gray-800 focus:bg-gray-800 rounded-lg transition-all duration-300">
                            <svg className="h-6 w-6 text-gray-300" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
            <div className="flex-grow text-gray-800">
                <header className="flex items-center h-20 px-6 sm:px-10 bg-white shadow-lg">
                    <button className="block sm:hidden flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-300">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </button>
                    <div className="relative w-full max-w-md sm:-ml-2">
                        <svg className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        <input type="text" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:border-gray-400 focus:outline-none rounded-lg shadow-lg" />
                    </div>
                    <div className="flex items-center ml-auto">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300">
                            <svg className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </button>
                        <button
                            onClick={handleLogout}
                            className="ml-3 p-2 hover:bg-gray-100 rounded-full transition-all duration-300">
                            <svg className="h-6 w-6 text-gray-600" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </div>
                </header>
                <main className="p-6 sm:p-10 space-y-6">
                    <div className="flex flex-col space-y-6 md:flex-row md:justify-between">
                        <div>
                            <h1 className="text-4xl font-semibold text-gray-900 mb-2">Dashboard</h1>
                            <h2 className="text-gray-600">Book Store Inventory</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
                            <Link to="/dashboard/manage-books" className="inline-flex items-center px-5 py-3 text-gray-900 bg-purple-200 hover:bg-purple-300 rounded-md mb-3 md:mb-0 transition-all duration-300">
                                <svg className="h-5 w-5 -ml-1 mt-0.5 mr-2" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                                Manage Books
                            </Link>
                            <Link to="/dashboard/add-new-book" className="inline-flex items-center px-5 py-3 text-white bg-purple-700 hover:bg-purple-800 rounded-md ml-6 transition-all duration-300">
                                <svg className="h-6 w-6 text-white -ml-1 mr-2" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add New Book
                            </Link>
                        </div>
                    </div>
                    <Outlet />
                </main>
            </div>
        </section>
    );
};

export default DashboardLayout;
