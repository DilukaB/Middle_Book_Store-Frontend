import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                        About Us
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Welcome to My Middle Book Store! We are dedicated to bringing knowledge and inspiring stories to life.
                    </p>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Our mission is to offer a curated selection of high-quality books for readers of all ages. Founded with a deep love for literature, our store has become a cherished space for book enthusiasts in the community.
                    </p>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Whether you're seeking the latest bestseller or a timeless classic, we aim to provide something special for every reader. Our passionate team is here to help you discover your next great read.
                    </p>
                </div>

                {/* Achievements Section */}
                <div className="mt-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Achievements</h2>
                    <ul className="space-y-4 text-lg text-gray-700">
                        <li className="flex items-start space-x-4">
                            <div className="flex-none w-6 h-6 mt-1">
                                <i className="fas fa-check-circle text-blue-600 text-xl"></i>
                            </div>
                            <p>Served over 10,000 satisfied customers, fostering a thriving community.</p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="flex-none w-6 h-6 mt-1">
                                <i className="fas fa-check-circle text-blue-600 text-xl"></i>
                            </div>
                            <p>Curated a collection of over 5,000 carefully selected books across genres.</p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="flex-none w-6 h-6 mt-1">
                                <i className="fas fa-check-circle text-blue-600 text-xl"></i>
                            </div>
                            <p>Organized numerous successful book reading events and interactive workshops.</p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="flex-none w-6 h-6 mt-1">
                                <i className="fas fa-check-circle text-blue-600 text-xl"></i>
                            </div>
                            <p>Built a strong and engaged online community through social media.</p>
                        </li>
                    </ul>
                </div>

                {/* Future Goals Section */}
                <div className="mt-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">What We Aim to Do</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At My Middle Book Store, we aspire to continue evolving and enhancing the reading experience for our customers. Our future goals include:
                    </p>
                    <ul className="space-y-4 text-lg text-gray-700 mt-4">
                        <li className="flex items-start space-x-4">
                            <div className="flex-none w-6 h-6 mt-1">
                                <i className="fas fa-check-circle text-blue-600 text-xl"></i>
                            </div>
                            <p>Expand our collection to 10,000+ exclusive and rare titles.</p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="flex-none w-6 h-6 mt-1">
                                <i className="fas fa-check-circle text-blue-600 text-xl"></i>
                            </div>
                            <p>Host more interactive events, including author signings and book clubs.</p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="flex-none w-6 h-6 mt-1">
                                <i className="fas fa-check-circle text-blue-600 text-xl"></i>
                            </div>
                            <p>Enhance our online presence with a premium e-commerce platform.</p>
                        </li>
                        <li className="flex items-start space-x-4">
                            <div className="flex-none w-6 h-6 mt-1">
                                <i className="fas fa-check-circle text-blue-600 text-xl"></i>
                            </div>
                            <p>Offer personalized book recommendations tailored to your interests.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
