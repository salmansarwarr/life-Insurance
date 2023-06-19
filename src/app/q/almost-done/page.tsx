"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[99%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} text-left sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2.5rem] leading-tight max-w-[500px]`}
                    >
                        You're almost done
                    </p>
                    <p className="mt-2 text-left sm:w-[496px]">
                        Thank you for answering all of our questions! We found a
                        policy that may be a good fit for you.
                    </p>
                    <ul className="list-disc sm:w-[496px] mt-6 gap-4 flex flex-col">
                        <li>
                            Continue on to {"{Insurance Platform}"} underwritten
                            by MinaLife Insurance Company to submit your
                            application
                        </li>
                        <li>
                            Some of your information will be pre-filled, but you
                            may have to re-enter some details.
                        </li>
                        <li>
                            There are no medical exams and most customers
                            receive an instant decision online.
                        </li>
                    </ul>
                    <Link
                        href="/q/calculated-policy"
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Continue to TrueStage® </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default page;
