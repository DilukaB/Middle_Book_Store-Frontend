import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [feedback, setFeedback] = useState({ message: '', type: '' });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setFeedback({ message: 'Please fill out all fields.', type: 'error' });
        } else {
            setFeedback({ message: 'Message sent successfully!', type: 'success' });
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-10">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        We’d love to hear from you! Whether you have questions about our books, need support, or just want to say hi, feel free to reach out through any of the platforms below.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Address:</span> 123 Middle Street, Colombo, Sri Lanka
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Phone:</span> +94 77 123 4567
                        </p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-medium">Email:</span> info@mymiddlebookstore.com
                        </p>
                        <p className="text-gray-700">
                            <span className="font-medium">Operating Hours:</span> Mon - Sat, 9:00 AM - 6:00 PM
                        </p>
                    </div>



                    {/* Contact Form Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        {feedback.message && (
                            <div
                                className={`mb-4 p-4 rounded-lg ${feedback.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                                    } text-white text-center`}
                            >
                                {feedback.message}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:bg-gradient-to-l hover:from-blue-800 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mt-8">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-all"
                    >
                        <FaFacebook size={28} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-blue-600 transition-all"
                    >
                        <FaTwitter size={28} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-pink-600 transition-all"
                    >
                        <FaInstagram size={28} />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Contact;
