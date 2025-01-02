import React from 'react';

const Policy = () => {
    return (
        <div className="container mx-auto px-6 py-12 bg-gray-50 text-gray-900">
            <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Shopping Policy</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Introduction</h2>
                <p className="text-base leading-relaxed text-gray-600">
                    Welcome to BookStore! Our shopping policy outlines the terms and conditions that govern your use of our services.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Product Information</h2>
                <p className="text-base leading-relaxed text-gray-600">
                    All product descriptions, images, and pricing are accurate and regularly updated. However, we reserve the right to correct errors.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Ordering Process</h2>
                <p className="text-base leading-relaxed text-gray-600">
                    Orders can be placed online through our website. Once an order is placed, you will receive an order confirmation via email.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Payment Methods</h2>
                <p className="text-base leading-relaxed text-gray-600">
                    We accept multiple payment methods including credit/debit cards, PayPal, and other secure online payment options.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Pricing & Currency</h2>
                <p className="text-base leading-relaxed text-gray-600">
                    Prices are displayed in your chosen currency. Taxes and shipping charges may apply, and are clearly specified at checkout.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Order Fulfillment & Delivery</h2>
                <p className="text-base leading-relaxed text-gray-600">
                    We aim to process and dispatch your order within [X] business days. Delivery times vary based on location and shipping method.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Returns & Exchanges</h2>
                <p className="text-base leading-relaxed text-gray-600">
                    Refer to our Return Policy for detailed instructions on returns, exchanges, and refund eligibility.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Customer Support</h2>
                <p className="text-base leading-relaxed text-gray-600">
                    Our customer support team is available to assist you with any queries regarding your order or shopping experience. Contact us at <a href="mailto:support@bookstore.com" className="text-primary-500">support@bookstore.com</a>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Governing Law</h2>
                <p className="text-base leading-relaxed text-gray-600">
                    These terms are governed by [Your Country's Laws]. Disputes will be subject to [Your Country's] courts.
                </p>
            </section>
        </div>
    );
};

export default Policy;
