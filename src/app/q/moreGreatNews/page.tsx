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
                    <div className="w-[40%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 3:
                        <span className="font-medium ml-1">
                            REVIEW YOUR CUSTOM PLAN
                        </span>
                    </p>
                </div>
                <div className="flex flex-col px-6 py-8 sm:items-center mt-2">
                    <Image
                        src="/more-great-news.svg"
                        alt="more-great-news"
                        height={260}
                        width={260}
                    />
                    <p
                        className={`${playfairMd.className} my-4 text-[2rem] sm:text-[2.4rem] leading-tight max-w-[500px]`}
                    >
                        More great news
                    </p>
                    <p className="text-xl font-medium max-w-[480px] text-center mt-2">
                        Your estate plan is free when you purchase life
                        insurance
                    </p>
                    <div className="flex items-center gap-2 sm:w-[486px] mt-6">
                        <MdDone fontSize="large" />
                        <p>Our life insurance is 100% online and easy</p>
                    </div>
                    <div className="flex items-center gap-2 sm:w-[486px] mt-2">
                        <MdDone fontSize="large" />
                        <p>
                            No medical exams - receive a quote in about 10
                            minutes
                        </p>
                    </div>
                    <div className="flex items-center gap-2 sm:w-[486px] mt-2">
                        <MdDone fontSize="large" />
                        <p>
                            Protect your family with up to $2 million in
                            coverage
                        </p>
                    </div>
                    <p className="mt-4 text-xl sm:text-2xl text-center">
                        <span className="text-gray-700 mr-3">$̶4̶4̶9̶.̶0̶0̶</span>
                        $0.00
                    </p>
                    <Link
                        href="/q/getYouCovered"
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
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
