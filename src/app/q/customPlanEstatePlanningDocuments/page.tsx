"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MdDone } from "react-icons/md";
import Header from "../components/Header";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
const playfairMd = Playfair_Display({ subsets: ["latin"], weight: "600" });

const page = () => {
    return (
        <>
            <Header />
            <div>
                <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                    <div className="w-[35%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 3:
                        <span className="font-medium ml-1">
                            REVIEW YOUR CUSTOM PLAN
                        </span>
                    </p>
                </div>
                <div className="flex flex-col px-6 py-8 sm:items-center">
                    <Image
                        src="/EstatePlanDocumentIcon.svg"
                        alt="legalwill"
                        height={120}
                        width={120}
                    />
                    <p
                        className={`${playfairMd.className} mt-4 text-[2rem] sm:text-[2.4rem] leading-tight max-w-[500px]`}
                    >
                        Estate Plan Documents
                    </p>
                    <div className="mt-6">
                        <ul className="list-disc self-start ml-5">
                            <li>
                                Describe how you should be cared for should you
                                be incapacitated
                            </li>
                            <li className="mt-1">
                                Give a trusted person temporary control your
                                affairs
                            </li>
                        </ul>
                        <div className="bg-[#deebff] p-3 mt-4 max-w-[496px]">
                            <p className="text-gray-500 text-lg font-medium">
                                FACT:
                            </p>
                            <p className="text-[1.1rem] font-medium">
                                80% of Americans experience a period of
                                incapacity. Additional guidance for your family
                                ensures that your wishes are followed during
                                this time.
                            </p>
                        </div>
                        <Link
                            href="/q/customPlanTrust"
                            className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center my-6 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                        >
                            <span>Next </span>
                            <ArrowForwardIcon
                                fontSize="small"
                                color="inherit"
                            />
                        </Link>
                        <p className="text-gray-500 text-sm max-w-[496px]">
                            Sourced from Savvy Estate Planning: What You Need to
                            Know Before You Talk to the Right Lawyer (James L.
                            Cunningham Jr., 2022)
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
