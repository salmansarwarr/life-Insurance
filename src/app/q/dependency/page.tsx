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
    const dependency = [
        "partner",
        "children",
        "parent",
        "other",
    ];
    const [selectedDependencies, setselectedDependencies] = useState<string[]>([]);
    const selectedStyles =
        "p-4 border border-[#054742] text-[#054742] font-bold flex gap-2 flex-col justify-center text-center items-center";
    const unSelectedStyles =
        "p-4 border border-gray-400 flex gap-2 flex-col justify-center text-center items-center";

    const handleClick = (name: string) => {
        localStorage.setItem('depend', name);
        if (!selectedDependencies.includes(name)) {
            setselectedDependencies((prev) => [...prev, name]);
        } else {
            setselectedDependencies((prev) => prev.filter((goal) => goal !== name));
        }
    };


    const handleSubmit = () => {
        router.push('/q/children');
    }

    const isSelected = (name: string) => {
        return selectedDependencies.includes(name);
    };

    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[65%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col py-14 sm:py-20 px-5 items-center">
                    <p
                        className={`${playfair.className} text-[1.75rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        Who depends on you financially?
                    </p>
                    <p className="mt-4 text-sm text-gray-800 text-left sm:w-[490px]">This helps us customize our plan</p>
                    <div className="grid gap-4 grid-cols-2 sm:w-[490px] mt-6 text-[0.8rem] text-black">
                        <button
                            onClick={() => handleClick(dependency[0])}
                            className={
                                isSelected(dependency[0])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>Partner</p>
                            <Image
                                src="/partner.png"
                                alt="partner"
                                height={55}
                                width={55}
                            />
                        </button>
                        <button
                            onClick={() => handleClick(dependency[1])}
                            className={
                                isSelected(dependency[1])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>Children</p>
                            <Image
                                src="/children.png"
                                alt="children"
                                height={85}
                                width={85}
                            />
                        </button>
                        <button
                            onClick={() => handleClick(dependency[2])}
                            className={
                                isSelected(dependency[2])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>Parent</p>
                            <Image
                                src="/home.png"
                                alt="parent"
                                height={55}
                                width={55}
                            />
                        </button>
                        <button
                            onClick={() => handleClick(dependency[3])}
                            className={
                                isSelected(dependency[3])
                                    ? selectedStyles
                                    : unSelectedStyles
                            }
                        >
                            <p>Other</p>
                            <Image
                                src="/other.png"
                                alt="other"
                                height={40}
                                width={40}
                            />
                        </button>
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={selectedDependencies.length == 0}
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
