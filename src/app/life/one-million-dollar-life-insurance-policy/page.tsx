"use client";

import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import Header from "../sections/Header";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const playfairMd = Playfair_Display({ subsets: ["latin"], weight: "400" });

const page = () => {
    const [showMenu, setshowMenu] = useState(false);
    const [showSelect, setShowSelect] = useState(false);
    
    interface Info {
        gender?: "male" | "female" | undefined;
        age?: Number | undefined;
        zipCode?: string | undefined;
        health?: "average" | "great" | "excellent" | undefined;
        nicotine?: "yes" | "no" | undefined;
        estimatedCredit?: string | undefined;
    }

    const [info, setInfo] = useState<Info>();

    const filled =
        info &&
        "gender" in info &&
        "age" in info &&
        "zipCode" in info &&
        "health" in info &&
        "nicotine" in info &&
        "estimatedCredit" in info
            ? true
            : false;

    function handleChange(
        e: ChangeEvent<HTMLInputElement> | MouseEventHandler<HTMLInputElement>
    ) {
        //@ts-ignore
        const target = e.target;
        const name = target.name;
        const value = target.value.toLowerCase();

        //@ts-ignore
        if (name == "zipCode" && info?.zipCode?.length > 5) {
            setInfo((prev) => ({
                ...prev,
                zipCode: prev?.zipCode?.slice(0, 5),
            }));
        }

        setInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <>
            <Header showMenu={showMenu} setshowMenu={setshowMenu} />
            <div className="mt-[61px] bg-[#fff2e3] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[500px]">
                        <p
                            className={`${playfairMd.className} text-[2rem] md:text-[3.7rem] text-[#fa640a] sm:text-[2.4rem] leading-tight `}
                        >
                            $1 million term life insurance
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Minalife makes it easy to apply for an online life
                            insurance policy that fits your needs. See if a
                            million-dollar life insurance policy will be enough
                            to help protect your family if the unexpected were
                            to happen.
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
                    src="/father-holding-child-in-air.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfairMd.className} text-[2rem] md:text-[2.4rem] sm:text-[2rem] max-w-[500px]`}
                        >
                            How much is a million-dollar life insurance policy?
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Discover how Minalife can help you get a policy of up
                            to a million dollars at an affordable rate. This
                            chart shows average 10- to 30-year term life policy
                            premiums for healthy, non-smoking 35-year-old males
                            and females.
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
                            className={`${playfairMd.className} text-[2rem] md:text-[2.4rem] text-[#054742] sm:text-[2rem] leading-tight max-w-[500px]`}
                        >
                            Life insurance helps protect your loved ones
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Your life insurance coverage can help secure your
                            family’s financial future by covering living
                            expenses, outstanding debt, mortgage payments,
                            education, and more.
                        </p>
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
                    <p className="text-2xl mt-1 font-light">
                        While no one answer covers every situation, there are
                        guidelines to help you determine
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
                            How can I qualify for a million-dollar life
                            insurance policy?
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
                        className={`${playfairMd.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        How to get a million dollar policy with Minalife?
                    </h1>
                    <p className="text-xl mt-1">
                        Minalife makes it easy to apply for online life insurance
                        tailored to your budget and coverage needs.
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
                            Fast, free, online application process
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Complete our online application in minutes. It's
                            straightforward and requires no paperwork or phone
                            calls (but if you'd like to talk to someone, we're
                            available to help).
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
                            in full. And with Minalife, you can cancel your policy
                            anytime with no extra fees.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#deebff] xl:flex xl:justify-around xl:gap-20 xl:py-10 px-8 sm:mx-8 mt-8 sm:px-20 py-8 text-[#212326]">
                <div className="2md:mt-8 xl:w-[200px]">
                    <h1 className={`${playfair.className} text-[2rem]`}>
                    Instant life insurance coverage
                    </h1>
                </div>
                <form className="mt-8">
                    <div className="grid gap-4 2md:grid-cols-4">
                        <div>
                            <p className="text-sm">Gender</p>
                            <div className="flex justify-between gap-2 text-[1.1rem] mt-2">
                                <input
                                    type="button"
                                    name="gender"
                                    value="Female"
                                    //@ts-ignore
                                    onClick={handleChange}
                                    className={
                                        info?.gender == "female"
                                            ? "w-full 2md:px-4 py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                            : "w-full 2md:px-4 py-4 border bg-white border-gray-400 transition-all"
                                    }
                                />
                                <input
                                    type="button"
                                    name="gender"
                                    value="Male"
                                    //@ts-ignore
                                    onClick={handleChange}
                                    className={
                                        info?.gender == "male"
                                            ? "w-full 2md:px-4 py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                            : "w-full 2md:px-4 py-4 border bg-white border-gray-400 transition-all"
                                    }
                                />
                            </div>
                        </div>
                        <div className="2md:col-span-2">
                            <p className="text-sm">Health</p>
                            <div className="flex justify-between gap-2 mt-2">
                                <input
                                    type="button"
                                    name="health"
                                    value="Average"
                                    //@ts-ignore
                                    onClick={handleChange}
                                    className={
                                        info?.health == "average"
                                            ? "w-full 2md:px-4 py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                            : "w-full 2md:px-4 py-4 border bg-white border-gray-400 transition-all"
                                    }
                                />
                                <input
                                    type="button"
                                    name="health"
                                    value="Great"
                                    //@ts-ignore
                                    onClick={handleChange}
                                    className={
                                        info?.health == "great"
                                            ? "w-full 2md:px-4 py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                            : "w-full 2md:px-4 py-4 border bg-white border-gray-400 transition-all"
                                    }
                                />
                                <input
                                    type="button"
                                    name="health"
                                    value="Excellent"
                                    //@ts-ignore
                                    onClick={handleChange}
                                    className={
                                        info?.health == "excellent"
                                            ? "w-full 2md:px-4 py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                            : "w-full 2md:px-4 py-4 border bg-white border-gray-400 transition-all"
                                    }
                                />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm">Age</p>
                            <input
                                type="number"
                                name="age"
                                onChange={handleChange}
                                className="mt-2 2md:px-4 w-full 2md:w-[173px] px-3 py-4 border bg-white border-gray-400"
                            />
                        </div>

                        <div>
                            <p className="text-sm">Nicotine use?</p>
                            <div className="flex justify-between gap-2 mt-2">
                                <input
                                    type="button"
                                    name="nicotine"
                                    value="Yes"
                                    //@ts-ignore
                                    onClick={handleChange}
                                    className={
                                        info?.nicotine == "yes"
                                            ? "w-full 2md:px-4 py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                            : "w-full 2md:px-4 py-4 border bg-white border-gray-400 transition-all"
                                    }
                                />
                                <input
                                    type="button"
                                    name="nicotine"
                                    value="No"
                                    //@ts-ignore
                                    onClick={handleChange}
                                    className={
                                        info?.nicotine == "no"
                                            ? "w-full 2md:px-4 py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                            : "w-full 2md:px-4 py-4 border bg-white border-gray-400 transition-all"
                                    }
                                />
                            </div>
                        </div>
                        <div className="2md:col-span-2">
                            <p className="text-sm">Estimated Credit</p>
                            <div
                                onClick={() => setShowSelect((prev) => !prev)}
                                className="flex justify-between items-center gap-2 mt-2 w-full px-4 py-3 border bg-white border-gray-400"
                            >
                                <p>{info?.estimatedCredit}</p>
                                <KeyboardArrowDownIcon
                                    className="pl-[10px] border-l border-l-gray-400"
                                    fontSize="large"
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                used for estimate only
                            </p>
                            {showSelect && (
                                <div className="mt-2 relative top-[-35px] z-10">
                                    <input
                                        type="button"
                                        name="estimatedCredit"
                                        //@ts-ignore
                                        onClick={handleChange}
                                        value="High(740+)"
                                        className={
                                            info?.estimatedCredit ==
                                            "high(740+)"
                                                ? "w-full 2md:px-4 text-left px-4 py-2 border bg-[#054742] text-white border-gray-400 transition-all"
                                                : "w-full 2md:px-4 text-left px-4 py-2 border border-t-0 bg-white border-gray-400 transition-all"
                                        }
                                        //className="w-full text-left px-4 py-2 border bg-[#054742] text-white border-gray-400"
                                    />
                                    <input
                                        type="button"
                                        name="estimatedCredit"
                                        //@ts-ignore
                                        onClick={handleChange}
                                        value="Average(670-739)"
                                        className={
                                            info?.estimatedCredit ==
                                            "average(670-739)"
                                                ? "w-full 2md:px-4 text-left px-4 py-2 border bg-[#054742] text-white border-gray-400 transition-all"
                                                : "w-full 2md:px-4 text-left px-4 py-2 border border-t-0 bg-white border-gray-400 transition-all"
                                        }
                                    />
                                    <input
                                        type="button"
                                        name="estimatedCredit"
                                        //@ts-ignore
                                        onClick={handleChange}
                                        value="Low(below 670)"
                                        className={
                                            info?.estimatedCredit ==
                                            "low(below 670)"
                                                ? "w-full 2md:px-4 text-left px-4 py-2 border bg-[#054742] text-white border-gray-400 transition-all"
                                                : "w-full 2md:px-4 text-left px-4 py-2 border border-t-0 bg-white border-gray-400 transition-all"
                                        }
                                    />
                                    <input
                                        type="button"
                                        name="estimatedCredit"
                                        //@ts-ignore
                                        onClick={handleChange}
                                        value="I don't know"
                                        className={
                                            info?.estimatedCredit ==
                                            "i don't know"
                                                ? "w-full 2md:px-4 text-left px-4 py-2 border bg-[#054742] text-white border-gray-400 transition-all"
                                                : "w-full 2md:px-4 text-left px-4 py-2 border border-t-0 bg-white border-gray-400 transition-all"
                                        }
                                    />
                                </div>
                            )}
                        </div>
                        <div className="hidden 2md:block">
                            <p className="text-sm">Zip Code</p>
                            <input
                                type="number"
                                name="zipCode"
                                onChange={handleChange}
                                value={info?.zipCode}
                                className="mt-2 px-3 2md:px-4 w-full 2md:w-[173px] py-4 border bg-white border-gray-400"
                            />
                        </div>
                    </div>

                    <button
                        disabled={!filled}
                        type="submit"
                        className="bg-gray-900 sm:ml-auto hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] flex justify-between items-center mt-10 my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Submit </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                        Please note that all prices quoted are subject to
                        change, including due to underwriting.
                    </p>
                </form>
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
                    <Link href="/carriers.">www.Minalife.com/carriers.</Link>
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
