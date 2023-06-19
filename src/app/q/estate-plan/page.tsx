"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const [estatePlan, setEstatePlan] = useState("");
    const router = useRouter();

    const handleChange = (
        e: MouseEvent<HTMLInputElement, globalThis.MouseEvent>
    ) => {
        //@ts-ignore
        if(e.target.value == "I'm not sure") {
            setEstatePlan("not-sure"); 
        } else {
            //@ts-ignore
            setEstatePlan(e.target.value.toLowerCase());
        }
    };

    const handleSubmit = () => {
        router.push("/q/policy");
    };

    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[75%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        Do you have an estate plan or will in place?
                    </p>
                    <div className="flex flex-col gap-2 text-[1.1rem] mt-8">
                        <input
                            type="button"
                            name="estatePlan"
                            value="Yes"
                            //@ts-ignore
                            onClick={handleChange}
                            className={
                                estatePlan == "yes"
                                    ? "w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                        />
                        <input
                            type="button"
                            name="estatePlan"
                            value="No"
                            //@ts-ignore
                            onClick={handleChange}
                            className={
                                estatePlan == "no"
                                    ? "w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                        />
                                                <input
                            type="button"
                            name="estatePlan"
                            value="I'm not sure"
                            //@ts-ignore
                            onClick={handleChange}
                            className={
                                estatePlan == "not-sure"
                                    ? "w-full py-4 sm:w-[496px] border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={estatePlan == ""}
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
