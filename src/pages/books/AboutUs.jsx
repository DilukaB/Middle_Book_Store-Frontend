import React from "react";

const AboutUs = () => {
    const staffMembers = [
        {
            name: "Alice Johnson",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            title: "Manager",
            email: "alice.johnson@mystore.com",
        },
        {
            name: "John Smith",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg",
            title: "Assistant Manager",
            email: "john.smith@mystore.com",
        },
        {
            name: "Emily Brown",
            avatar: "https://randomuser.me/api/portraits/women/47.jpg",
            title: "Customer Support",
            email: "emily.brown@mystore.com",
        },
        {
            name: "Robert Davis",
            avatar: "https://randomuser.me/api/portraits/men/33.jpg",
            title: "Marketing Specialist",
            email: "robert.davis@mystore.com",
        },
        {
            name: "Michael Lee",
            avatar: "https://randomuser.me/api/portraits/men/90.jpg",
            title: "IT Specialist",
            email: "michael.lee@mystore.com",
        },
    ];

    return (
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 py-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
                        About Us
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        We are dedicated to bringing knowledge and inspiring stories to life. Our advanced Book Store System offers an easy-to-navigate platform where customers can explore a diverse collection of books across genres, check availability, and reserve their favorite titles online. With seamless integration of customer support and personalized recommendations, we aim to make your reading journey delightful and hassle-free.
                    </p>
                </div>

                {/* Staff Section */}
                <div className="mt-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Meet Our Staff</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {staffMembers.map((member, index) => (
                            <div
                                key={index}
                                className="text-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                            >
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-indigo-500"
                                />
                                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.title}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-indigo-600 hover:underline"
                                    >
                                        {member.email}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
