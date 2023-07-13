"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const [annualIncome, setAnnualIncome] = useState("");
    const [debt, setDebt] = useState("");
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputAmount = event.target.value;
        // Remove any non-digit and non-decimal characters from the input
        const cleanedAmount = inputAmount.replace(/[^0-9.]/g, "");

        if (event.target.name == "debt") {
            setDebt(cleanedAmount);
        } else {
            setAnnualIncome(cleanedAmount);
        }
    };

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const inputAmount = event.currentTarget.value;
        if (event.target.name == "debt") {
            setDebt(inputAmount);
        } else {
            setAnnualIncome(inputAmount);
        }
    };

    const handleSubmit = () => {
        router.push("/q/endOfLife");
    };

    return (
        <>
            <Header />
            <div>
                <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                    <div className="w-[15%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 2:
                        <span className="font-medium">ASSESS YOUR NEEDS</span>
                    </p>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} text-left sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        Tell us a little bit about your finances so we can find
                        the right tools for you:
                    </p>
                    <div className="flex flex-col text-[1.1rem] mt-8">
                        <label
                            htmlFor="income"
                            className="text-sm text-gray-600 mb-1"
                        >
                            Annual Income
                        </label>
                        <input
                            type="text"
                            value={annualIncome}
                            name="income"
                            autoComplete="off"
                            onChange={handleChange}
                            onInput={handleInput}
                            className={
                                "w-full py-4 text-left px-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                            placeholder="Enter amount in dollars"
                            required
                        />
                    </div>
                    <div className="flex flex-col text-[1.1rem] mt-8">
                        <label
                            htmlFor="debt"
                            className="text-sm text-gray-600 mb-1"
                        >
                            Debt
                        </label>
                        <input
                            type="text"
                            value={debt}
                            autoComplete="off"
                            name="debt"
                            onChange={handleChange}
                            onInput={handleInput}
                            className={
                                "w-full py-4 text-left px-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                            placeholder="Enter amount in dollars"
                            required
                        />
                    </div>
                    <p className="bg-[#deebff] mt-6 text-sm text-gray-800 items-start flex gap-4 px-4 py-8 sm:w-[490px]">
                        <LightbulbOutlinedIcon
                            fontSize="large"
                            color="inherit"
                        />
                        Getting an estimate of your income and debt helps us
                        understand your estate planning needs.
                    </p>
                    <button
                        onClick={handleSubmit}
                        disabled={annualIncome == ""}
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
