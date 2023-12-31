"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const [martialStatus, setMartialStatus] = useState("");
    const router = useRouter();

    const handleChange = (
        e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
    ) => {
        //@ts-ignore
        e.target.value == "Donestic Partner"
            ? setMartialStatus("domestic")
            //@ts-ignore
            : setMartialStatus(e.target.value.toLowerCase());
    };

    const handleSubmit = () => {
        martialStatus == "single" || martialStatus == "engaged"
            ? router.push("/q/incomeDebt")
            : router.push("/q/children");
    };

    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[10%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} sm:w-[520px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight`}
                    >
                        What’s your current marital status?
                    </p>
                    <div className="flex flex-col gap-2 text-[1.1rem] mt-8">
                        <input
                            type="button"
                            name="martialStatus"
                            value="Single"
                            //@ts-ignore
                            onClick={handleChange}
                            className={
                                martialStatus == "single"
                                    ? "w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                        />
                        <input
                            type="button"
                            name="martialStatus"
                            value="Married"
                            //@ts-ignore
                            onClick={handleChange}
                            className={
                                martialStatus == "married"
                                    ? "w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                        />
                        <input
                            type="button"
                            name="martialStatus"
                            value="Donestic Partner"
                            //@ts-ignore
                            onClick={handleChange}
                            className={
                                martialStatus == "domestic"
                                    ? "w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                        />
                        <input
                            type="button"
                            name="martialStatus"
                            value="Engaged"
                            //@ts-ignore
                            onClick={handleChange}
                            className={
                                martialStatus == "engaged"
                                    ? "w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={martialStatus == ""}
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
