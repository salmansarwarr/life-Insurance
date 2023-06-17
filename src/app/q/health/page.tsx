"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const [health, setHealth] = useState("");
    const router = useRouter();

    const handleChange = (
        e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
    ) => {
        //@ts-ignore
        setHealth(e.target.value.toLowerCase());
    };

    const handleSubmit = () => {
        router.push("/q/nicotine");
    };

    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[20%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        How is your health?
                    </p>
                    <div className="flex flex-col gap-2 text-[1.1rem] mt-8">
                        <input
                            type="button"
                            name="health"
                            value="Average"
                            //@ts-ignore
                            onClick={handleChange}
                            className={
                                health == "average"
                                    ? "w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                        />
                        <input
                            type="button"
                            name="health"
                            value="Great"
                            //@ts-ignore
                            onClick={handleChange}
                            className={
                                health == "great"
                                    ? "w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={health == ""}
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
