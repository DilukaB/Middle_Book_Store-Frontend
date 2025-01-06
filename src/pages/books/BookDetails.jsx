import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetails = () => {
    const { bookName } = useParams(); // Retrieve the book name from the URL
    const [book, setBook] = useState(null);

    useEffect(() => {
        // Fetch the books.json file from the public directory
        fetch('/books.json')
            .then(response => response.json())
            .then(data => {
                const foundBook = data.find(b => b.title === bookName);
                setBook(foundBook);
            })
            .catch(error => {
                console.error('Error fetching the books data:', error);
            });
    }, [bookName]);

    if (!book) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-gray-100 text-center">
                <h1 className="text-4xl font-bold text-red-500">This book out of our store</h1>
                <p className="mt-4 text-lg text-gray-600">Sorry, we couldn't find any details for the selected book.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-50 py-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-6">
                        <img src={`/images/${book.coverImage}`} alt={book.title} className="w-full rounded-lg shadow-lg" />
                        <div className="mt-6">
                            <button
                                onClick={() => window.location.href = '/Ts'} // Navigate to home page
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
                            >
                                Order Now
                            </button>
                        </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                        <h1 className="text-4xl font-bold text-gray-800">{book.title}</h1>
                        <p className="mt-4 text-lg text-gray-700">{book.description}</p>
                        <div className="mt-6 space-y-4">
                            <p className="text-gray-600">
                                <span className="font-semibold text-blue-600">Author:</span> {book.author}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold text-blue-600">Publication Date:</span> {book.publicationDate}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold text-blue-600">Category:</span> {book.category}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold text-blue-600">Rating:</span> {book.rating} / 5
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold text-blue-600">Price:</span>
                                <span className="line-through text-red-500"> ${book.oldPrice}</span>
                                <span className="ml-2 text-green-600 font-semibold">${book.newPrice}</span>
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold text-blue-600">Trending:</span> {book.trending ? 'Yes' : 'No'}
                            </p>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Reviews:</h2>
                            {book.reviews && book.reviews.length > 0 ? (
                                <ul className="mt-4 space-y-4">
                                    {book.reviews.map((review, index) => (
                                        <li key={index} className="border-b pb-4">
                                            <p className="text-gray-700">{review.comment}</p>
                                            <p className="text-sm text-gray-500">- {review.author}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-600">No reviews available for this book.</p>
                            )}
                        </div>

                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold text-gray-800">Similar Books:</h2>
                            {book.similarBooks && book.similarBooks.length > 0 ? (
                                <ul className="mt-4 space-y-2">
                                    {book.similarBooks.map((similarBook, index) => (
                                        <li key={index} className="border-b pb-2">
                                            <Link
                                                to={`/books/${similarBook.title}`}
                                                className="text-blue-600 hover:underline"
                                            >
                                                {similarBook.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-600">No similar books available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
