"use client";

import Image from "next/image";
import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
const depend = localStorage.getItem("depend");
let willFlow: any;
try {
    willFlow =
        localStorage.getItem("flow") && localStorage.getItem("flow") == "will";
} catch (error) {
    willFlow = false;
}

const page = () => {
    const unSelectedStyles =
        "p-4 w-[150px] h-[145px] border border-gray-400 flex gap-2 flex-col justify-center text-center items-center";

    return (
        <>
            <Header />
            <div>
                {willFlow ? (
                    <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                        <div className="w-[65%] h-2 bg-[#054742]"></div>
                        <p className="px-4 pb-2">
                            PART 1:
                            <span className="font-medium ml-2">
                                COVERAGE NEEDS
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="h-[0.5rem] w-full bg-gray-100">
                        <div className="w-[95%] h-full bg-[#054742]"></div>
                    </div>
                )}
                <div className="flex flex-col py-14 sm:py-20 px-5 items-center">
                    <p
                        className={`${playfair.className} text-center text-[1.75rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        Term Life insurance sounds like a good fit!
                    </p>
                    <p className="mt-4 text-center text-gray-800 sm:w-[490px]">
                        A Term Life policy helps cover your financial
                        obligations, like debt and children’s tuition, for a set
                        period of time (term) at a fixed monthly price.
                    </p>
                    <div className="flex flex-col justify-center gap-2 items-center sm:w-[490px] mt-8 text-[0.8rem] text-black">
                        <p className="text-[0.7rem] font-medium text-gray-800">
                            PROTECTION FOR
                        </p>
                        <p className={unSelectedStyles}>
                            <p>{depend}</p>
                            <Image
                                src={
                                    depend == "partner"
                                        ? "/partner.png"
                                        : depend == "children"
                                        ? "/children.png"
                                        : depend == "parent"
                                        ? "/home.png"
                                        : "/other.png"
                                }
                                alt="partner"
                                height={55}
                                width={55}
                            />
                        </p>
                    </div>
                    <Link
                        href={willFlow ? "q/confirmEligibility" : "/q/almost-done"} 
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Next </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default page;
