'use client'
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import cycle from "../../public/cycle.png";
import {useInView} from "react-intersection-observer";

const images = [
    'Hand.png',
    'recycle.png',
    'rocket.png',
    'Hand.png'
];

const Services = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    useEffect(() => {
        const autoplayInterval = setInterval(nextImage, 3000); // Change image every 3 seconds (adjust as needed)

        return () => {
            clearInterval(autoplayInterval);
        };
    }, [currentImage]);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div className="bg-indigo-50">
            <div>
                <div className="flex justify-center text-blue-600 font-bold font-mono text-lg pt-36">
                    <span className="mr-2">
                        S
                    </span>
                    <span className="mr-2">
                        E
                    </span>
                    <span className="mr-2">
                        R
                    </span>
                    <span className="mr-2">
                        V
                    </span>
                    <span className="mr-2">
                        I
                    </span>
                    <span className="mr-2">
                        C
                    </span>
                    <span className="mr-2">
                        E
                    </span>
                    <span className="mr-2">
                        S
                    </span>
                </div>
                <div className="text-3xl font-bold text-center mr-12 ml-12 mt-4">
                    Bring more systems into the network
                </div>
                <div className="text-lg text-gray-500 mt-6 text-center mr-10 ml-10">
                    Find out just how far Siphome can lead your home into next-gen intelligence.
                </div>
                <div
                    className={`flex justify-center ml-2 mr-2 mt-16 transform transition-transform ease-in-out duration-1000 ${
                        inView ? "-translate-y-8 opacity-100" : "translate-y-96 opacity-0"}`}
                    ref={ref}
                    id="text-section">
                    <Image src={cycle} alt=""/>
                </div>
            </div>
            <div className="shadow-lg rounded-lg bg-white ml-2 mr-2 mt-10 p-6">
                <img src={images[currentImage]} alt={`Image ${currentImage}`}
                     className="rounded-full bg-indigo-100 p-2"/>
            </div>
            <div className="flex justify-center w-full mt-6 bottom-0 pb-40">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-3 w-3 mx-2 rounded-full ${currentImage === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;