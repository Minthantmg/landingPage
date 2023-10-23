'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../landingpage/public/siphome.png';
import { useInView } from 'react-intersection-observer';

const Nav = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const [menuVisibility, setMenuVisibility] = useState(false);

    const toggleMenuVisibility = () => {
        setMenuVisibility(!menuVisibility);
    };

    return (
        <div className="bg-blue-700 rounded-br-9xl relative">
            {/* Menu Layout */}
            <div
                className={`menu-layout fixed inset-0 bg-white z-10 w-full h-1/3 ${menuVisibility ? '' : 'hidden'}`}
                onClick={toggleMenuVisibility}
            ></div>
            <div className="flex justify-between">
                <div className="ml-4">
                    <Image src={logo} alt="" className="mt-8 ml-6" />
                </div>
                <div className="flex justify-center mr-4">
                    <button
                        className="border rounded-lg border-white mt-8 mr-4 ml-4 pl-4 pr-4 pt-2 pb-2"
                        onClick={toggleMenuVisibility}
                    >
                        <span className="text-white">Menu</span>
                    </button>
                </div>
            </div>
            <div ref={ref} id="text-section" className={`text-white font-bold text-5xl text-center mt-16 leading-tight transform transition-transform ease-in-out duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-96 opacity-0'}`}>
                Imagine your home smart enough <span className="text-green-500 mr-3">to take care</span> of itself.
            </div>
            <div className={`mt-10 text-center text-base text-white ml-10 mr-10 leading-tight transform transition-transform ease-in-out duration-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-96 opacity-0'}`}>
                Turn your home into a smart home today with a simple & affordable upgrade. Discover the upgrade that automates home maintenance.
            </div>
            <div className="flex justify-between mt-10 pb-36">
                <div>
                    <button className="text-white border border-white rounded-sm bg-green-500 px-2 py-2 ml-16 text-sm">Get Started</button>
                </div>
                <div>
                    <button className="text-white border border-white rounded-sm px-2 py-2 mr-16 text-sm">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;
