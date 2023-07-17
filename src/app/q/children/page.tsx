"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
const willFlow = localStorage.getItem("flow") && localStorage.getItem("flow") == "will";

const page = () => {
    const router = useRouter();
    const children = ["0", "1", "2", "3", "4+"];
    const [selectedChildren, setselectedChildren] = useState<string>();
    const selectedStyles =
        "p-4 border border-[#054742] text-[#054742] font-bold flex gap-2 flex-col justify-center text-center items-center";
    const unSelectedStyles =
        "p-4 border border-gray-400 flex gap-2 flex-col justify-center text-center items-center";

    const handleClick = (name: string) => {
        setselectedChildren(name);
    };

    const handleSubmit = () => {
        willFlow ? router.push("/q/incomeDebt") : router.push("/q/estate-plan");
    };

    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    {willFlow ? (
                        <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                            <div className="w-[15%] h-2 bg-[#054742]"></div>
                            <p className="px-4 pb-2">
                                PART 2:
                                <span className="font-medium">
                                    ASSESS YOUR NEEDS
                                </span>
                            </p>
                        </div>
                    ) : (
                        <div className="w-[70%] h-full bg-[#054742]"></div>
                    )}
                </div>
                <div className="flex flex-col py-14 sm:py-20 px-5 items-center">
                    <p
                        className={`${playfair.className} text-left text-[1.75rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        How many children do you have?
                    </p>
                    <p className="mt-4 text-sm text-gray-800 w-full text-center sm:text-left sm:w-[470px]">
                        This helps us customize our plan
                    </p>
                    <div className="grid gap-4 grid-cols-5 sm:w-[490px] mt-6 text-[0.8rem] text-black">
                        <button
                            onClick={() => handleClick(children[0])}
                            className={
                                selectedChildren == children[0]
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            0
                        </button>
                        <button
                            onClick={() => handleClick(children[1])}
                            className={
                                selectedChildren == children[1]
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            1
                        </button>
                        <button
                            onClick={() => handleClick(children[2])}
                            className={
                                selectedChildren == children[2]
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            2
                        </button>
                        <button
                            onClick={() => handleClick(children[3])}
                            className={
                                selectedChildren == children[3]
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            3
                        </button>
                        <button
                            onClick={() => handleClick(children[4])}
                            className={
                                selectedChildren == children[4]
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            4+
                        </button>
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
                        disabled={!selectedChildren}
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
