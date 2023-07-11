"use client";

import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdPersonOutline } from "react-icons/md";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import MenuHover from "../../sections/MenuHover";

interface Props {
    showMenu: boolean;
    setshowMenu: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ showMenu, setshowMenu }: Props) => {
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

    const router = useRouter();

    const handleClick = () => {
        router.push("/estimate-experience");
    };

    return (
        <>
            <div
                className={`flex fixed top-0 z-10 justify-between px-5 sm:px-6 lg:px-12 py-2 2md:pb-0 w-full bg-white ${
                    !notHoveringAnything && "2md:border-b"
                } hover:bg-white hover:border-b ${
                    notHoveringAnything && "2md:bg-[#dbede5]" && "bg-white"
                } 2md:border-2 2xl:justify-center 2md:border-b-0 border-l-blue-500 border-r-blue-500 border-t-blue-500`}
            >
                <div className="flex items-center justify-between 2xl:justify-start xl:gap-8 2md:min-w-[700px] sm:w-[60%]">
                    <Link href="/">
                        <Image
                            alt="logo"
                            src="/Minalife-logo.png"
                            width={120}
                            height={120}
                        />
                    </Link>

                    <ul className="text-[#494d4b] font-medium hidden 2md:flex text-sm justify-between w-[576px] h-full items-center">
                        <li
                            onMouseOver={() => handleHover(0)}
                            onMouseOut={() => handleHover(0)}
                            className={`cursor-pointer hover:border-b-2 ${
                                hover[0] && "border-b-2"
                            } border-black h-full flex items-center min-w-[113.9px] hover:text-black`}
                        >
                            <span>Life Insurance</span>
                            <IconButton sx={{ padding: 0 }}>
                                <KeyboardArrowDownIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                            </IconButton>
                        </li>
                        <li
                            onMouseOver={() => handleHover(1)}
                            onMouseOut={() => handleHover(1)}
                            className="cursor-pointer hover:border-b-2 min-w-[181.33px] hover:border-black h-full flex items-center hover:text-black"
                        >
                            <span>Free wills & estate plans</span>
                            <IconButton sx={{ padding: 0 }}>
                                <KeyboardArrowDownIcon fontSize="small" />
                            </IconButton>
                        </li>
                        <li
                            onMouseOver={() => handleHover(2)}
                            onMouseOut={() => handleHover(2)}
                            className="cursor-pointer hover:border-b-2 min-w-[91.66px] hover:border-black h-full flex items-center hover:text-black"
                        >
                            <span>Why Minalife</span>
                            <IconButton sx={{ padding: 0 }}>
                                <KeyboardArrowDownIcon fontSize="small" />
                            </IconButton>
                        </li>
                        <li
                            onMouseOver={() => handleHover(4)}
                            onMouseOut={() => handleHover(4)}
                            className="cursor-pointer hover:border-b-2 min-w-[54.52px] hover:border-black h-full flex items-center hover:text-black"
                        >
                            <Link href="/faq">FAQs</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex w-[160px] 2md:w-[216px] items-center justify-between 2md:justify-end lg:justify-between">
                    <HiOutlineMagnifyingGlass className="text-[1.9rem] text-[#494d4b] hidden lg:block" />
                    <MdPersonOutline className="text-[2.2rem] text-[#494d4b] hidden lg:block" />
                    <button
                        onClick={handleClick}
                        className="bg-[rgb(33,35,34)] hover:bg-[#494d4b] text-white py-2 px-3 text-[0.8rem]"
                    >
                        Check My Price
                    </button>
                    <div className="2md:hidden">
                        <IconButton
                            onClick={() => setshowMenu((prev) => !prev)}
                        >
                            {showMenu ? (
                                <CloseOutlinedIcon />
                            ) : (
                                <MenuOutlinedIcon />
                            )}
                        </IconButton>
                    </div>
                </div>
            </div>
            <MenuHover hover={hover} handleHover={handleHover} />
        </>
    );
};

export default Header;
