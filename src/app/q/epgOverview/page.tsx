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
                <div className="h-[0.5rem] w-full bg-gray-100"></div>
                <div className="flex flex-col px-6 py-8 sm:items-center">
                    <p
                        className={`${playfairMd.className} text-[2rem] sm:text-[2.4rem] leading-tight max-w-[500px]`}
                    >
                        Find the best estate plan for you in minutes.
                    </p>
                    <div className="relative flex top-[25px] right-[30px] sm:right-[250px] lg:right-[270px]">
                        <div className="absolute bg-[#054742] text-white font-medium py-1 uppercase text-[0.75rem] min-w-[147.72px] text-center">
                            How it works
                        </div>
                    </div>
                    <div className="flex flex-col pt-[5rem] sm:w-[500px] sm:py-7 sm:mt-[3rem]">
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/needs_4e.svg"
                                alt="needs"
                                height={60}
                                width={60}
                            />
                            <p className="font-bold text-[#342626]">
                                Understand your coverage need
                            </p>
                        </div>

                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="flex gap-4 mt-4 items-center">
                            <Image
                                src="/overview_9c..svg"
                                alt="needs"
                                height={60}
                                width={60}
                            />
                            <p className="font-bold text-[#342626]">
                                Confirm your eligibility
                            </p>
                        </div>
                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="flex gap-4 mt-4 items-center">
                            <Image
                                src="/plan_6.svg"
                                alt="needs"
                                height={60}
                                width={60}
                            />
                            <p className="font-bold text-[#342626]">
                                Provide health & lifestyle info
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/q/haveAnEstate"
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
