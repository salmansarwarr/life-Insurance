"use client";

import { useState } from "react";
import Footer from "@/app/sections/Footer";
import Header from "../sections/Header";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

const Page = () => {
    const [showMenu, setshowMenu] = useState(false);

    return (
        <>
            <Header showMenu={showMenu} setshowMenu={setshowMenu} />

            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer p1="" p2="" />
        </>
    );
};

export default Page;
