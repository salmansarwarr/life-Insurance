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
                    <div className="w-[40%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 3:
                        <span className="font-medium ml-1">
                            REVIEW YOUR CUSTOM PLAN
                        </span>
                    </p>
                </div>
                <div className="flex flex-col px-6 py-8 sm:items-center">
                    <Image
                        src="/CustomPlanReviewIcon.svg"
                        alt="CustomPlanReviewIcon"
                        height={180}
                        width={180}
                    />
                    <p
                        className={`${playfairMd.className} mt-2 text-[2rem] sm:text-[2.4rem] leading-tight max-w-[500px]`}
                    >
                        Your Estate Plan
                    </p>
                    <div className="relative flex top-[25px] right-[30px] sm:right-[250px] lg:right-[270px]">
                        <div className="absolute bg-[#054742] text-white font-medium py-1 uppercase text-[0.75rem] min-w-[147.72px] text-center">
                            Tools
                        </div>
                    </div>
                    <div className="flex flex-col pt-[5rem] sm:w-[500px] sm:py-7 sm:mt-[3rem]">
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/LegalWillWithoutCircleIcon.svg"
                                alt="LegalWillWithoutCircleIcon"
                                height={50}
                                width={50}
                            />
                            <div>
                                <p className="font-medium">Legal Will</p>
                                <p className="text-[0.8rem] mt-1 text-gray-600">
                                    Describes who gets what asset
                                </p>
                            </div>
                        </div>
                        <hr className="my-3" />
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/TrustWithoutCircleIcon.svg"
                                alt="TrustWithoutCircleIcon"
                                height={50}
                                width={50}
                            />
                            <div>
                                <p className="font-medium">Trust</p>
                                <p className="text-[0.8rem] mt-1 text-gray-600">
                                    Controls when and how your assets are
                                    distributed (and what they are used for).
                                </p>
                            </div>
                        </div>
                        <hr className="my-3" />
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/TermLifeWithoutCircleIcon.svg"
                                alt="TermLifeWithoutCircleIcon"
                                height={50}
                                width={50}
                            />
                            <div>
                                <p className="font-medium">
                                    Term Life Insurance
                                </p>
                                <p className="text-[0.8rem] mt-1 text-gray-600">
                                    A term life insurance policy provides
                                    important funds to replace your income, pay
                                    for your burial, and support your loved
                                    ones.
                                </p>
                            </div>
                        </div>
                        <hr className="my-3" />
                        <div className="flex gap-4 items-center">
                            <Image
                                src="/EstatePlanWithoutCircleIcon.svg"
                                alt="EstatePlanWithoutCircleIcon"
                                height={50}
                                width={50}
                            />
                            <div>
                                <p className="font-medium">
                                    Estate Plan Documents
                                </p>
                                <p className="text-[0.8rem] mt-1 text-gray-600">
                                    Power of attorney, medical consent, and
                                    healthcare directive forms direct loved ones
                                    how to make decisions on your behalf in case
                                    you are not around or no longer able to do
                                    so because of illness.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link
                        href="/q/moreGreatNews"
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center my-6 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
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
