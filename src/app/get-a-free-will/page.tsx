"use client";

import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import Header from "./Header";
import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const playfairB = Playfair_Display({ subsets: ["latin"], weight: "800" });
const playfairLight = Playfair_Display({ subsets: ["latin"], weight: "400" });
const playfairMd = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
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

    const handleClick = () => {
        try {
            localStorage.setItem("flow", "will");
        } catch (error) {
            console.log(error)
        }
        router.push("/q/epgOverview");
    };

    return (
        <>
            <Header showMenu={showMenu} setshowMenu={setShowMenu} />
            <div className="mt-[61px] xl:justify-center lg:px-14 lg:pl-24 lg:justify-between overflow-hidden flex flex-col lg:flex-row items-center bg-[#dbede5] text-[#056257] pt-5 2lg:pt-12 lg:pt-6 xl:pt-4 text-center lg:text-left">
                <div className="lg:w-[42rem] xl:py-14">
                    <h1
                        className={`${dmSerif.className} font-bold flex flex-col text-[2.8rem] sm:text-[3.8rem] lg:text-[4rem]`}
                    >
                        <span className="leading-tight sm:h-[60px]">
                            Ethos life insurance
                        </span>
                        <span className="leading-tight">
                            includes free wills
                        </span>
                    </h1>
                    <p className="mt-2 text-lg">
                        Personalized guidance to help you pick a guardian for
                        your
                    </p>
                    <p className="text-lg">
                        children, pass on your assets, and replace your income.
                    </p>
                    <button
                        onClick={handleClick}
                        className="bg-[#f06c00] text-white px-16 sm:px-24 2lg:px-[4.5rem] py-4 mt-8 sm:mt-9 rounded-[0.25rem] font-medium"
                    >
                        Get a personalized plan
                    </button>
                </div>
                <div className="bg-white lg:bg-[#dbede5] mt-6 sm:mt-12 w-full lg:w-fit">
                    <div className="w-full pt-10 lg:w-fit flex justify-center overflow-hidden bg-[#dbede5] rounded-bl-[70%] sm:rounded-bl-[60%] 2lg:rounded-bl-[50%] 2md:rounded-bl-[4 0%] lg:rounded-none">
                        <Image
                            className="sm:w-[350px] 2lg:w-auto xl:w-[600px]"
                            src="/ctaImage.png"
                            alt="insurance"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-2 sm:gap-4 lg:gap-10 py-4 bg-[#f5f5f5]">
                <img
                    alt="TrustPilotColor"
                    className="h-10 sm:h-14 lg:h-16"
                    src="/TrustPilotColor.webp"
                />
                <img
                    alt="BBBColor"
                    className="h-10 sm:h-14 lg:h-16"
                    src="/BBBColor.webp"
                />
                <img
                    alt="google4-7-stars"
                    className="h-10 sm:h-14 lg:h-16"
                    src="/google4-7-stars.webp"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfair.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Choose the right plan for you
                    </h1>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 xl:gap-20 mb-8">
                    <Link href="/q/goals" className="flex flex-col">
                        <img src="/EP_landing_page_graphics.svg" />
                        <div className="px-4 p-4 border">
                            <p
                                className={`${playfairMd.className} text-[1.5rem] text-[#323232] mt-2`}
                            >
                                Life insurance + FREE will & estate planning
                                tools
                            </p>
                            <p className="text-[1rem] text-gray-600 mt-2">
                                Help provide your loved ones with a financial
                                safety net if you pass away. Ensure your assets
                                are passed on properly while protecting your
                                family from debts
                            </p>
                            <hr className="mt-8" />
                            <p className="text-[1rem] flex justify-between text-gray-800 mt-3">
                                <span>Get my rates</span>
                                <ArrowForwardIcon fontSize="small" />
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="/tomorrow-app/documents/will/intro/"
                        className="flex flex-col"
                    >
                        <img src="/6_czddd4.svg" />
                        <div className="px-4 p-4 border">
                            <p
                                className={`${playfairMd.className} text-[1.5rem] text-[#323232] mt-2`}
                            >
                                Will
                            </p>
                            <p className="text-[1rem] text-gray-600 mt-2">
                                A simple plan for you heirs and assets.
                                Designate guardians for your children and
                                determine how your assets will be distributed.
                            </p>
                            <hr className="mt-8" />
                            <p className="text-[1rem] flex justify-between text-gray-800 mt-3">
                                <span>Start a will</span>
                                <ArrowForwardIcon fontSize="small" />
                            </p>
                        </div>
                    </Link>
                    <Link
                        href="/tomorrow-app/documents/will/intro/"
                        className="flex flex-col"
                    >
                        <img src="/7_zufaoy.svg" />
                        <div className="px-4 p-4 border">
                            <p
                                className={`${playfairMd.className} text-[1.5rem] text-[#323232] mt-2`}
                            >
                                Future estate planning tools
                            </p>
                            <p className="text-[1rem] text-gray-600 mt-2">
                                The ultimate set of planning tools that cover
                                everything from fiances to caregiving. Includes
                                tools to create a will, trust, power of
                                attorney, and more.
                            </p>
                            <hr className="mt-8" />
                            <p className="text-[1rem] flex justify-between text-gray-800 mt-3">
                                <span>Start an estate plan</span>
                                <ArrowForwardIcon fontSize="small" />
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="bg-[#dbede5] lg:justify-center xl:flex xl:gap-28 xl:py-10 px-8 sm:mx-8 my-10 sm:px-20 py-8 text-[#212326]">
                <div className="2md:mt-8">
                    <h1
                        className={`${playfair.className} text-[2.2rem] leading-tight max-w-[300px]`}
                    >
                        Get a life insurance estimate in seconds
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
            <div className="mt-[61px] lg:px-14 lg:pl-24 lg:justify-between overflow-hidden flex flex-col lg:flex-row items-center bg-[#dbede5] text-[#212326] pt-5 2lg:pt-12 lg:pt-6 xl:pt-4 text-center lg:text-left">
                <div className="lg:w-[42rem] xl:py-14 py-10">
                    <h1
                        className={`${playfair.className} font-bold flex flex-col text-[2rem] sm:text-[3rem] lg:text-[3rem]`}
                    >
                        Why make a plan?
                    </h1>
                    <ul className="text-lg text-left mt-5 text-[#323232] list-disc ml-8">
                        <li>
                            Help to ensure your loved ones have someone who
                            takes care of them if they lost you
                        </li>
                        <li>
                            Reduce the headache your family may face with the
                            courts
                        </li>
                    </ul>
                    <button
                        onClick={handleClick}
                        className="bg-[rgb(33,35,34)] transition-all text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <h1
                    className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                >
                    FAQs
                </h1>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0 2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:pb-6">
                        <p className=" text-xl xl:text-2xl text-[#212326]">
                            Why do I need a will and/or an estate plan?
                        </p>
                        <p className="text-[1rem] mt-2 text-gray-600">
                            Creating a will or estate plan is the easiest way to
                            secure your family’s future. You can determine how
                            you want your assets distributed, and select a
                            guardian to care for your children if you were to
                            pass away. Completing these documents can help you
                            breathe easier and give you peace of mind.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:pb-6">
                        <p className="text-xl xl:text-2xl text-[#212326]">
                            How long does the process take?
                        </p>
                        <p className="text-[1rem] mt-2 text-gray-600">
                            The process can be done online in under an hour
                            (often even faster). Be sure to communicate with
                            your loved ones who will be involved in your estate
                            plan.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:pb-6">
                        <p className=" text-xl xl:text-2xl text-[#212326]">
                            Can I make edits to my plan?
                        </p>
                        <p className="text-[1rem] mt-2 text-gray-600">
                            For policyholders*, you have unlimited edits at no
                            additional cost as long as your policy is active.
                            For non-policyholders, changes are free during the
                            first two years after purchasing an estate plan or
                            will. Edits after two years will be $19 per year for
                            the legal will and $39 per year for the estate plan.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:pb-6">
                        <p className=" text-xl xl:text-2xl text-[#212326]">
                            I’m a policyholder*. Where can I find this perk?
                        </p>
                        <p className="text-[1rem] my-2 text-gray-600">
                            Depending on your current Ethos policy, you will be
                            able to add the will and/or estate planning tools to
                            your policy at no additional cost. Sign into your
                            account to access this perk. Can’t find it? Our team
                            can help!
                        </p>
                        <Link
                            href="/contact-us"
                            className="text-lg hover:underline"
                        >
                            Contact us→
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-[#054742] mt-10 py-6 sm:pb-24 sm:px-14 px-5">
                <div className="grid">
                    <div className="grid sm:hidden">
                        <p className="text-sm font-semibold text-white">
                            Contact Us
                        </p>
                        {/* <p className="text-sm text-white mt-4">
                            1606 Headway Circle
                        </p>
                        <p className="text-sm text-white">#9013</p> */}
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
                                1606 Headway Circle
                            </p>
                            <p className="text-sm text-white">#9013</p>
                            <p className="text-sm text-white">
                                Austin, TX 78754
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
                                href="/insurance/life-insurance-policies"
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
                                href="/life/life-insurance-101"
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
                            <Link
                                href="/privacy"
                                className="underline text-white"
                            >
                                Online Privacy Policy
                            </Link>
                            <Link
                                href="/data-security-at-minalife"
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
                            </Link>
                        </div>
                    </div>
                    <p className="text-[0.7rem] mt-10 text-white sm:hidden lg:block lg:mt-20">
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
                                1606 Headway Circle
                            </p>
                            <p className="text-sm text-white">#9013</p>
                            <p className="text-sm text-white">
                                Austin, TX 78754
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
                                www.minalife.com/carriers.
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
