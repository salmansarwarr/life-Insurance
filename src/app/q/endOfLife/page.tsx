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
    const estatePlanningGoals = [1, 2, 3, 4, 5, 6];
    const [selectedGoals, setSelectedGoals] = useState<Number[]>([]);
    const selectedStyles =
        "p-4 border border-[#054742] text-[#054742] font-bold flex gap-2 flex-col justify-center text-center items-center";
    const unSelectedStyles =
        "p-4 border border-gray-400 flex gap-2 flex-col justify-center text-center items-center";

    const handleClick = (goal: Number) => {
        if (!selectedGoals.includes(goal)) {
            setSelectedGoals((prev) => [...prev, goal]);
        } else {
            setSelectedGoals((prev) =>
                prev.filter((prevGoal) => prevGoal !== goal)
            );
        }
    };

    const handleSubmit = () => {
        router.push("/q/estateDecisions");
    };

    const isSelected = (goal: Number) => {
        return selectedGoals.includes(goal);
    };

    return (
        <>
            <Header />
            <div>
                <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                    <div className="w-[20%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 2:
                        <span className="font-medium">ASSESS YOUR NEEDS</span>
                    </p>
                </div>
                <div className="flex flex-col py-14 sm:py-20 px-5 items-center">
                    <p
                        className={`${playfair.className} text-[1.75rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        What are your estate planning goals?
                    </p>
                    <p className="mt-4 text-sm text-gray-700 text-left sm:w-[490px]">
                        Select all that apply.
                    </p>
                    <div className="grid gap-4 grid-cols-2 sm:w-[490px] mt-6 text-[0.8rem] text-black">
                        <button
                            onClick={() => handleClick(estatePlanningGoals[0])}
                            className={
                                isSelected(estatePlanningGoals[0])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <Image
                                src="/Handshake.svg"
                                alt="Handshake"
                                height={55}
                                width={55}
                            />
                            <p>Ensure my things pass to the right people</p>
                        </button>
                        <button
                            onClick={() => handleClick(estatePlanningGoals[1])}
                            className={
                                isSelected(estatePlanningGoals[1])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <Image
                                src="/CoinHand.svg"
                                alt="CoinHand"
                                height={40}
                                width={40}
                            />
                            <p>Ease the financial burden on my family</p>
                        </button>
                        <button
                            onClick={() => handleClick(estatePlanningGoals[2])}
                            className={
                                isSelected(estatePlanningGoals[2])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <Image
                                src="/SmilingChild.svg"
                                alt="GraduationCap"
                                height={55}
                                width={55}
                            />
                            <p>Set up a plan for my kids</p>
                        </button>
                        <button
                            onClick={() => handleClick(estatePlanningGoals[3])}
                            className={
                                isSelected(estatePlanningGoals[3])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <Image
                                src="/GraduationCap.svg"
                                alt="other"
                                height={40}
                                width={40}
                            />
                            <p>Make sure my kids can pay for college</p>
                        </button>
                        <button
                            onClick={() => handleClick(estatePlanningGoals[4])}
                            className={
                                isSelected(estatePlanningGoals[4])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <Image
                                src="/HouseHand.svg"
                                alt="HouseHand"
                                height={35}
                                width={35}
                            />
                            <p>Make sure my family stay in the house</p>
                        </button>
                        <button
                            onClick={() => handleClick(estatePlanningGoals[5])}
                            className={
                                isSelected(estatePlanningGoals[5])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <Image
                                src="/CrossedFingers.svg"
                                alt="other"
                                height={25}
                                width={25}
                            />
                            <p>Something else</p>
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
