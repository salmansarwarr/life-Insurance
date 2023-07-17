"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
const willFlow = localStorage.getItem("flow") && localStorage.getItem("flow") == "will";

const page = () => {
    const [birthday, setBirthday] = useState<Date>();
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setBirthday(e.target.value);
    };

    const handleSubmit = () => {
        router.push("/q/health");
    };

    return (
        <>
            <Header />
            <div>
                {willFlow ? (
                    <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                        <div className="w-[60%] h-2 bg-[#054742]"></div>
                        <p className="px-4 pb-2">
                            PART 1:
                            <span className="font-medium ml-2">
                                COVERAGE NEEDS
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="h-[0.5rem] w-full bg-gray-100">
                        <div className="w-[15%] h-full bg-[#054742]"></div>
                    </div>
                )}
                <div className="flex flex-col px-6 py-8 sm:py-14 sm:items-center">
                    <p
                        className={`${playfair.className} sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        What's your Birthdate?
                    </p>
                    <div className="text-[1.1rem] mt-8">
                        <input
                            type="date"
                            name="birthday"
                            onChange={handleChange}
                            //@ts-ignore
                            value={birthday}
                            className="mt-2 w-full px-3 py-4 border bg-white sm:w-[496px] border-gray-400"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={birthday == undefined}
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
