"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import LockIcon from "@mui/icons-material/Lock";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const [ssn, setSSN] = useState("");
    const router = useRouter();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputSSN = event.target.value;
        // Remove any non-digit characters from the input
        const cleanedSSN = inputSSN.replace(/\D/g, "");
        setSSN(cleanedSSN);
    };

    const handleSubmit = () => {
        router.push("/q/protections");
    };

    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[60%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} text-left sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        What's your social security number?
                    </p>
                    <div className="flex flex-col text-[1.1rem] mt-8">
                        <input
                            type="password"
                            value={ssn}
                            onChange={handleChange}
                            placeholder="###-##-####"
                            minLength={9}
                            maxLength={9}
                            autoComplete="off"
                            className={
                                "w-full py-4 text-left px-4 sm:w-[496px] border bg-white border-gray-400 transition-all"
                            }
                            required
                        />
                        <Image
                            src="/norton-secured.png"
                            className="self-start mt-4"
                            alt="ssn"
                            height={120}
                            width={120}
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={ssn.length < 9}
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Next </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </button>
                    <p className="text-sm text-gray-800">
                        {" "}
                        <LockIcon /> We use secure encryption to protext your
                        data
                    </p>
                </div>
            </div>
        </>
    );
};

export default page;
