"use client";

import Header from "../sections/Header";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Footer from "../sections/Footer";
import StarRateIcon from "@mui/icons-material/StarRate";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const playfairB = Playfair_Display({ subsets: ["latin"], weight: "700" });
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
            <div className="mt-[61px] bg-[#deebff] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfairB.className} leading-tight text-[2rem] md:text-[3.5rem] text-[#212326] sm:text-[2.4rem] max-w-[500px]`}
                        >
                            Whole Life Insurance Policies
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Get guaranteed approval on a whole life insurance
                            policy through Minalife and instantly secure a lifetime
                            of coverage.
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
                    src="/Stocksy_txpdf1a777.jpg"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/Minalife-spot-illustrations.webp"
                    alt="img"
                />
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.8rem] sm:text-[2.2rem] max-w-[500px]`}
                        >
                            What is whole life insurance?
                        </p>
                        <p className="text-[#323232] text-lg mt-4">
                            Whole life insurance can last the rest of your life
                            with a guaranteed payout for your loved ones.
                            <br />
                            <br /> Whole life insurance may be a great fit for
                            you if:
                        </p>
                        <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                            <li>You want coverage for the rest of your life</li>
                            <li>
                                You want a policy to build cash value over time
                            </li>
                            <li>You want to invest for a long-term benefit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.8rem] sm:text-[2.2rem] max-w-[500px]`}
                        >
                            Our whole life insurance for seniors
                        </p>
                        <p className="text-[#323232] text-lg mt-4">
                            We’re striving to make getting whole life insurance
                            simpler, faster, and just plain easier here. Minalife
                            offers whole life insurance with guaranteed approval
                            in a matter of minutes for those ages 66 to 85, no
                            matter your health history. With no medical exams,
                            simply answer a few health questions to help
                            determine the rate on your guaranteed coverage.
                            Policies range from $1,000 to $30,000 and feature a
                            secure rate that never increases, covering you for
                            life.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/guaranteed_issue.webp"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 xl:mt-14 justify-center">
                <div className="self-start max-w-[560px]">
                    <h1
                        className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Why people love it
                    </h1>
                    <p className="text-[1.1rem] mt-2 text-gray-500">
                        A 10-minute application for a lifetime of protection.
                    </p>
                </div>
                <div className="grid 2md:grid-cols-2 2xl:w-[65%] gap-12 w-full  ">
                    <div className="max-w-[550px]">
                        <Image
                            src="/icon_guaranteed.webp"
                            alt="Guaranteed"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Guaranteed approval
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            You're guaranteed to be approved if you're between
                            the ages of 66 and 85, no matter your medical
                            history. Seriously. You'll need to answer a few
                            health questions to help determine your rate and,
                            once approved, coverage is guaranteed for life.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/instant.png"
                            alt="instant"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Instant coverage
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Coverage starts the moment you make your first
                            payment.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/will.svg"
                            alt="will"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Your policy lasts for life
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Coverage lasts your lifetime if you keep up with the
                            premiums. When you turn 100, the coverage remains in
                            full without the need to make payments.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/icon_hand.svg"
                            alt="hand"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Help at every step
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Minalife knows whole life insurance is a significant
                            decision, so we make it easy to get answers. Our
                            licensed agents are a quick call away whenever you
                            have a question. Minalife is here to help.
                        </p>
                        <ul className="text-lg mt-5 text-[#7c7377] list-disc ml-8">
                            <li>Phone: (415) 915-0665</li>
                            <li>Email: support@Minalife.com</li>
                            <li>Business hours: 8 a.m. - 6 p.m. CST</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfair.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                    >
                        How Minalife works
                    </h1>
                    <p className="text-[1.1rem] mt-2 text-gray-600">
                        Minalife makes it easy to apply for a life insurance
                        plan that helps <br className="hidden lg:block" />{" "}
                        protect those you care about most.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20">
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            1
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Apply in minutes
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Fill out a super-quick online application for
                            guaranteed instant approval. Really, it's
                            guaranteed.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            2
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Choose your coverage
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Select your coverage level up to $30,000, depending
                            on eligibility, and keep up with your premiums for
                            lifetime coverage.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            3
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Get instant online life insurance
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Make your first payment with a credit card, and your
                            lifetime coverage starts instantly.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#deebff] lg:justify-center xl:flex xl:gap-28dbede5dbede5dbede5dbede5dbede5dbede5 xl:py-10 px-8 sm:mx-8 mt-8 sm:px-20 py-8 text-[#212326]">
                <div className="2md:mt-8">
                    <h1
                        className={`${playfair.className} text-[2.4rem] leading-tight max-w-[300px]`}
                    >
                        Get started with whole life insurance
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
                    <div className="grid sm:hidden">
                        <p className="text-sm font-semibold text-white">
                            Contact Us
                        </p>
                        <p className="text-sm text-white">
                            116 Forrestal Village, NJ, USA
                        </p>
                        <p className="text-sm text-white">(415) 915-0665</p>
                        <Link
                            href="/"
                            className="text-white border-white border w-[131px] text-center py-2 font-medium my-6"
                        >
                            Email us
                        </Link>
                        <div className="flex gap-4">
                            <Image
                                src="/fb.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                            <Image
                                src="/twit.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                            <Image
                                src="/insta.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                            <Image
                                src="/in.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 mt-10 gap-y-8 gap-x-4 text-[0.85rem]">
                        <div className="hidden lg:grid">
                            <p className="text-sm font-semibold text-white">
                                Contact Us
                            </p>
                            <p className="text-sm text-white mt-4">
                            116 Forrestal Village, NJ, USA
                            </p>
                            <p className="text-sm text-white">(415) 915-0665</p>
                            <Link
                                href="/"
                                className="text-white border-white border w-[131px] text-center py-2 font-medium my-6"
                            >
                                Email us
                            </Link>
                            <div className="flex gap-4">
                                <Image
                                    src="/fb.svg"
                                    alt="fb"
                                    height={20}
                                    width={20}
                                />
                                <Image
                                    src="/twit.svg"
                                    alt="fb"
                                    height={20}
                                    width={20}
                                />
                                <Image
                                    src="/insta.svg"
                                    alt="fb"
                                    height={20}
                                    width={20}
                                />
                                <Image
                                    src="/in.svg"
                                    alt="fb"
                                    height={20}
                                    width={20}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-white">
                                Resources
                            </p>
                            <Link
                                href="/life/life-insurance-policies"
                                className="underline text-white"
                            >
                                Our policies
                            </Link>
                            <Link href="/faq" className="underline text-white">
                                FAQs
                            </Link>
                            <Link href="/blog" className="underline text-white">
                                Blog
                            </Link>
                            <Link
                                href="/app/needs"
                                className="underline text-white"
                            >
                                Coverage Calculator
                            </Link>
                            <Link
                                href="/life/life-insurance-basics"
                                className="underline text-white"
                            >
                                Life insurance 101
                            </Link>
                            <Link
                                href="/how-it-works"
                                className="underline text-white"
                            >
                                How it works
                            </Link>
                            <Link
                                href="/app/login"
                                className="underline text-white"
                            >
                                Account login
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-white">Company</p>
                            <Link
                                href="/about"
                                className="underline text-white"
                            >
                                About us
                            </Link>
                            <Link
                                href="/reviews"
                                className="underline text-white"
                            >
                                Reviews
                            </Link>
                        </div>
                        {/* <div className="flex flex-col gap-2">
                            <p className="font-semibold text-white">
                                Partnerships
                            </p>
                            <Link
                                href="/agents"
                                className="underline text-white"
                            >
                                Minalife for Agents
                            </Link>
                            <Link
                                href="/agents-portal"
                                className="underline text-white"
                            >
                                Agent Login
                            </Link>
                            <Link
                                href="/affiliate-program"
                                className="underline text-white"
                            >
                                Affiliate Program
                            </Link>
                        </div> */}
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-white">Legal</p>
                            <Link
                                href="/terms"
                                className="underline text-white"
                            >
                                Terms of Use
                            </Link>
                            {/* <Link
                                href="/privacy"
                                className="underline text-white"
                            >
                                Online Privacy Policy
                            </Link> */}
                            {/* <Link
                                href="/data-security-at-Minalife"
                                className="underline text-white"
                            >
                                Data Security
                            </Link>
                            <Link
                                href="/accessibility"
                                className="underline text-white"
                            >
                                Accessibility
                            </Link>

                            <Link
                                href="/licenses"
                                className="underline text-white"
                            >
                                Licenses
                            </Link> */}
                        </div>
                    </div>
                    <p className="text-[0.7rem] mt-10 text-white sm:hidden lg:block lg:mt-20">
                        © 2023 Minalife Technologies Inc. Minalife operates in
                        some states as Minalife Life Insurance Services. CA
                        license #0L28949; AR license #100164629. Minalife offers
                        policies issued by the carriers listed at{" "}
                        <Link href="/carriers.">
                            www.Minalife.com/carriers.
                        </Link>
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
                    <div className="hidden sm:flex mt-14 gap-24 lg:hidden">
                        <div className="grid">
                            <p className="text-sm font-semibold text-white">
                                Contact Us
                            </p>
                            <p className="text-sm text-white mt-4">
                            116 Forrestal Village, NJ, USAe
                            </p>
                            <p className="text-sm text-white">(415) 915-0665</p>
                            <Link
                                href="/"
                                className="text-white border-white border w-[131px] text-center py-2 font-medium my-6"
                            >
                                Email us
                            </Link>
                            <div className="flex gap-4">
                                <Image
                                    src="/fb.svg"
                                    alt="fb"
                                    height={20}
                                    width={20}
                                />
                                <Image
                                    src="/twit.svg"
                                    alt="fb"
                                    height={20}
                                    width={20}
                                />
                                <Image
                                    src="/insta.svg"
                                    alt="fb"
                                    height={20}
                                    width={20}
                                />
                                <Image
                                    src="/in.svg"
                                    alt="fb"
                                    height={20}
                                    width={20}
                                />
                            </div>
                        </div>
                        <p className="text-[0.7rem] mt-10 text-white">
                            © 2023 Minalife Technologies Inc. Minalife operates
                            in some states as Minalife Life Insurance Services.
                            CA license #0L28949; AR license #100164629. Minalife
                            offers policies issued by the carriers listed at{" "}
                            <Link href="/carriers.">
                                www.Minalife.com/carriers.
                            </Link>
                            Products and their features may not be available in
                            all states. To help avoid requiring a medical exam,
                            our application asks certain health and lifestyle
                            questions.
                            <Image
                                src="/accessibility.png"
                                className="mt-4"
                                alt="accessibility"
                                height={32}
                                width={32}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
