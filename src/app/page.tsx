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
    const [hover, sethover] = useState([false, false, false, false, false]);
    const [scrolled, setScrolled] = useState(false);
    const notHoveringAnything = hover.every((i) => i == false);

    useEffect(() => {
        if (typeof window != undefined) {
            const changeScroll = () => {
                if (window.scrollY >= 65) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            };
            window.addEventListener("scroll", changeScroll);
        }
    }, []);

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
                scrolled={scrolled}
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
                        <Section6 />
                        <Footer />
                    </>
                </>
            )}
        </>
    );
};

export default Page;
