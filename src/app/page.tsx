"use client";

import { useEffect, useState } from "react";
import Menu from "./sections/Menu";
import MenuHover from "./sections/MenuHover";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Footer from "./sections/Footer";
import Header from "./sections/Header";

const Page = () => {
    const [showMenu, setshowMenu] = useState(false);

    return (
        <>
            <Header showMenu={showMenu} setshowMenu={setshowMenu} />
            {showMenu ? (
                <Menu />
            ) : (
                <>
                    <>
                        <Section1 />
                        <Section2 />
                        <Section3 />
                        <Section4 />
                        <Section5 />
                        <Section6 />
                        <Footer
                            p1="*Prices start at $7/month based on a 20-year old female, healthy, non-smoking for a 10 year term and $100,000 policy."
                            p2="Trustpilot rating as of 3/31/23"
                        />
                    </>
                </>
            )}
        </>
    );
};

export default Page;
