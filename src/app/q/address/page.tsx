"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
let willFlow: any;
try {
    willFlow =
        localStorage.getItem("flow") && localStorage.getItem("flow") == "will";
} catch (error) {
    willFlow = false;
}

interface Address {
    streetAdress: string | undefined;
    apt: string | undefined;
}

const page = () => {
    const [address, setAddress] = useState<Address>();
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        //@ts-ignore
        setAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        router.push("/q/mobile");
    };

    return (
        <>
            <Header />
            <div>
                {willFlow ? (
                    <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                        <div className="w-[85%] h-2 bg-[#054742]"></div>
                        <p className="px-4 pb-2">
                            PART 2:
                            <span className="font-medium ml-2">
                                CONFIRM ELIGIBILITY
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="h-[0.5rem] w-full bg-gray-100">
                        <div className="w-[45%] h-full bg-[#054742]"></div>
                    </div>
                )}
                <div className="flex flex-col px-6 py-8 sm:py-12 sm:items-center">
                    <p
                        className={`${playfair.className} text-left sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        What's your home address?
                    </p>
                    <p className="mt-2 text-left sm:w-[496px]">
                        This helps us verify your identity so you can
                        <span className="text-[#054742] ml-2 font-semibold border-b border-dotted border-b-[#054742]">
                            get your Real Rate
                        </span>
                        , not just an estimate.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 text-[1.1rem] mt-8">
                        <input
                            type="text"
                            name="streetAdress"
                            placeholder="STREET ADDRESS, CITY, STATE"
                            value={address?.streetAdress}
                            onChange={handleChange}
                            className={
                                "w-full py-4 text-left px-4 sm:w-[406px] border bg-white border-gray-400 transition-all"
                            }
                        />
                        <input
                            type="text"
                            name="apt"
                            value={address?.apt}
                            placeholder="APT #"
                            onChange={handleChange}
                            className={
                                "py-4 text-left px-4 w-[90px] border bg-white border-gray-400 transition-all"
                            }
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={
                            !address || !address.apt || !address.streetAdress
                        }
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
