"use client";

import Image from "next/image";
import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const router = useRouter();
    const goals = [
        "protect-loved-ones",
        "pay-off-mortage",
        "prepare-family-future",
        "peace-of-mind",
        "cover-final-expenses",
        "not-sure",
    ];
    const [selectedGoals, setselectedGoals] = useState<string[]>([]);
    const selectedStyles =
        "p-4 border border-[#054742] text-[#054742] font-bold flex gap-2 flex-col justify-center text-center items-center";
    const unSelectedStyles =
        "p-4 border border-gray-400 flex gap-2 flex-col justify-center text-center items-center";

    const handleClick = (name: string) => {
        if (!selectedGoals.includes(name)) {
            setselectedGoals((prev) => [...prev, name]);
        } else {
            setselectedGoals((prev) => prev.filter((goal) => goal !== name));
        }
    };

    const handleSubmit = () => {
        router.push('/q/how-it-works');
    }

    const isSelected = (name: string) => {
        return selectedGoals.includes(name);
    };

    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[5%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col py-14 sm:py-20 px-5 items-center">
                    <p
                        className={`${playfair.className} text-[1.75rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        Let's get started! What are your goals for life
                        insurance?
                    </p>
                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 sm:max-w-[496px] mt-6 text-[0.8rem] text-black">
                        <button
                            onClick={() => handleClick(goals[0])}
                            className={
                                isSelected(goals[0])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>I want to protect my loved ones</p>
                            <Image
                                src="/protect love ones-01.png"
                                alt="money"
                                height={55}
                                width={55}
                            />
                        </button>
                        <button
                            onClick={() => handleClick(goals[1])}
                            className={
                                isSelected(goals[1])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>I want to pay off my mortgage</p>
                            <Image
                                src="/pay off my mortgage-01.png"
                                alt="money"
                                height={55}
                                width={55}
                            />
                        </button>
                        <button
                            onClick={() => handleClick(goals[2])}
                            className={
                                isSelected(goals[2])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>I want to prepare for my family's future</p>
                            <Image
                                src="/prepare my family's future-01.png"
                                alt="money"
                                height={55}
                                width={55}
                            />
                        </button>
                        <button
                            onClick={() => handleClick(goals[3])}
                            className={
                                isSelected(goals[3])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>I'm looking for peace of mind</p>
                            <Image
                                src="/peace of mind 2-01.png"
                                alt="money"
                                height={55}
                                width={55}
                            />
                        </button>
                        <button
                            onClick={() => handleClick(goals[4])}
                            className={
                                isSelected(goals[4])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>I want to cover my final expenses</p>
                            <Image
                                src="/cover my final expenses 2-01 (2).png"
                                alt="money"
                                height={55}
                                width={55}
                            />
                        </button>
                        <button
                            onClick={() => handleClick(goals[5])}
                            className={
                                isSelected(goals[5])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>I'm not sure</p>
                            <Image
                                src="/i'm not sure-01.png"
                                alt="money"
                                height={55}
                                width={55}
                            />
                        </button>
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={selectedGoals.length == 0}
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
