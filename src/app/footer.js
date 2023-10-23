import React from 'react';
import logo from "../../../landingpage/public/logo-one.png"
import facebook from "../../../landingpage/public/ico-facebook.png"
import instagram from "../../../landingpage/public/ico-instagram.png"
import twitter from "../../../landingpage/public/ico-twitter.png"
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <div className="flex justify-center mt-6">
                <Image src={logo} alt=""/>
            </div>
            <div className="font-bold text-center text-lg mt-8">
                Siphome,LLC
            </div>
            <div className="text-lg text-center mt-2 ml-20 mr-20">
                The New Building 2320
                Lang Avenue, Park Valley, Utah,
                United States.
            </div>
            <div className="text-lg text-center mt-2">
                84329
            </div>
            <div className="text-lg text-center mt-8">
                <span className="font-bold">P</span>: +1 176 909 2900
            </div>
            <div className="text-lg text-center">
                <span className="font-bold">E</span>: siphome@gmail.com
            </div>
            <div className="text-lg text-center font-bold mt-16">
                Navigation
            </div>
            <div className="text-lg text-center font-bold mt-44">
                About
            </div>
            <div className="text-lg text-center text-gray-400">
                Contact Us
            </div>
            <div className="text-lg text-center text-gray-400">
                Privacy & Policy
            </div>
            <div className="text-lg text-center text-gray-400">
                Terms & Conditions
            </div>
            <div className="text-lg text-center text-gray-400">
                FAQ
            </div>
            <div className="text-lg text-center font-bold mt-32">
                Stay Connected
            </div>
            <div className="flex justify-center mt-6">
                <div className="mr-6">
                    <Image src={facebook} alt=""/>
                </div>
                <div>
                    Facebook
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <div>
                    <Image src={twitter} alt="" className="mr-10"/>
                </div>
                <div>
                    Twitter
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <div className="mr-6">
                    <Image src={instagram} alt=""/>
                </div>
                <div>
                    Instagram
                </div>
            </div>
            <div className="mt-24 flex justify-center">
                Copyright© 2020.
            </div>
            <div className="flex justify-center mb-4">
                Siphome Smart home LLC.
            </div>
        </div>
    );
};

export default Footer;