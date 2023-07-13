"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
                    <div className="w-[5%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 1:
                        <span className="font-medium">
                            ESTATE PLANNING OVERVIEW
                        </span>
                    </p>
                </div>
                <div className="flex flex-col px-6 py-8 sm:items-center">
                    <Image
                        src="/getting-started.svg"
                        alt="estate"
                        height={500}
                        width={500}
                        className="mt-4"
                    />
                    <p
                        className={`${playfair.className} text-[2rem] sm:text-[2.2rem] leading-tight mt-8`}
                    >
                        Congrats on getting started.
                    </p>
                    <p className="text-gray-800 mt-6 max-w-[500px] mb-4">
                        On average, it takes 13 months and four family members
                        to settle a loved one’s affairs. By thinking about
                        end-of-life planning now, you’re protecting your
                        family’s future. Great job 🎉
                    </p>
                    <Link
                        href="/q/canBeHard"
                        className="rounded-full bg-gray-200 sm:absolute sm:bottom-[-15px] sm:left-[90px] flex mt-12 justify-end pr-1 items-center h-[40px] w-[40px]"
                    >
                        <ArrowBackIosIcon
                            className="font-extralight text-gray-600"
                            fontSize="medium"
                        />
                    </Link>
                    <Link
                        href="/q/epgNeeds"
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
