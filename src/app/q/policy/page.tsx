"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const router = useRouter();

    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[80%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} text-center sm:w-[530px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[530px]`}
                    >
                        Minalife policies include a legal will
                    </p>
                    <div className="flex text-sm flex-col max-w-[496px] text-center gap-2 text-[1.1rem] mt-8">
                       <p>Creating a will is fast, simple and free</p>
                       <p>We'll help you plan for the future si you can enjoy peace of mind ⓘ</p>
                    </div>
                    <Image src="/estate.svg" className="mt-6 mx-auto" alt="estate" height={200} width={200}/>
                    <Link
                        href="/q/annual-pre-tax-income"
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Next </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default page;
