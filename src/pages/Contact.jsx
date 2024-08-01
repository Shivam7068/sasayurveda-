import React from 'react';

const ContactPage = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white m-10 p-8 rounded-lg shadow-lg  w-full">
                <div className="md:w-1/3 p-4 bg-green-500 text-white rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8">
                    <h3 className="text-xl font-bold mb-4">Contact Details</h3>
                    <div className="mb-4">
                        <h4 className="font-bold">Location:</h4>
                        <p>123 Main Street, Anytown, USA</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="font-bold">Phone:</h4>
                        <p>(123) 456-7890</p>
                    </div>
                    <div className="mb-4">
                        <h4 className="font-bold">Email:</h4>
                        <p>info@example.com</p>
                    </div>
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows="5"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
