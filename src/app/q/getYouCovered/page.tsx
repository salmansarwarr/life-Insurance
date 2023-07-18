"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MdDone } from "react-icons/md";
import Header from "../components/Header";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
const playfairMd = Playfair_Display({ subsets: ["latin"], weight: "600" });

const page = () => {
    return (
        <>
            <Header />
            <div>
                <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                    <div className="w-[45%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 3:
                        <span className="font-medium ml-1">
                            REVIEW YOUR CUSTOM PLAN
                        </span>
                    </p>
                </div>
                <div className="flex flex-col px-6 py-8 sm:items-center mt-2">
                    <p
                        className={`${playfair.className} my-4 text-[2rem] sm:text-[2.2rem] leading-tight max-w-[500px]`}
                    >
                        That’s a great start
                    </p>
                    <p className=" max-w-[480px] text-center text-gray-900 mt-2 mb-5">
                        Coverage through an empolyer typically cover 1-2x your
                        salary - most experts recommend 6-10x
                    </p>
                    <Image
                        src="/right-amount.svg"
                        alt="right-amount"
                        height={360}
                        width={360}
                    />
                    <Link
                        href="/q/goals"
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 mb-5 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Next </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </Link>
                    <Link href="https://minawill.com/all/products/individual" className="text-[#26605f] underline">
                        No thanks, I just want a partial estate plan
                    </Link>
                </div>
            </div>
        </>
    );
};

export default page;
