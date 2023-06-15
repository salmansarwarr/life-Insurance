"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const Menu = () => {
    const [downIcons, setdownIcons] = useState([
        false,
        false,
        false,
        false,
        false,
    ]);

    const [nestedDownIcons, setnestedDownIcons] = useState([
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
                    return false;
                }
            });
        });
    };

    const handleNestedDownIcon = (num: number) => {
        setnestedDownIcons((prev) => {
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
            <ul className="text-lg text-[#212322] w-full">
                <li>
                    <div
                        onClick={() => handleDownIcon(0)}
                        className={`${downIcons[0] && "bg-[#054742]"} ${
                            downIcons[0] && "text-white"
                        } flex items-center justify-between p-4 px-6 border-0 border-t w-full`}
                    >
                        <span>Life Insurance</span>
                        <IconButton className="p-0">
                            {downIcons[0] ? (
                                <KeyboardArrowUpIcon
                                    fontSize="small"
                                    className="text-white"
                                />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="small" />
                            )}
                        </IconButton>
                    </div>
                    <div className={` ${downIcons[0] ? "block" : "hidden"}`}>
                        <div className="p-5 bg-[#edf5f1]">
                            <h1
                                className={`${lora.className} font-medium text-black text-[1.5rem]`}
                            >
                                Life insurance 101
                            </h1>
                            <p className="text-[#494d4b] text-lg mb-6">
                                A handy guide to life insurance
                            </p>
                            <Link
                                href="/life/life-insurance-basics"
                                className="hover:bg-[#212322] hover:text-white p-2 px-3 text-black text-[0.8rem] border border-black"
                            >
                                Learn more
                            </Link>
                        </div>
                        <ul className={`font-medium text-[1.3rem]`}>
                            <li
                                onClick={() => handleNestedDownIcon(0)}
                                className={`${lora.className} flex items-center justify-between p-4 px-6 w-full`}
                            >
                                <span>Life insurance</span>
                                <IconButton className="p-0">
                                    {nestedDownIcons[0] ? (
                                        <KeyboardArrowUpIcon fontSize="small" />
                                    ) : (
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    )}
                                </IconButton>
                            </li>
                            <ul
                                className={`text-[1.05rem] font-normal text-[#212322] w-full ${
                                    nestedDownIcons[0] ? "block" : "hidden"
                                }`}
                            >
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/term-life-insurance-no-medical-exam"
                                        className="hover:font-light"
                                    >
                                        No medical exam life insurance
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/life-insurance-rates-by-age"
                                        className="hover:font-light"
                                    >
                                        Life insurance rates by age
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/500000-dollar-life-insurance-policy"
                                        className="hover:font-light"
                                    >
                                        $500K life insurance
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/one-million-dollar-life-insurance-policy"
                                        className="hover:font-light"
                                    >
                                        $1 million life insurance
                                    </Link>
                                </li>
                            </ul>
                            <li
                                onClick={() => handleNestedDownIcon(1)}
                                className={`${lora.className} flex items-center justify-between p-4 px-6 w-full`}
                            >
                                <span>Term life</span>
                                <IconButton className="p-0">
                                    {nestedDownIcons[1] ? (
                                        <KeyboardArrowUpIcon fontSize="small" />
                                    ) : (
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    )}
                                </IconButton>
                            </li>
                            <ul
                                className={`text-[1.05rem] font-normal text-[#212322] w-full ${
                                    nestedDownIcons[1] ? "block" : "hidden"
                                }`}
                            >
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/term-life-policies"
                                        className="hover:font-light"
                                    >
                                        Term life insurance
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/10-year-term"
                                        className="hover:font-light"
                                    >
                                        10 year term life insurance
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/20-year-term"
                                        className="hover:font-light"
                                    >
                                        20 year term life insurance
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/30-year-term"
                                        className="hover:font-light"
                                    >
                                        30 year term life insurance
                                    </Link>
                                </li>
                            </ul>
                            <li
                                onClick={() => handleNestedDownIcon(2)}
                                className={`${lora.className} flex items-center justify-between p-4 px-6 w-full`}
                            >
                                <span>Whole life</span>
                                <IconButton className="p-0">
                                    {nestedDownIcons[2] ? (
                                        <KeyboardArrowUpIcon fontSize="small" />
                                    ) : (
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    )}
                                </IconButton>
                            </li>
                            <ul
                                className={`text-[1.05rem] font-normal text-[#212322] w-full ${
                                    nestedDownIcons[2] ? "block" : "hidden"
                                }`}
                            >
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/whole-life-policies"
                                        className="hover:font-light"
                                    >
                                        Whole life insurance
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/gi-whole-life-insurance"
                                        className="hover:font-light"
                                    >
                                        Guaranteed whole life insurance
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/20-year-term"
                                        className="hover:font-light"
                                    >
                                        Understanding whole life insurance
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/faq/what-is-permanent-and-whole-life-insurance"
                                        className="hover:font-light"
                                    >
                                        Permanent and whole life insurance
                                    </Link>
                                </li>
                            </ul>
                            <li
                                onClick={() => handleNestedDownIcon(3)}
                                className={`${lora.className} flex items-center justify-between p-4 px-6 w-full`}
                            >
                                <span>Final expenses</span>
                                <IconButton className="p-0">
                                    {nestedDownIcons[3] ? (
                                        <KeyboardArrowUpIcon fontSize="small" />
                                    ) : (
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    )}
                                </IconButton>
                            </li>
                            <ul
                                className={`text-[1.05rem] font-normal text-[#212322] w-full ${
                                    nestedDownIcons[3] ? "block" : "hidden"
                                }`}
                            >
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life-insurance/end-of-life-expenses"
                                        className="hover:font-light"
                                    >
                                        End of life expenses
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life-insurance/final-expense-life-insurance"
                                        className="hover:font-light"
                                    >
                                        Burial insurance
                                    </Link>
                                </li>
                            </ul>
                            <li
                                onClick={() => handleNestedDownIcon(4)}
                                className={`${lora.className} flex items-center justify-between p-4 px-6 w-full`}
                            >
                                <span>Resources</span>
                                <IconButton className="p-0">
                                    {nestedDownIcons[4] ? (
                                        <KeyboardArrowUpIcon fontSize="small" />
                                    ) : (
                                        <KeyboardArrowDownIcon fontSize="small" />
                                    )}
                                </IconButton>
                            </li>
                            <ul
                                className={`text-[1.05rem] font-normal text-[#212322] w-full ${
                                    nestedDownIcons[4] ? "block" : "hidden"
                                }`}
                            >
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life/how-much-life-insurance-do-i-need"
                                        className="hover:font-light"
                                    >
                                        How much life insurance do I need?
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/life-insurance/cost-of-life-insurance"
                                        className="hover:font-light"
                                    >
                                        How is life insurance cost determined?
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/needs"
                                        className="hover:font-light"
                                    >
                                        Life insurance coverage calculator
                                    </Link>
                                </li>
                                <li className="p-4 px-6 pt-0">
                                    <Link
                                        href="/blog"
                                        className="hover:font-light"
                                    >
                                        Life insurance blog
                                    </Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </li>
                <li>
                    <div
                        onClick={() => handleDownIcon(1)}
                        className={`${downIcons[1] && "bg-[#054742]"} ${
                            downIcons[1] && "text-white"
                        } flex items-center justify-between p-4 px-6 border-0 border-t w-full`}
                    >
                        <span>Free wills & estate plans</span>
                        <IconButton className="p-0">
                            {downIcons[1] ? (
                                <KeyboardArrowUpIcon
                                    fontSize="small"
                                    className="text-white"
                                />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="small" />
                            )}
                        </IconButton>
                    </div>
                    <ul
                        className={`text-lg text-[#212322] w-full ${
                            downIcons[1] ? "block" : "hidden"
                        }`}
                    >
                        <li className="p-4 px-6">
                            <Link href="/plan" className="hover:font-light">
                                Wills & estate plans 101
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link
                                href="/get-a-free-will"
                                className="hover:font-light"
                            >
                                Free will with life insurance
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <div
                        onClick={() => handleDownIcon(2)}
                        className={`${downIcons[2] && "bg-[#054742]"} ${
                            downIcons[2] && "text-white"
                        } flex items-center justify-between p-4 px-6 border-0 border-t w-full`}
                    >
                        <span>Why Minalife</span>
                        <IconButton className="p-0">
                            {downIcons[2] ? (
                                <KeyboardArrowUpIcon
                                    fontSize="small"
                                    className="text-white"
                                />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="small" />
                            )}
                        </IconButton>
                    </div>
                    <ul
                        className={`text-lg text-[#212322] w-full ${
                            downIcons[2] ? "block" : "hidden"
                        }`}
                    >
                        <li className="p-4 px-6">
                            <Link
                                href="/why-minalife"
                                className="hover:font-light"
                            >
                                Why Minalife
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link
                                href="/why-minalife"
                                className="hover:font-light"
                            >
                                How Minalife works
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link href="/reviews" className="hover:font-light">
                                Customer reviews
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link
                                href="/minalifeforgood"
                                className="hover:font-light"
                            >
                                Minalife for good
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <div
                        onClick={() => handleDownIcon(3)}
                        className={`${downIcons[3] && "bg-[#054742]"} ${
                            downIcons[3] && "text-white"
                        } flex items-center justify-between p-4 px-6 border-0 border-t w-full`}
                    >
                        <span>Agents</span>
                        <IconButton className="p-0">
                            {downIcons[3] ? (
                                <KeyboardArrowUpIcon
                                    fontSize="small"
                                    className="text-white"
                                />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="small" />
                            )}
                        </IconButton>
                    </div>
                    <ul
                        className={`text-lg text-[#212322] w-full ${
                            downIcons[3] ? "block" : "hidden"
                        }`}
                    >
                        <li className="p-4 px-6">
                            <Link
                                href="/self-serve-organic"
                                className="hover:font-light"
                            >
                                Minalife for agents
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link
                                href="/self-serve-organic"
                                className="hover:font-light"
                            >
                                Join as an agent
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link
                                href="/agents-portal/login"
                                className="hover:font-light"
                            >
                                Log in as an agent
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <div
                        onClick={() => handleDownIcon(4)}
                        className={`${downIcons[4] && "bg-[#054742]"} ${
                            downIcons[4] && "text-white"
                        } flex items-center justify-between p-4 px-6 border-0 border-t w-full`}
                    >
                        <span>FAQs</span>
                        <IconButton className="p-0">
                            {downIcons[4] ? (
                                <KeyboardArrowUpIcon
                                    fontSize="small"
                                    className="text-white"
                                />
                            ) : (
                                <KeyboardArrowDownIcon fontSize="small" />
                            )}
                        </IconButton>
                    </div>
                    <ul
                        className={`text-lg text-[#212322] w-full ${
                            downIcons[4] ? "block" : "hidden"
                        }`}
                    >
                        <li className="p-4 px-6">
                            <Link href="/faq" className="hover:font-light">
                                FAQs
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link
                                href="/life-insurance-learning-center"
                                className="hover:font-light"
                            >
                                Complete guide to life insurance
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link href="/needs" className="hover:font-light">
                                Coverage calculator
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link
                                href="/contact-us"
                                className="hover:font-light"
                            >
                                Contact us
                            </Link>
                        </li>
                        <li className="p-4 px-6 pt-0">
                            <Link href="/blog" className="hover:font-light">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="text-[#26262d] text-lg border-t mt-6 py-8 px-6 border-t-black">
                <li className="mb-2">
                    <Link href="/app">Start applying</Link>
                </li>
                <li className="mb-2">
                    <Link href="/login">Account</Link>
                </li>
                <li className="mb-2">
                    <Link href="/search">Search</Link>
                </li>
            </ul>
        </>
    );
};

export default Menu;
