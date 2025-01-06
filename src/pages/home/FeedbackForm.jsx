import React, { useState } from 'react';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate feedback submission
        console.log({ name, email, feedback, rating });

        // Show a success message
        setMessage('Thank you for your feedback!');

        // Optionally clear the form fields
        setName('');
        setEmail('');
        setFeedback('');
        setRating(0);

        // Automatically hide the message after 3 seconds
        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Give Your Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                        Rating:
                    </label>
                    <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                onClick={() => setRating(star)}
                                className={`w-6 h-6 cursor-pointer ${rating >= star ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.049 2.927a1 1 0 011.902 0l1.718 5.533a1 1 0 00.95.693h5.8a1 1 0 01.584 1.81l-4.711 3.449a1 1 0 00-.353 1.118l1.688 5.12a1 1 0 01-1.524 1.065L10 15.33l-4.554 3.129a1 1 0 01-1.523-1.066l1.688-5.12a1 1 0 00-.353-1.118L2.67 10.97a1 1 0 01.584-1.81h5.8a1 1 0 00.95-.693l1.718-5.533z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ))}
                    </div>
                </div>
                <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                        Feedback:
                    </label>
                    <textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300"
                >
                    Submit Feedback
                </button>
            </form>
            {message && (
                <p
                    className="mt-4 text-center text-lg font-semibold text-green-600 bg-green-100 p-3 rounded-lg transition-opacity duration-300 ease-in-out"
                >
                    {message}
                </p>
            )}
        </div>
    );
};

export default FeedbackForm;
