"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdPersonOutline } from "react-icons/md";
import { IconButton } from "@mui/material";
import Menu from "./sections/Menu";
import Link from "next/link";
import MenuHover from "./sections/MenuHover";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";

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
            {/* NAVBAR */}
            <div
                className={`flex fixed top-0 z-10 justify-between px-5 sm:px-6 lg:px-12 py-2 2md:pb-0 w-full bg-white ${
                    !notHoveringAnything && "2md:border-b"
                } hover:bg-white hover:border-b ${
                    notHoveringAnything && "2md:bg-[#dbede5]"
                } ${
                    scrolled && "bg-white"
                } 2md:border-2 2xl:justify-center 2md:border-b-0 border-l-blue-500 border-r-blue-500 border-t-blue-500`}
            >
                <div className="flex items-center justify-between 2xl:justify-start xl:gap-8 2md:min-w-[700px] sm:w-[60%]">
                    <Link href="/">
                        <Image
                            alt="logo"
                            src="/logo.png"
                            width={90}
                            height={80}
                        />
                    </Link>

                    <ul className="text-[#494d4b] font-medium hidden 2md:flex text-sm justify-between w-[576px] h-full items-center">
                        <li
                            onMouseOver={() => handleHover(0)}
                            onMouseOut={() => handleHover(0)}
                            className={`cursor-pointer hover:border-b-2 ${
                                hover[0] && "border-b-2"
                            } border-black h-full flex items-center hover:text-black`}
                        >
                            <span>Life Insurance</span>
                            <IconButton className="p-0">
                                <KeyboardArrowDownIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                            </IconButton>
                        </li>
                        <li
                            onMouseOver={() => handleHover(1)}
                            onMouseOut={() => handleHover(1)}
                            className="cursor-pointer hover:border-b-2 hover:border-black h-full flex items-center hover:text-black"
                        >
                            <span>Free wills & estate plans</span>
                            <IconButton className="p-0">
                                <KeyboardArrowDownIcon fontSize="small" />
                            </IconButton>
                        </li>
                        <li
                            onMouseOver={() => handleHover(2)}
                            onMouseOut={() => handleHover(2)}
                            className="cursor-pointer hover:border-b-2 hover:border-black h-full flex items-center hover:text-black"
                        >
                            <span>Why Ethos</span>
                            <IconButton className="p-0">
                                <KeyboardArrowDownIcon fontSize="small" />
                            </IconButton>
                        </li>
                        <li
                            onMouseOver={() => handleHover(3)}
                            onMouseOut={() => handleHover(3)}
                            className="cursor-pointer hover:border-b-2 hover:border-black h-full flex items-center hover:text-black"
                        >
                            <span>Agents</span>
                            <IconButton className="p-0">
                                <KeyboardArrowDownIcon fontSize="small" />
                            </IconButton>
                        </li>
                        <li
                            onMouseOver={() => handleHover(4)}
                            onMouseOut={() => handleHover(4)}
                            className="cursor-pointer hover:border-b-2 hover:border-black h-full flex items-center hover:text-black"
                        >
                            <span>FAQs</span>
                            <IconButton className="p-0">
                                <KeyboardArrowDownIcon fontSize="small" />
                            </IconButton>
                        </li>
                    </ul>
                </div>
                <div className="flex w-[160px] 2md:w-[216px] items-center justify-between 2md:justify-end lg:justify-between">
                    <HiOutlineMagnifyingGlass className="text-[1.9rem] text-[#494d4b] hidden lg:block" />
                    <MdPersonOutline className="text-[2.2rem] text-[#494d4b] hidden lg:block" />
                    <Link
                        href="/app"
                        className="bg-[rgb(33,35,34)] hover:bg-[#494d4b] text-white py-2 px-3 text-[0.9rem]"
                    >
                        Start applying
                    </Link>
                    <IconButton className="2md:hidden lg:hidden" onClick={() => setshowMenu((prev) => !prev)}>
                        {showMenu ? (
                            <CloseOutlinedIcon />
                        ) : (
                            <MenuOutlinedIcon />
                        )}
                    </IconButton>
                </div>
            </div>
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
                    </>
                </>
            )}
        </>
    );
};

export default Page;
