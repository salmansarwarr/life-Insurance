"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Header from "../components/Header";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
let willFlow: any;
try {
    willFlow =
        localStorage.getItem("flow") && localStorage.getItem("flow") == "will";
} catch (error) {
    willFlow = false;
}

const page = () => {
    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    {willFlow && (
                        <div className="w-[50%] h-full bg-[#054742]"></div>
                    )}
                </div>
                <div className="flex flex-col px-6 py-8 sm:items-center">
                    <p
                        className={`${playfair.className} text-[1.7rem] sm:text-center sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        Great! We'll get your rates in as little as 10 minutes
                    </p>
                    <div className="relative flex top-[25px] right-[110px]">
                        <div className="w-2 h-2 ml-[0.15rem] mt-[0.1rem] z-10 bg-green-500 rounded-full absolute"></div>
                        <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse absolute"></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-[1.25rem] self-start sm:self-auto pl-[1.3rem]">
                        <span className="font-semibold text-gray-900 mr-2">
                            599
                        </span>
                        policies approved today
                    </p>
                    <div className="relative flex top-[25px] right-[30px] sm:right-[250px] lg:right-[270px]">
                        <div className="absolute bg-[#054742] text-white font-medium py-1 uppercase text-[0.75rem] min-w-[147.72px] text-center">
                            How it works
                        </div>
                    </div>
                    <div className="flex flex-col self-center pt-[5rem] sm:border sm:px-20 lg:px-24 sm:py-7 sm:mt-[2.6rem] sm:border-black">
                        <div className="flex gap-4 items-center">
                            <div className="text-lg rounded-full w-[38px] h-[38px] flex justify-center items-center bg-[#deebff] text-[#054742] font-bold">
                                1
                            </div>
                            <p className="font-bold text-[#342626]">
                                Understand your coverage needs
                            </p>
                        </div>
                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="flex gap-4 mt-4 items-center">
                            <div className="text-lg rounded-full w-[38px] h-[38px] flex justify-center items-center bg-[#deebff] text-[#054742] font-bold">
                                2
                            </div>
                            <p className="font-bold text-[#342626]">
                                Confirm your eligibility
                            </p>
                        </div>
                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="flex gap-4 mt-4 items-center">
                            <div className="text-lg rounded-full w-[38px] h-[38px] flex justify-center items-center bg-[#deebff] text-[#054742] font-bold">
                                3
                            </div>
                            <p className="font-bold text-[#342626]">
                                Provide health & lifestyle info
                            </p>
                        </div>
                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="h-[0.5rem] ml-4 mt-2 w-full border border-l-black border-b-0 border-r-0 border-t-0"></div>
                        <div className="flex gap-4 mt-4 items-center">
                            <div className="text-lg rounded-full w-[38px] h-[38px] flex justify-center items-center bg-[#deebff] text-[#054742] font-bold">
                                4
                            </div>
                            <p className="font-bold text-[#342626]">
                                Get your coverage option
                            </p>
                        </div>
                    </div>
                    {!willFlow && (
                        <Link
                            href="/q/goals"
                            className="rounded-full bg-gray-200 sm:absolute sm:bottom-[-15px] sm:left-[90px] flex mt-12 justify-end pr-1 items-center h-[40px] w-[40px]"
                        >
                            <ArrowBackIosIcon
                                className="font-extralight text-gray-600"
                                fontSize="medium"
                            />
                        </Link>
                    )}
                    <Link
                        href={willFlow ? "q/intent" : "/q/gender"}
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Next: Coverage needs </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default page;
