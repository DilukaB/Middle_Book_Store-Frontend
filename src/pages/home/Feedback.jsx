import React, { useState, useEffect } from 'react';

const Feedback = () => {
    const feedbacks = [
        {
            name: "Alice Johnson",
            avatar: "https://randomuser.me/api/portraits/women/34.jpg",
            feedback: "The book quality and delivery service were exceptional! I’m thrilled with my purchase.",
            stars: 5,
        },
        {
            name: "Michael Brown",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
            feedback: "Amazing selection of books and a user-friendly website. Highly recommend!",
            stars: 4,
        },
        {
            name: "Sophia Williams",
            avatar: "https://randomuser.me/api/portraits/women/70.jpg",
            feedback: "Customer support was prompt and helpful. Will definitely shop here again!",
            stars: 3,
        },
        {
            name: "James Smith",
            avatar: "https://randomuser.me/api/portraits/men/33.jpg",
            feedback: "Great pricing and excellent range of books. Highly satisfied!",
            stars: 5,
        },
        {
            name: "Emily Davis",
            avatar: "https://randomuser.me/api/portraits/women/41.jpg",
            feedback: "Fast delivery and books were in perfect condition. Will buy again!",
            stars: 4,
        },
        {
            name: "Chris Martin",
            avatar: "https://randomuser.me/api/portraits/men/52.jpg",
            feedback: "Impressive collection and seamless checkout process. Five stars!",
            stars: 2,
        },
        {
            name: "Olivia Wilson",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            feedback: "The order arrived quickly and the packaging was great.",
            stars: 4,
        },
        {
            name: "Liam Green",
            avatar: "https://randomuser.me/api/portraits/men/61.jpg",
            feedback: "Highly recommend due to the great variety of books available.",
            stars: 5,
        },
        {
            name: "Mia Adams",
            avatar: "https://randomuser.me/api/portraits/women/62.jpg",
            feedback: "Excellent customer service and fast response to queries.",
            stars: 3,
        },
        {
            name: "Noah Carter",
            avatar: "https://randomuser.me/api/portraits/men/77.jpg",
            feedback: "Affordable prices and quick delivery. Would shop again.",
            stars: 5,
        },
        {
            name: "Ava Taylor",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            feedback: "Books arrived in perfect condition, and delivery was super fast.",
            stars: 4,
        },
        {
            name: "Oliver King",
            avatar: "https://randomuser.me/api/portraits/men/73.jpg",
            feedback: "Good selection, but I wish there were more discounts.",
            stars: 3,
        },
        {
            name: "Emma Thompson",
            avatar: "https://randomuser.me/api/portraits/women/85.jpg",
            feedback: "The website is easy to navigate and checkout was smooth.",
            stars: 5,
        },
        {
            name: "Jack Harris",
            avatar: "https://randomuser.me/api/portraits/men/80.jpg",
            feedback: "Fast shipping, but the packaging could be improved.",
            stars: 4,
        },
        {
            name: "Isabella Lewis",
            avatar: "https://randomuser.me/api/portraits/women/95.jpg",
            feedback: "Great customer experience, and the delivery was super fast.",
            stars: 5,
        },
        {
            name: "Ethan White",
            avatar: "https://randomuser.me/api/portraits/men/90.jpg",
            feedback: "Books were well-packaged and arrived quickly.",
            stars: 4,
        },
        {
            name: "Grace Morgan",
            avatar: "https://randomuser.me/api/portraits/women/56.jpg",
            feedback: "Superb collection of rare books. I’m impressed!",
            stars: 5,
        },
        {
            name: "Henry Evans",
            avatar: "https://randomuser.me/api/portraits/men/59.jpg",
            feedback: "Great discounts and a wide variety of genres.",
            stars: 4,
        },
        {
            name: "Chloe Baker",
            avatar: "https://randomuser.me/api/portraits/women/75.jpg",
            feedback: "Packaging was amazing, and delivery was fast.",
            stars: 4,
        },
        {
            name: "Mason Rivera",
            avatar: "https://randomuser.me/api/portraits/men/39.jpg",
            feedback: "Wonderful selection of children’s books!",
            stars: 5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [feedbacks.length]);

    const visibleFeedbacks = feedbacks.slice(currentIndex, currentIndex + 2);

    return (
        <div className="container mx-auto px-6 py-12 bg-gray-50">
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Customer Feedback</h1>
            <div className="relative flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {visibleFeedbacks.map((feedback, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={feedback.avatar}
                                alt={`${feedback.name}'s avatar`}
                                className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-primary-500"
                            />
                            <h2 className="text-xl font-semibold text-gray-700">{feedback.name}</h2>
                            <div className="flex justify-center mt-2">
                                {Array.from({ length: feedback.stars }, (_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 1.804a1 1 0 011.902 0l1.303 3.978a1 1 0 00.95.688h4.151a1 1 0 01.618 1.755l-3.303 2.516a1 1 0 00-.364 1.118l1.225 3.872a1 1 0 01-1.537 1.118L10 13.356l-3.692 2.734a1 1 0 01-1.537-1.118l1.225-3.872a1 1 0 00-.364-1.118L2.25 7.21a1 1 0 01.618-1.755h4.151a1 1 0 00.95-.688l1.303-3.978z" />
                                    </svg>
                                ))}
                                {Array.from({ length: 5 - feedback.stars }, (_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 1.804a1 1 0 011.902 0l1.303 3.978a1 1 0 00.95.688h4.151a1 1 0 01.618 1.755l-3.303 2.516a1 1 0 00-.364 1.118l1.225 3.872a1 1 0 01-1.537 1.118L10 13.356l-3.692 2.734a1 1 0 01-1.537-1.118l1.225-3.872a1 1 0 00-.364-1.118L2.25 7.21a1 1 0 01.618-1.755h4.151a1 1 0 00.95-.688l1.303-3.978z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{feedback.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;
