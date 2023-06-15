"use client";

import { useState } from "react";
import Menu from "./sections/Menu";
import MenuHover from "./sections/MenuHover";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";

const Page = () => {
    const [showMenu, setshowMenu] = useState(false);
    const [hover, sethover] = useState([false, false, false, false, false]);
    const notHoveringAnything = hover.every((i) => i == false);

    const handleHover = (num: number) => {
        sethover((prev) => {
            return prev.map((icon, i) => {
                if (i == num) {
                    return !prev[i];
                } else {
                    return false;
                }
            });
        });
    };

    return (
        <>
            <Header
                notHoveringAnything={notHoveringAnything}
                handleHover={handleHover}
                hover={hover}
                showMenu={showMenu}
                setshowMenu={setshowMenu}
            />
            {showMenu ? (
                <Menu />
            ) : (
                <>
                    <MenuHover hover={hover} handleHover={handleHover} />
                    <>
                        <Section1 />
                        <Section2 />
                        <Section3 />
                        <Section4 />
                        <Section5 />
                        <Footer />
                    </>
                </>
            )}
        </>
    );
};

export default Page;
