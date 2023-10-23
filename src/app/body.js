'use client'
import React from 'react';
import image from '../../public/illustration.png'
import Image from "next/image";
import icoThreat from '../../public/ico-threat.png'
import icoThreatBlue from '../../public/ico-threat-blue.png'
import icoThreatGreen from '../../public/ico-threat-green.png'
import icoThreatYellow from '../../public/ico-threat-yellow.png'
import {useInView} from "react-intersection-observer";


const Body = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    return (
        <div className="bg-indigo-50">
            <div className="flex">
                <div ref={ref}
                     id="text-section"
                     className={`pt-80 ml-10 transform transition-transform ease-in-out duration-1000 ${
                         inView ? "-translate-y-16 opacity-100" : "translate-y-96 opacity-0"}`}>
                    <Image src={image} alt=""/>
                </div>
                <div>
                    <div>
                        <div className="flex justify-center text-blue-600 font-bold font-mono text-lg">
                <span className="mr-2">
                    F
                </span>
                            <span className="mr-2">
                    E
                </span>
                            <span className="mr-2">
                    A
                </span>
                            <span className="mr-2">
                    T
                </span>
                            <span className="mr-2">
                    U
                </span>
                            <span className="mr-2">
                    R
                </span>
                            <span className="mr-2">
                    E
                </span>
                            <span className="mr-2">
                    S
                </span>
                        </div>
                        <div className="text-center text-2xl font-bold mt-3">
                            Meet Siphome
                        </div>
                        <div className="text-sm text-gray-500 mt-8 text-center ml-16 mr-16 leading-wide">
                            The most comprehensive smart solution to home maintenance.All it takes is a simple and
                            affordabie
                            sensor
                            installation by one of our Siphome certified technicians.
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <div className="flex justify-center mt-16">
                                <Image src={icoThreat} alt=""/>
                            </div>
                            <div className="text-sm text-gray-500 mt-12 text-center mr-12 ml-12">
                                Siphome reacts the moment your equiment fails,alerting you to the problem.
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center mt-16">
                                <Image src={icoThreatBlue} alt=""/>
                            </div>
                            <div className="text-sm text-gray-500 mt-12 text-center mr-12 ml-12">
                                See exactly what is malfunctioning and compare your maintenance options on the same
                                screen.
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center mt-16">
                                <Image src={icoThreatGreen} alt=""/>
                            </div>
                            <div className="text-sm text-gray-500 mt-12 text-center mr-12 ml-12">
                                Predictive analytics lets you see what needs maintenance before it fails.
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center mt-16">
                                <Image src={icoThreatYellow} alt=""/>
                            </div>
                            <div className="text-sm text-gray-500 mt-12 text-center mr-12 ml-12">
                                Siphome monitors your critical systems 24/7 so you can enjoy peace of mind.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;