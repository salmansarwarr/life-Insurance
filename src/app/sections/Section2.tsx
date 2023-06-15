"use client";

import LinearProgress from "@mui/material/LinearProgress";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const Section1 = () => {
    return (
        <div className="flex flex-col items-center mb-8 px-4 sm:px-24 xl:px-60 font-light text-[#323232]">
            <Image alt="google" src="/google.png" width={130} height={130} />
            <p className="text-[0.78rem] font-semibold mt-4">
                4.7/5 827 reviews
            </p>
            <p
                className={`${dmSerif.className} max-w-[900px] mt-8 text-[1.85rem] sm:text-[2.2rem] xl:text-[2.5rem] leading-[1.15] text-center font-extralight`}
            >
                “Excellent prices for insurance policies...especially
                considering NO EXAM!”
            </p>
            <p className="font-bold mt-10 xl:mt-14">Jim Harris</p>
            <p className="text-[0.7rem]">Febraury 2022</p>
        </div>
    );
};

const Section2 = () => {
    return (
        <div className="flex flex-col items-center mb-8 px-4 sm:px-24 xl:px-60 text-[#323232]">
            <Image
                alt="google"
                src="/trustPilot.png"
                width={130}
                height={130}
            />
            <p className="text-[0.78rem] font-semibold mt-4">
                4.8/5 887 reviews
            </p>
            <p
                className={`${dmSerif.className} max-w-[900px] mt-8 text-[1.85rem] sm:text-[2.2rem] xl:text-[2.5rem] leading-[1.15] text-center font-extralight`}
            >
                “It took about 5 minutes and I was insured instantly for 1.2
                million.”
            </p>
            <p className="font-bold mt-10 xl:mt-14">Shirley Walker</p>
            <p className="text-[0.7rem]">Febraury 2023</p>
        </div>
    );
};

const Section3 = () => {
    return (
        <div className="flex flex-col items-center mb-8 px-4 sm:px-24 xl:px-60 text-[#323232]">
            <Image alt="google" src="/google.png" width={130} height={130} />
            <p className="text-[0.78rem] font-semibold mt-4">
                4.7/5 827 reviews
            </p>
            <p
                className={`${dmSerif.className} max-w-[900px] mt-8 text-[1.85rem] sm:text-[2.2rem] xl:text-[2.5rem] leading-[1.15] text-center font-extralight`}
            >
                “Loved how easy it was to compare and customize the policy
                coverage amount.”
            </p>
            <p className="font-bold mt-10 xl:mt-14">Mike Chapman</p>
            <p className="text-[0.7rem]">Febraury 2022</p>
        </div>
    );
};

const Section4 = () => {
    return (
        <div className="flex flex-col items-center sm:px-24 xl:px-60 mb-8 px-4 text-[#323232]">
            <Image
                alt="google"
                src="/trustPilot.png"
                width={130}
                height={130}
            />
            <p className="text-[0.78rem] font-semibold mt-4">
                4.8/5 887 reviews
            </p>
            <p
                className={`${dmSerif.className} max-w-[900px] mt-8 text-[1.85rem] sm:text-[2.2rem] xl:text-[2.5rem] leading-[1.15] text-center font-extralight`}
            >
                “Love the bonus complimentary estate planning aids.”
            </p>
            <p className="font-bold mt-10 xl:mt-14">K.L.</p>
            <p className="text-[0.7rem]">January 2023</p>
        </div>
    );
};

const Section5 = () => {
    return (
        <div className="flex flex-col items-center mb-8 px-4 sm:px-24 xl:px-60 text-[#323232]">
            <Image alt="google" src="/google.png" width={130} height={130} />
            <p className="text-[0.78rem] font-semibold mt-4">
                4.7/5 827 reviews
            </p>
            <p
                className={`${dmSerif.className} max-w-[900px] mt-8 text-[1.85rem] sm:text-[2.2rem] xl:text-[2.5rem] leading-[1.15] text-center font-extralight`}
            >
                Minalife has brought me so much relief knowing my family will be
                taken care of.”
            </p>
            <p className="font-bold mt-10 xl:mt-14">Georgia Oonkeo</p>
            <p className="text-[0.7rem]">March 2022</p>
        </div>
    );
};

const SectionContainer = ({
    currentProgressBar,
}: {
    currentProgressBar: number;
}) => {
    switch (currentProgressBar) {
        case 0:
            return <Section1 />;
        case 1:
            return <Section2 />;
        case 2:
            return <Section3 />;
        case 3:
            return <Section4 />;
        case 4:
            return <Section5 />;
        default:
            return null;
    }
};

const App = () => {
    const [progress, setProgress] = useState(0);
    const [currentProgressBar, setCurrentProgressBar] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    setCurrentProgressBar((prev) => (prev + 1) % 5);
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 400);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const progressBars = [0, 1, 2, 3, 4];

    const handleProgressBarClick = (index: number) => {
        setCurrentProgressBar(index);
        setProgress(0);
    };

    return (
        <div className="py-12">
            <SectionContainer currentProgressBar={currentProgressBar} />
            <div className="flex gap-1 justify-center text-green-600">
                {progressBars.map((index) => (
                    <div
                        key={index}
                        className="w-[10%] max-w-[100px] cursor-pointer"
                        onClick={() => handleProgressBarClick(index)}
                    >
                        <LinearProgress
                            className="h-[3px] bg-slate-300"
                            color={
                                index === currentProgressBar
                                    ? "inherit"
                                    : undefined
                            }
                            variant="determinate"
                            value={index === currentProgressBar ? progress : 0}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
