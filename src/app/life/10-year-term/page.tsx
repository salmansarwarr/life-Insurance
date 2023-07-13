"use client";

import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import Header from "../sections/Header";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const playfairLight = Playfair_Display({ subsets: ["latin"], weight: "400" });
const playfairMd = Playfair_Display({ subsets: ["latin"], weight: "500" });

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
            <div className="mt-[61px] bg-[#dbede5] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[1.8rem] md:text-[2.4rem] text-[#054742] sm:text-[2rem] leading-tight max-w-[500px]`}
                        >
                            Compare 10 Year Term Life Insurance Plans
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            With minaLife, you can apply for a term length that
                            gives you the coverage you need, with terms ranging
                            from 10 to 30 years.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/estimate-experience"
                            className="text-[rgb(33,35,34)] hover:bg-[rgb(33,35,34)] transition-all hover:text-white border border-black sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                        >
                            Check my price
                        </Link>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/father-and-son.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] sm:text-[2rem] max-w-[500px]`}
                        >
                            How much a 10-year term can cost
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Example monthly premiums for a healthy 40-year-old
                            male and female. Ranging for $20K to $1.5M in
                            coverage, minaLife can provide as much life insurance
                            coverage as you need at an affordable rate. 10 year
                            life insurance premiums can cost as little as $26 a
                            month for a{" "}
                            <Link href="500000-dollar-life-insurance-policy">
                                $500,000 term policy
                            </Link>{" "}
                            depending on health, age, and several other factors.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/pricing-chart_10-year.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] text-[#054742] sm:text-[2rem] leading-tight max-w-[500px]`}
                        >
                            Life insurance protects the ones you love most
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Your life insurance policy secures your family’s
                            financial future and can help cover living expenses,
                            debt, mortgage payments, education, and more. Enjoy
                            the piece of mind that your family's long-term
                            stability can be secured with the protection of a
                            death benefit from minaLife.
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
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:self-start max-w-[500px]">
                    <h1
                        className={`${playfair.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Who can benefit from a 10-year term?
                    </h1>
                    <p className="text-[1.1rem] mt-2 text-gray-500">
                        A 10-year term life policy can be a great option because
                        it’s a seriously affordable way to protect your family
                        for 10 years. When it comes to choosing your term
                        length, a 10-year term might be perfect for you if:
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20">
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/icon_parents.svg"
                            alt="Expert advice"
                            height={50}
                            width={50}
                        />
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            You have pre-teen children
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            If you have children who are around middle school
                            age, a 10-year term life insurance policy can
                            provide coverage through their college years and
                            last until they are no longer dependents.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/icon_plant.svg"
                            alt="Expert advice"
                            height={50}
                            width={50}
                        />
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            You’re close to retirement
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            If you’re planning on retiring within the decade, a
                            10-year term policy can give you extra peace of mind
                            while you’re still working. Your coverage could be
                            used by your loved ones to replace your income
                            should the unexpected happen.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/money.svg"
                            alt="Expert advice"
                            height={50}
                            width={50}
                        />
                        <p className="text-[1.5rem] text-[#323232] mt-2">
                            You’re close to financial independence
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            If you’re close to paying off your home mortgage or
                            other debt, a 10-year term may be just the coverage
                            you need when you’re in the final stretch of
                            becoming financially independent.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 xl:mt-14 justify-center">
                <div className="self-start max-w-[560px]">
                    <h1
                        className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Why thousands of Americans choose minaLife
                    </h1>
                    <p className="text-[1.1rem] mt-2 text-gray-500">
                        minaLife makes it easy to apply for life insurance that’s
                        tailored to your budget and coverage needs. Customers
                        choose minaLife because we offer affordable rates and help
                        you find the right coverage for you. With minaLife, you
                        don’t need to talk to any agents to apply but if you
                        need, our team of licensed agents is ready to help you
                        with anything.
                    </p>
                </div>
                <div className="grid 2md:grid-cols-2 2xl:w-[65%] gap-12 w-full  lg:items-center">
                    <div className="max-w-[550px]">
                        <Image
                            src="/shoe.svg"
                            alt="Fast"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Fast, easy, free application
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Our straightforward online application can be
                            completed in minutes—without confusing paperwork or
                            phone calls with sales agents.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/icon_giving-money.svg"
                            alt="Affordable coverage"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Affordable, personalized coverage
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            We offer a wide variety of coverage options to fit
                            your budget and give you the coverage you actually
                            need.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/icon_person-not-risk.svg"
                            alt="Honest agents"
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
                            alt="Cancel easily"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Cancel easily
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            If you change your mind within the first 30 days of
                            activating your coverage, we’ll refund your payment
                            in full. And with minaLife, you can cancel your policy
                            anytime with no extra fees.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#deebff] xl:flex xl:gap-20 xl:py-10 px-8 sm:mx-8 mt-8 sm:px-20 py-8 text-[#212326]">
                <div className="2md:mt-8">
                    <h1 className={`${playfair.className} text-[2.3rem] xl:max-w-[300px]`}>
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
            <div className="bg-[#054742] mt-10 py-6 sm:pb-24 sm:px-14 px-5">
                <div className="grid">
                    <p className="text-[0.8rem] text-white mt-7">
                        © 2023 Minalife Technologies Inc. Minalife operates in
                        some states as Minalife Life Insurance Services. CA
                        license #0L28949; AR license #100164629. Minalife offers
                        policies issued by the carriers listed at{" "}
                        <Link href="/carriers.">
                            www.minalife.com/carriers.
                        </Link>
                        Products and their features may not be available in all
                        states. To help avoid requiring a medical exam, our
                        application asks certain health and lifestyle questions.
                        <Image
                            src="/accessibility.png"
                            className="mt-4 ml-auto"
                            alt="accessibility"
                            height={32}
                            width={32}
                        />
                    </p>
                </div>
            </div>
        </>
    );
};

export default page;
