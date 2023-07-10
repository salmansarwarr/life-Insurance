"use client";

import Header from "../sections/Header";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const playfairB = Playfair_Display({ subsets: ["latin"], weight: "800" });
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
                            className={`${playfair.className} leading-tight text-[2rem] md:text-[3.5rem] text-[#212326] sm:text-[2.4rem] max-w-[500px]`}
                        >
                            Get covered for life—in minutes.
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            If you're between 65-85 years old, you're guaranteed
                            to be approved. No health questions or medical exams
                            necessary.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/estimate-experience"
                            className="bg-[rgb(33,35,34)] transition-all text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                        >
                            Check my price
                        </Link>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/Stocksy_txpb3b.webp"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfair.className} text-[#262626] max-w-[600px] leading-tight text-[2rem] sm:text-[2.8rem] font-extralight`}
                    >
                        Features and benefits of this coverage
                    </h1>
                    <p className="text-[1.1rem] mt-2 text-gray-600">
                        Here's whats included with our whole life policies.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20">
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/icon-01-guaranteed.webp"
                            alt="Guaranteed"
                            height={50}
                            width={50}
                        />
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Guaranteed approval
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            If you're between the ages of 65 and 85, you're
                            guaranteed to be approved, regardless of any health
                            issues. It's that simple.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/icon-02-affordable.webp"
                            alt="affordable"
                            height={50}
                            width={50}
                        />
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Affordable lifelong protection
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            As long as you keep up with your premiums, this
                            coverage will last your whole life. Premiums are
                            level, meaning they won't go up over the life of
                            your policy. The quote you get today is the same as
                            your final rate.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/icon-03-cash-value.webp"
                            alt="cash"
                            height={50}
                            width={50}
                        />
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Cash value
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            This policy builds cash value automatically. You can
                            use this cash value for emergencies or to supplement
                            retirement income by taking a tax-free policy loan
                            against the cash value. Note that outstanding policy
                            loans will decrease the amount of the death benefit
                            paid to your beneficiaries.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfair.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.8rem] font-extralight`}
                    >
                        How it works
                    </h1>
                    <p className="text-[1.1rem] mt-2 text-gray-600">
                        minaLife makes it easy to apply for a life insurance
                        plan that helps <br className="hidden lg:block" />{" "}
                        protect those you care about most.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20">
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 pt-2 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            1
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Apply in minutes
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Our simple online application process means you’ll
                            be approved instantly. No health questions or
                            medical exams needed.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center pt-2 bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            2
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Choose your coverage
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Choose between $10K, $15K, $20K, and $25K in
                            coverage. Once you lock in a monthly premium, it’ll
                            stay the same during the life of your policy.
                            Guaranteed.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center pt-2 bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            3
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Get covered instantly
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Once you attach a credit card and make your first
                            payment, you’re covered. Coverage is immediate and
                            lasts your whole life.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 bg-[#deebff] sm:mt-20 py-14 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <h1
                    className={`${playfairB.className} lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.8rem] font-extralight`}
                >
                    Is this policy right for me?
                </h1>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:border-r 2md:border-r-gray-400 2md:pr-8 2md:pb-6">
                        <p className=" text-[1.5rem] font-semibold text-[#323232]">
                            This type of coverage is attractive to many because
                            you can get approved and covered in a matter of
                            minutes, and there are never any medical exams.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6">
                        <p className="text-lg text-[#323232] font-medium">
                            Guaranteed issue whole life insurance might be the
                            right fit for you if:
                        </p>
                        <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                            <li>
                                You want a simple application process without
                                medical exams or lab tests
                            </li>
                            <li>
                                You thought you couldn’t get life insurance
                                because of your age or health
                            </li>
                            <li>You want your policy to build cash value</li>
                            <li>You want coverage for the rest of your life</li>
                            <li>
                                You don’t want your family to have to worry
                                about your final expenses
                            </li>
                            <li>
                                You’re willing to pay a higher premium for the
                                unique benefits of this coverage
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 bg-[#fff2e3] py-14 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 justify-center">
                <h1
                    className={`${playfairB.className} lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.8rem] font-extralight`}
                >
                    Additional features and benefits
                </h1>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:border-r 2md:border-r-gray-400 2md:pr-8 2md:pb-6">
                        <p className="text-lg text-[#323232] font-medium">
                            Graded death benefit
                        </p>
                        <p className=" text-lg  text-[#323232]">
                            This policy comes with a graded death benefit, which
                            means that if you suffer a non-accidental death
                            within the first two years of coverage, your
                            beneficiaries will get 100% of the premiums you
                            paid, plus 30%. If death occurs after two years,
                            then the total amount of your coverage is paid,
                            minus any outstanding policy loans, regardless of
                            the cause of death.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6">
                        <p className="text-lg text-[#323232] font-medium">
                            Help the whole way
                        </p>
                        <p className="text-lg mt-5 text-[#323232]">
                            Before you buy this policy, minaLife is available to
                            help you with any questions you may have via phone,
                            email, text, and chat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#dbede5] lg:justify-center xl:flex xl:gap-28dbede5dbede5dbede5dbede5dbede5dbede5 xl:py-10 px-8 sm:mx-8 mt-8 sm:px-20 py-8 text-[#212326]">
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
                        <span>Continue </span>
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
