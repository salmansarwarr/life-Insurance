"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";
let willFlow: any;
try {
    willFlow =
        localStorage.getItem("flow") && localStorage.getItem("flow") == "will";
} catch (error) {
    willFlow = false;
}
const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        if (isValidEmail(email)) {
            willFlow ? router.push('#') : router.push("/q/ssn");
        } else {
            alert("Enter a valid phone number");
        }
    };

    const isValidEmail = (email: string): boolean => {
        // Regular expression pattern for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <Header />
            <div>
                {willFlow ? (
                    <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                        <div className="w-[90%] h-2 bg-[#054742]"></div>
                        <p className="px-4 pb-2">
                            PART 2:
                            <span className="font-medium ml-2">
                                CONFIRM ELIGIBILITY
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="h-[0.5rem] w-full bg-gray-100">
                        <div className="w-[55%] h-full bg-[#054742]"></div>
                    </div>
                )}
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} text-left sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        What's your email?
                    </p>
                    <div className="flex  text-[1.1rem] mt-8">
                        <input
                            type="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="example@minalife.com"
                            className={
                                "w-full py-4 text-left px-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                            required
                        />
                    </div>
                    <p className="mt-4 text-sm text-gray-800">
                        {" "}
                        <LockIcon /> We use secure encryption to protext your
                        data
                    </p>
                    <button
                        onClick={handleSubmit}
                        disabled={!isValidEmail(email)}
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 my-6 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Next </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </button>
                    {willFlow && <p className="text-sm">Already have an account? <Link className="underline" href="/login">Log in Here</Link> </p>}
                </div>
            </div>
        </>
    );
};

export default page;
