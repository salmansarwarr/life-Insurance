"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
const willFlow = localStorage.getItem("flow") && localStorage.getItem("flow") == "will";

const page = () => {
    const [intent, setIntent] = useState("");
    const router = useRouter();

    const handleSubmit = () => {
        willFlow ? router.push("/q/gender") : router.push("/q/country");
    };

    return (
        <>
            <Header />
            <div>
                <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                    <div className="w-[60%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 1:
                        <span className="font-medium ml-2">COVERAGE NEEDS</span>
                    </p>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        When would you like to be covered by life insurance?
                    </p>
                    <div className="flex flex-col gap-2 text-[1.1rem] mt-8">
                        <button
                            className={
                                intent == "today"
                                    ? "text-left px-5 w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "text-left px-5 w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                            onClick={() => setIntent("today")}
                        >
                            I'm ready today
                        </button>
                        <button
                            className={
                                intent == "week"
                                    ? "text-left px-5 w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "text-left px-5 w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                            onClick={() => setIntent("week")}
                        >
                            Within a week
                        </button>
                        <button
                            className={
                                intent == "months"
                                    ? "text-left px-5 w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "text-left px-5 w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                            onClick={() => setIntent("months")}
                        >
                            In a few months
                        </button>
                        <button
                            className={
                                intent == "not-sure"
                                    ? "text-left px-5 w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "text-left px-5 w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                            onClick={() => setIntent("not-sure")}
                        >
                            I'm not sure
                        </button>
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={intent == ""}
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Next </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default page;
