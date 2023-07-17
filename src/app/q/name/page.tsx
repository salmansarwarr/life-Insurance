"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

interface Name {
    firstName: string | undefined;
    lastName: string | undefined;
}

const page = () => {
    const [name, setName] = useState<Name>();
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        //@ts-ignore
        setName((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        router.push("/q/email");
    };

    return (
        <>
            <Header />
            <div>
                <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                    <div className="w-[90%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 2:
                        <span className="font-medium ml-2">
                            CONFIRM ELIGIBILITY
                        </span>
                    </p>
                </div>

                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} text-left sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        What’s your name?
                    </p>
                    <div className="gap-2 flex flex-col text-[1.1rem] mt-8">
                        <label htmlFor="firstName" className="text-sm text-gray-500">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={name?.firstName}
                            onChange={handleChange}
                            className={
                                "w-full py-4 text-left px-4 sm:w-[406px] border bg-white border-gray-400 transition-all"
                            }
                        />
                        <label htmlFor="lastName" className="text-sm text-gray-500">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={name?.lastName}
                            onChange={handleChange}
                            className={
                                "w-full py-4 text-left px-4 sm:w-[406px] border bg-white border-gray-400 transition-all"
                            }
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={!name || !name.firstName || !name.lastName}
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
