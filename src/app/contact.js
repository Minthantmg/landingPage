'use client'
import React from 'react';
import quest from '../../public/quest.png'
import Image from "next/image";
import {useInView} from "react-intersection-observer";

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div>
            <div className="flex justify-center text-blue-600 font-bold font-mono text-lg mt-24">
                <span className="mr-2">
                    C
                </span>
                <span className="mr-2">
                    O
                </span>
                <span className="mr-2">
                    N
                </span>
                <span className="mr-2">
                    T
                </span>
                <span className="mr-2">
                    A
                </span>
                <span className="mr-2">
                    C
                </span>
                <span className="mr-2">
                    T
                </span>
            </div>
            <div className="text-center text-2xl font-bold mt-3 ml-16 mr-16">
                Skip logging in, get what you need with a few key details
            </div>
            <div className={`mt-24 flex justify-center transform transition-transform ease-in-out duration-1000 ${
                    inView ? "-translate-y-10 opacity-100" : "translate-y-96 opacity-0"}`}
                     ref={ref}
                     id="text-section">
                <Image src={quest} alt=""/>
            </div>
            <form className="max-w-md mx-auto p-4 bg-white rounded mt-10 pb-44">
                <div className="mb-4">
                    <label htmlFor="name" className="text-base">Your name<span
                        className="ml-1">(required)</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Your Name"
                        className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="text-base">Your email<span
                        className="ml-1">(required)</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="text-base">Subject<span
                        className="ml-1">(required)</span></label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter Subject"
                        className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="job" className="text-base">Jobdesk</label>
                    <input
                        type="text"
                        id="job"
                        name="job"
                        placeholder="Enter Job"
                        className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="company" className="text-base">Company Name</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Enter Company"
                        className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="text-base">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter Message"
                        className="w-full h-32 p-3 mt-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>


                <div className="mb-6">
                    <button
                        type="submit"
                        className="bg-green-500 text-white font-semibold p-4 rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;