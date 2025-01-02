import React from 'react';
import { useDeleteBookMutation, useFetchAllBooksQuery } from '../../../redux/features/books/booksApi';
import { Link, useNavigate } from 'react-router-dom';

const ManageBooks = () => {
    const navigate = useNavigate();
    const { data: books, refetch } = useFetchAllBooksQuery();
    const [deleteBook] = useDeleteBookMutation();

    // Handle deleting a book
    const handleDeleteBook = async (id) => {
        try {
            await deleteBook(id).unwrap();
            Swal.fire({
                title: "Book deleted",
                text: "The book has been successfully removed.",
                icon: "success",
                confirmButtonText: "Great!"
            });
            refetch();
        } catch (error) {
            console.error('Failed to delete book:', error.message);
            Swal.fire({
                title: "Error",
                text: "Failed to delete book. Please try again.",
                icon: "error"
            });
        }
    };

    // Handle navigating to Edit Book page
    const handleEditClick = (id) => {
        navigate(`dashboard/edit-book/${id}`);
    };

    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto mt-24">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-semibold text-gray-800">All Books</h3>
                            <Link
                                to="/dashboard/all-books"
                                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-all duration-150">
                                See All
                            </Link>
                        </div>
                    </div>

                    <div className="p-6">
                        <table className="min-w-full bg-transparent table-auto">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">#</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Book Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books && books.map((book, index) => (
                                    <tr key={index} className="border-b border-gray-200">
                                        <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{book.title}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">{book.category}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700">${book.newPrice}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <Link
                                                to={`/dashboard/edit-book/${book._id}`}
                                                className="text-indigo-600 hover:text-indigo-800 hover:underline mr-4">
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDeleteBook(book._id)}
                                                className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600 transition-all duration-150">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageBooks;
