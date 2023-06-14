"use client";

import { IconButton } from "@mui/material";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });

const Section2 = () => {
    const [downIcons, setdownIcons] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);

    const handleDownIcon = (num: number) => {
        setdownIcons((prev) => {
            return prev.map((icon, i) => {
                if (i == num) {
                    return !prev[i];
                } else {
                    return prev[i];
                }
            });
        });
    };

    return (
        <div className="py-10 px-8 sm:px-20 flex gap-8 sm:gap-40 md:gap-52 lg:gap-72 xl:gap-96 flex-col sm:flex-row text-[#212322]">
            <h1 className={`${playfair.className} text-[2.4rem] leading-none`}>FAQs</h1>
            <ul className="text-[1.05rem] flex flex-col gap-8 w-full">
                <li>
                    <div
                        onClick={() => handleDownIcon(0)}
                        className={`flex items-center font-semibold justify-between w-full`}
                    >
                        <span>What happens next?</span>
                        <IconButton className="p-0">
                            {downIcons[0] ? (
                                <KeyboardArrowUpIcon fontSize="medium" />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                    <div
                        className={` ${
                            downIcons[0] ? "block" : "hidden transition-all"
                        }`}
                    >
                        <p className="mt-4 text-gray-700 text-[1rem]">
                            We need a bit more information to get you your real
                            price. If the above estimated rate sounds
                            interesting, you can apply in about 10 minutes
                            online. Most people don't need a medical exam, but
                            if you do we'll let you know. It's always
                            convenient, easy, and free.
                        </p>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => handleDownIcon(1)}
                        className={`flex items-center font-semibold justify-between w-full`}
                    >
                        <span>Is the application binding?</span>
                        <IconButton className="p-0">
                            {downIcons[1] ? (
                                <KeyboardArrowUpIcon fontSize="medium" />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                    <div
                        className={` ${
                            downIcons[1] ? "block" : "hidden transition-all"
                        }`}
                    >
                        <p className="mt-4 text-gray-700 text-[1rem]">
                            Not at all. It's free and you can withdraw at any
                            time, with no fees. Plus, you can make more
                            adjustments to your coverage after you apply, before
                            anything is finalized.
                        </p>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => handleDownIcon(2)}
                        className={`flex items-center font-semibold justify-between w-full`}
                    >
                        <span>Is this quote my final price?</span>
                        <IconButton className="p-0">
                            {downIcons[2] ? (
                                <KeyboardArrowUpIcon fontSize="medium" />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                    <div
                        className={` ${
                            downIcons[2] ? "block" : "hidden transition-all"
                        }`}
                    >
                        <p className="mt-4 text-gray-700 text-[1rem]">
                            No—this quick quote calculator gives you an estimate
                            of what life insurance coverage could cost for you.
                            You'll get your real rate when you apply and your
                            application is approved. With Ethos, the application
                            is always free.
                        </p>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => handleDownIcon(3)}
                        className={`flex items-center font-semibold justify-between w-full`}
                    >
                        <span>Who can apply?</span>
                        <IconButton className="p-0">
                            {downIcons[3] ? (
                                <KeyboardArrowUpIcon fontSize="medium" />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                    <div
                        className={` ${
                            downIcons[3] ? "block" : "hidden transition-all"
                        }`}
                    >
                        <p className="mt-4 text-gray-700 text-[1rem]">
                            All U.S. citizens ages 20-85 are welcome to apply.
                            Ethos is licensed and operates in every U.S. state
                            and the District of Columbia, excluding the state of
                            New York.
                        </p>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => handleDownIcon(4)}
                        className={`flex items-center font-semibold justify-between w-full`}
                    >
                        <span>
                            Will I be stuck with the coverage I applied for?
                        </span>
                        <IconButton className="p-0">
                            {downIcons[4] ? (
                                <KeyboardArrowUpIcon fontSize="medium" />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="medium" />
                            )}
                        </IconButton>
                    </div>
                    <div
                        className={` ${
                            downIcons[4] ? "block" : "hidden transition-all"
                        }`}
                    >
                        <p className="mt-4 text-gray-700 text-[1rem]">
                            No. After your application is approved, you can make
                            adjustments so that you get the coverage you need at
                            a price that works for you. A licensed Ethos expert
                            will reach out to help you make sure you've got your
                            bases covered.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Section2;
