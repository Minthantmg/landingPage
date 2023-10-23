'use client'
import React from 'react';
import Image from "next/image";
import imageOne from "../../public/img-one.png";
import imageTwo from "../../public/img-two.png";
import imageThree from "../../public/img-3.png";
import monitoring from "../../public/Monitoring.png";
import design from "../../public/Design.png";
import repair from "../../public/Repair.png";
import paint from "../../public/Paint.png";
import {useInView} from "react-intersection-observer";

const Update = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div className="bg-indigo-50">
            <div className="flex justify-center text-blue-600 font-bold font-mono text-lg pt-36">
                <span className="mr-2">
                    U
                </span>
                <span className="mr-2">
                    P
                </span>
                <span className="mr-2">
                    D
                </span>
                <span className="mr-2">
                    A
                </span>
                <span className="mr-2">
                    T
                </span>
                <span className="mr-2">
                    E
                </span>
            </div>
            <div className="text-3xl font-bold text-center mr-14 ml-14 mt-4">
                It starts with an upgrade
            </div>
            <div>
                <div className={`mt-16 transform transition-transform ease-in-out duration-1000 ${
                    inView ? "-translate-x-0 opacity-100" : "-translate-x-96 opacity-0"}`}
                     ref={ref}
                     id="text-section">
                    <Image src={imageOne} alt=""/>
                </div>
                <div className="flex justify-end -mt-24">
                    <Image src={imageTwo} alt=""/>
                </div>
                <div className={`mt-36 transform transition-transform ease-in-out duration-1000 ${
                    inView ? "-translate-y-60 opacity-100" : "-translate-y-20 opacity-0"}`}
                     ref={ref}
                     id="text-section">
                    <Image src={imageThree} alt=""/>
                </div>
            </div>
            <div className="bg-blue-700 -mt-24 rounded-bl-9xl">
                <div>
                    <div className="flex justify-center pt-44">
                        <div className="rounded-full bg-white w-14 h-14">
                            <Image src={monitoring} alt="" className="p-2 mt-1 ml-1 w-12 h-12"/>
                        </div>
                    </div>
                    <div className="text-sm text-white mt-12 text-center mr-12 ml-12">
                        Make your standard systems smart with Siphome.A simple installation or integration and we can
                        start to monitor 24/7 to make sure your home is Siphome.
                    </div>
                </div>
                <div>
                    <div className="flex justify-center pt-16">
                        <div className="rounded-full bg-white w-14 h-14">
                            <Image src={design} alt="" className="p-2 mt-1 ml-1 w-12 h-12"/>
                        </div>
                    </div>
                    <div className="text-sm text-white mt-12 text-center mr-12 ml-12">
                        Siphome helps you maintain your home. The HomeHealth Record ensures you have the right
                        information at the right time, and if you aren’t able to do the maintenance yourself, we can
                        connect you to a service pro to help.
                    </div>
                </div>
                <div>
                    <div className="flex justify-center pt-16">
                        <div className="rounded-full bg-white w-14 h-14">
                            <Image src={repair} alt="" className="p-2 mt-1 ml-1 w-12 h-12"/>
                        </div>
                    </div>
                    <div className="text-sm text-white mt-12 text-center mr-12 ml-12">
                        Siphome empowers you with smart notifications so you can make repairs before they become
                        problems. Notifications provide diagnostics and recommended next actions so you know what to do
                        and have the same information as your service pro.
                    </div>
                </div>
                <div>
                    <div className="flex justify-center pt-16">
                        <div className="rounded-full bg-white w-14 h-14">
                            <Image src={paint} alt="" className="p-2 mt-1 ml-1 w-12 h-12"/>
                        </div>
                    </div>
                    <div className="text-sm text-white mt-12 text-center mr-12 ml-12 pb-40">
                        Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;