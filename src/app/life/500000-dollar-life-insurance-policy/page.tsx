"use client";

import React, { useState } from "react";
import Header from "../sections/Header";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from "@/app/sections/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const playfairLight = Playfair_Display({ subsets: ["latin"], weight: "400" });
const playfairMd = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const [showMenu, setshowMenu] = useState(false);

    return (
        <>
            <Header showMenu={showMenu} setshowMenu={setshowMenu} />
            <div className="mt-[61px] bg-[#dbede5] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] text-[#054742] sm:text-[2rem] leading-tight max-w-[500px]`}
                        >
                            How much is a $500,000 life insurance policy?
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Worried about how much life insurance is going to
                            cost? You can rest easy knowing Ethos has a policy
                            to fit every budget. See if a{" "}
                            <span className="font-semibold">
                                $500,000 life insurance policy
                            </span>
                            will be enough to help protect your family if the
                            unexpected were to happen
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/estimate-experience"
                            className="text-[rgb(33,35,34)] hover:bg-[rgb(33,35,34)] transition-all hover:text-white border border-black sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                        >
                            Get my quote
                        </Link>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/son-holding-hands-with-parents.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] sm:text-[2rem] max-w-[500px]`}
                        >
                            Average costs of $500K online term life policies
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Discover how Ethos can help get you up to a 500k
                            term life insurance policy at an affordable rate.
                            This chart shows average costs for a 10- to 30-year
                            term, $500,000 life policy premiums for healthy,
                            non-smoking 35-year-old males and females.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/pricing-chart.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] text-[#054742] sm:text-[2rem] leading-tight max-w-[500px]`}
                        >
                            Start protecting loved ones today with an instant
                            quote
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Help secure your family's financial future with life
                            insurance that can help cover expenses such as
                            burial costs, outstanding debt, mortgage payments,
                            tuition, and other day-to-day expenditures.
                            Providing for your family can start today with an
                            instant online life insurance quote. By just
                            answering a few health questions, you can secure
                            online life insurance with no medical exam. It’s the
                            easiest and fastest method to protect loved ones.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/q/goals"
                            className="bg-[rgb(33,35,34)] transition-all text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                        >
                            Apply now
                        </Link>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/Stocksy_txpdf1a777.jpg"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="self-start max-w-[560px]">
                    <h1
                        className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Is a $500k policy enough?
                    </h1>
                    <p className="text-2xl mt-1 font-light">
                        While everyone's situation is unique, there are
                        guidelines to help you determine{" "}
                        <Link href="/needs" className="underline">
                            how much coverage you need.
                        </Link>
                    </p>
                </div>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:pb-6 2md:border-r 2md:pr-8">
                        <p className="text-lg mt-5 text-[#323232]">
                            A $500K life insurance policy can help protect your
                            family if the unexpected happens. But is it enough?
                            Experts recommend you carry at least ten times your
                            annual salary. Another useful way to determine your
                            coverage calculations is the DIME formula (debt +
                            income + mortgage + education). Add these four
                            factors together to give you a better idea of your
                            coverage needs.
                        </p>
                        <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                            <li>
                                <span className="font-semibold">Debt: </span>{" "}
                                The total of any outstanding debt, such as
                                student loans or credit cards bills
                            </li>
                            <li>
                                <span className="font-semibold">Income: </span>{" "}
                                Multiply your salary by the estimated number of
                                years your family would need support ($50k
                                salary x 10 years = $500k)
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Mortgage:{" "}
                                </span>
                                Mortgage balances or housing expenses
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Education:{" "}
                                </span>
                                Estimate the costs to pay for your children's
                                tuition
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6 2md:border-r 2md:pr-8">
                        <p className=" text-lg font-semibold text-[#323232]">
                            How can I qualify for a $500,000 life insurance
                            policy?
                        </p>
                        <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                            <li>
                                <span className="font-semibold">Age: </span>{" "}
                                Life insurance coverage costs more the older you
                                get. The younger you are, the higher amount of
                                coverage you'll qualify for.
                            </li>
                            <li>
                                <span className="font-semibold">Health: </span>{" "}
                                The better your health status, the better your
                                chance of being approved for a higher policy.
                            </li>
                            <li>
                                <span className="font-semibold">Income: </span>
                                Many applicants can qualify for coverage up to
                                30 times their annual salary. Depending on how
                                much you make and your financial situation, you
                                may want to consider increasing your coverage.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Education:{" "}
                                </span>
                                Estimate the costs to pay for your children's
                                tuition
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 xl:mt-14 justify-center">
                <div className="self-start max-w-[560px]">
                    <h1
                        className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Why choose Ethos for my $500k policy?
                    </h1>
                    <p className="text-xl mt-1">
                        Ethos makes it quick and easy to apply for life
                        insurance tailored to your budget and coverage needs.
                    </p>
                </div>
                <div className="grid 2md:grid-cols-2 2xl:w-[65%] gap-12 w-full  lg:items-center">
                    <div className="max-w-[550px]">
                        <Image
                            src="/shoe.svg"
                            alt="no medical exam"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Instant online quotes for $500k policies
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Complete our 100% online application in minutes.
                            Just answer a few health questions and receive your
                            life insurance quote today with no requirements of a
                            medical exam.Complete our online application in
                            minutes. It's quick, straightforward, and no
                            paperwork or phone calls are necessary (but we're
                            always here to help if you need us).
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/money.svg"
                            alt="Same-Day Coverage"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Affordable, personalized coverage
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Minalife offers a wide variety of coverage options
                            to fit your budget and provide the coverage you
                            need.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/icon_hand.svg"
                            alt="expert guidance"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Honest advice, non-pushy agents
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            You don’t need to talk to an agent – unless you want
                            to. Our agents are experts in finding you the
                            coverage that best suits your family’s needs.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/will.svg"
                            alt="Affordable Policies"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Easy, hassle-free cancellation
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            If you change your mind within the first 30 days of
                            activating your coverage, we'll refund your payment
                            in full. And with Ethos, you can cancel your policy
                            anytime with no extra fees.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-14 2md:pt-24 2md:px-10">
                <div className="px-8 py-8 flex flex-col 2md:flex-row lg:px-14 xl:px-24 lg:py-20 sm:px-12 2md:justify-between bg-[#deebff] text-black">
                    <div>
                        <p
                            className={`${playfairMd.className} max-w-[550px] text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[1.9rem] sm:text-[2.5rem] font-extralight leading-tight`}
                        >
                            Receive a free, personalized quote instantly
                        </p>
                        <p className="text-[1.1rem] text-gray-900 mt-3 max-w-[500px]">
                            See estimated prices for up to $500K in life
                            insurance coverage.
                        </p>
                    </div>
                    <Link
                        href="/estimate-experience"
                        className="flex items-center justify-center gap-4 py-4 px-8 2md:px-0 2md:min-w-[212px] 2md:h-[56px] border mt-8 border-black hover:bg-[#323232] hover:text-white"
                    >
                        <span>Get my quote</span>
                        <ArrowRightAltIcon fontSize="small" />
                    </Link>
                </div>
            </div>
            <div className="bg-[#054742] mt-10 py-10 sm:py-14 lg:pt-20 sm:pb-24 sm:px-14 px-5">
                <p className="text-sm text-white mt-4">
                    Please note that all prices quoted are subject to change,
                    including due to underwriting.
                </p>

                <hr className="bg-white mt-6 sm:mt-14 mb-6" />

                <p className="text-[0.85rem] mt-10 text-white sm:hidden lg:block">
                    © 2023 Minalife Technologies Inc. Minalife operates in some
                    states as Minalife Life Insurance Services. CA license
                    #0L28949; AR license #100164629. Minalife offers policies
                    issued by the carriers listed at{" "}
                    <Link href="/carriers.">www.minalife.com/carriers.</Link>
                    Products and their features may not be available in all
                    states. To help avoid requiring a medical exam, our
                    application asks certain health and lifestyle questions.
                    <Image
                        src="/accessibility.png"
                        className="mt-4"
                        alt="accessibility"
                        height={32}
                        width={32}
                    />
                </p>
            </div>
        </>
    );
};

export default page;
