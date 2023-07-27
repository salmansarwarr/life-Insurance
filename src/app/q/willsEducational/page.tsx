"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "../components/Header";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    return (
        <>
            <Header />
            <div>
                <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                    <div className="w-[70%] h-2 bg-[#054742]"></div>
                </div>
                <div className="flex flex-col px-6 py-8 sm:items-center">
                    <p
                        className={`${playfair.className} text-[1.8rem] sm:text-[2.1rem] leading-tight mt-8`}
                    >
                        Minalife policies include a legal will
                    </p>
                    <p className="text-gray-800 mt-6 max-w-[500px]">
                        Creating a will is fast, simple, and free.
                    </p>
                    <p className="text-gray-800 my-4 max-w-[500px]">
                        We'll help you plan for the future so you can enjoy
                        peace of mind.
                    </p>
                    <Image
                        src="/FamilyCoveredWithUmbrella.svg"
                        alt="estate"
                        height={220}
                        width={220}
                        className="mt-4"
                    />

                    <Link
                        href="/q/income"
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
