import React from 'react';
import Nav from "@/app/nav";
import Body from "@/app/body";
import Update from "@/app/update";
import Services from "@/app/services";
import Test from "@/app/test";
import Contact from "@/app/contact";
import Footer from "@/app/footer";

const Page = () => {
    return (
        <div className="bg-indigo-50">
            <Nav/>
            <Body/>
            <Update />
            <Services />
            <Test />
            <Contact />
            <Footer />
        </div>
    );
};

export default Page;