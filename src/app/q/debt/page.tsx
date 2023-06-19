"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const [debt, setDebt] = useState("");
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputdebt = event.target.value;
        // Remove any non-digit and non-decimal characters from the input
        const cleaneddebt = inputdebt.replace(/[^0-9.]/g, "");
        setDebt(cleaneddebt);
    };

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const inputdebt = event.currentTarget.value;
        setDebt(inputdebt);
    };

    const handleSubmit = () => {
        router.push("/q/recommendation");
    };

    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[90%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} text-left sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        How much remaining debt/mortage do you have?
                    </p>
                    <div className="flex  text-[1.1rem] mt-8">
                        <input
                            type="text"
                            value={debt}
                            onChange={handleChange}
                            onInput={handleInput}
                            className={
                                "w-full py-4 text-left px-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                            placeholder="Enter debt in dollars"
                            required
                        />
                    </div>
                    <p className="bg-[#deebff] mt-6 text-sm sm:text-base text-gray-800 items-start flex gap-4 px-4 py-8 sm:w-[490px]">
                        <LightbulbOutlinedIcon
                            fontSize="large"
                            color="inherit"
                        />
                        This helps us estimate your coverage needs
                    </p>
                    <button
                        onClick={handleSubmit}
                        disabled={debt == ""}
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
