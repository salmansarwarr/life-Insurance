"use client";

import Header from "../sections/Header";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Footer from "@/app/sections/Footer";
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
            <div className="mt-[61px] bg-[#deebff] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[600px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] text-[#054742] sm:text-[2rem] leading-tight`}
                        >
                            How it works: our quick, easy application
                        </p>
                        <p className="text-gray-700 font-medium mt-6">
                            Apply for life insurance online in just a few
                            minutes with Ethos' simple application. No medical
                            exams are required. Just answer a few health
                            questions — many customers enjoy same-day coverage!
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/q/goals"
                            className="bg-[rgb(33,35,34)] transition-all text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/mother-and-son-doing-yoga.webp"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfair.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Get coverage in 3 easy steps:
                    </h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20">
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center bg-[#dbede5] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            1
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Get a quote
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            To get a life insurance quote online, simply answer
                            a few questions about yourself and see estimated
                            costs for various policy options.
                        </p>
                        <Link
                            href="/estimate-experience"
                            className="text-[1.1rem] hover:underline"
                        >
                            Calculate coverage →
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center bg-[#dbede5] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            2
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Apply in minutes
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Our secure, online application is fast and
                            straightforward—you can complete the process in
                            about 10 minutes.
                        </p>
                        <Link
                            href="/q/goals"
                            className="text-[1.1rem] hover:underline"
                        >
                            Apply now →
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center bg-[#dbede5] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            3
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Get coverage
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Once you submit your application, we'll process it
                            quickly (often instantly) and let you know about
                            your coverage eligibility and rates. If approved,
                            you can activate your coverage immediately.
                        </p>
                        <Link
                            href="/q/goals"
                            className="text-[1.1rem] hover:underline"
                        >
                            Start application →
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 sm:mt-20 py-10 bg-[#deebff] lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="flex flex-col gap-4 max-w-[500px] lg:self-start mt-4">
                    <h1
                        className={`${playfair.className} leading-tight lg:w-[100%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                    >
                        What to expect when you apply:
                    </h1>
                    <p className="text-xl">
                        Ethos takes the guesswork out of the application
                        process. Answer a few basic questions and see which
                        products offer the best fit for your coverage needs.
                    </p>
                </div>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:border-r 2md:pr-8 border-r-gray-400">
                        <p className="font-semibold text-[#323232]">
                            How do you determine what policy is best for me?
                        </p>
                        <p className="mt-4 text-[#323232]">
                            We start with your age. If you're between 66 and 85,
                            you qualify for our guaranteed-issue whole life
                            policy and are automatically approved. <br /> <br />
                            Applicants ages 20 to 65 are eligible for
                            <Link
                                href="/life/term-life-policies"
                                className="underline"
                            >
                                our term policies.
                            </Link>
                            Using the information on your application as well as
                            our proprietary technology and smart underwriting,
                            we can offer a range of coverage options.
                        </p>
                        <p className="mt-5 font-semibold text-[#323232]">
                            Who can apply?
                        </p>
                        <p className="mt-4 text-[#323232]">
                            All U.S. citizens ages 20 to 85 can apply. Ethos is
                            licensed and operates in the District of Columbia
                            and every U.S. state except New York.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <p className="font-semibold text-[#323232]">
                            What information do I need?
                        </p>
                        <p className="mt-4 text-[#323232]">
                            To ensure your application goes quickly and
                            smoothly, have the following information handy:
                        </p>
                        <ul className="mt-4 text-[#323232] list-disc ml-8">
                            <li>Driver's license</li>
                            <li>
                                Social security number (to verify your identity)
                            </li>
                            <li>Personal and family medical history</li>
                            <li>Current prescription information</li>
                        </ul>
                        <p className="mt-5 font-semibold text-[#323232]">
                            Why do we need this information?
                        </p>
                        <p className="mt-4 text-[#323232]">
                            To provide you with instant coverage, we ask for
                            your driver's license information and social
                            security number to verify your identity in
                            real-time. Having your medical history and
                            prescription information gives us a clear picture of
                            your health without requiring a medical exam. Rest
                            assured that this information remains secure and
                            confidential.
                        </p>
                        <p className="mt-5 font-semibold text-[#323232]">
                            What if I change my mind during or after my
                            application?
                        </p>
                        <p className="mt-4 text-[#323232]">
                            You may start an application and withdraw from the
                            application process at any time without penalty.
                            Before issuing any coverage to you, we will tell you
                            the amount of coverage and premium we will offer
                            you. If you like our offer, you can add your
                            electronic signature at the end of the application
                            to confirm the information provided is correct, and
                            you will be issued coverage. You always have a 30
                            day period to cancel coverage and get your money
                            back if you change your mind.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:pr-8 ">
                        <h1
                            className={`${playfair.className} leading-tight lg:w-[100%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                        >
                            What kind of questions will I be asked?
                        </h1>
                        <p className="text-xl mt-3">
                            Depending on which of our products you qualify for,
                            the application process will vary.
                        </p>
                    </div>
                    <div className="text-lg max-w-[550px]">
                        <p className="mt-4 text-[#323232]">
                            Applicants between 66 and 85 are eligible for our
                            <Link
                                href="life/whole-life-insurance"
                                className="mx-2 underline"
                            >
                                guaranteed issue whole life
                            </Link>
                            policy and can get approved after answering a few
                            simple questions.
                            <br />
                            <br />
                            <Link
                                href="life/term-life-policies"
                                className="mr-2 underline"
                            >
                                Term policies
                            </Link>
                            require additional questions, but applications can
                            still be completed in minutes. In general, you can
                            expect questions related to:
                        </p>
                        <ul className="mt-4 text-[#323232] list-disc ml-8">
                            <li>Your health</li>
                            <li>Your legal and driving history</li>
                            <li>Your health insurance history</li>
                            <li>Your employment and income status</li>
                            <li>Your lifestyle and hobbies</li>
                            <li>Your drug and/or alcohol use</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#f5f5f5] xl:flex xl:gap-20 xl:py-10 px-8 sm:mx-8 mt-8 sm:px-20 py-8 text-[#212326]">
                <div className="2md:mt-8">
                    <h1 className={`${playfair.className} text-[2.4rem] `}>
                        Get a quote
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
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:pr-8 ">
                        <h1
                            className={`${playfair.className} leading-tight lg:w-[100%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                        >
                            How do policy claims and payouts work?
                        </h1>
                        <p className="text-xl mt-3">
                            Your beneficiaries can easily file a claim and
                            receive a cash payout. If you pass away while your
                            coverage is in force, your beneficiary files a claim
                            with your insurance carrier. The carrier will then
                            issue the death benefit payout.
                        </p>
                    </div>
                    <div className="text-lg max-w-[550px]">
                        <p className="mt-4 text-[#323232]">
                            Assuming there are no unusual circumstances, your
                            beneficiary will receive an untaxed, lump-sum
                            payment for the policy's value (the death benefit).
                            Suppose you purchase $250,000 in coverage. In that
                            case, your beneficiary will receive a tax-free
                            $250,000 lump-sum payout. In some instances, the
                            payout may shift slightly due to policy loans or the
                            inclusion of a graded death benefit (if you have a
                            whole life policy with a graded benefit). See your
                            policy documents for more details
                        </p>
                        <p className="text-xl font-semibold mt-5 text-[#323232]">
                            Exclusions
                        </p>
                        <p className="mt-4 text-[#323232]">
                            There are several reasons why a claim might not be
                            paid. These include fraud, misstatements, or
                            material misrepresentations of the information
                            provided in your application. That's why it's
                            important to be truthful in your application. A
                            claim can also be denied if the insured's death
                            results from suicide in the first two years of the
                            policy being in effect. Details may vary by state,
                            so refer to the policy or ask us for additional
                            information.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-[61px] bg-[#deebff] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[600px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] text-[#054742] sm:text-[2rem] leading-tight`}
                        >
                            Life Insurance 101
                        </p>
                        <p className="text-gray-700 font-medium mt-6">
                            How does life insurance work? How much coverage will
                            I need? Find these answers (and more) in one place.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/life/life-insurance-basics"
                            className="bg-[rgb(33,35,34)] transition-all text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/Tips_For_New_Families.webp"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <h1
                    className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                >
                    Frequently asked questions
                </h1>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0 lg:items-center 2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:pb-6">
                        <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                            What does MinaLife's life insurance cover?
                        </p>
                        <p className="text-lg mt-1 text-[#323232]">
                            MinaLife's life insurance can help cover a variety
                            of expenses, including mortgage payments, debt,
                            college tuition, and lost income. Ultimately, it's
                            up to your beneficiaries to decide how to use the
                            payout.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6">
                        <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                            Does the COVID-19 pandemic affect MinaLife's life
                            insurance coverage?
                        </p>
                        <p className="text-lg mt-1 text-[#323232]">
                            No, MinaLife's life insurance does cover deaths
                            related to COVID-19, and the pandemic does not
                            impact our rates. You can still apply for life
                            insurance online with MinaLife and be considered
                            covered as soon as your first premium payment is
                            made.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:py-6">
                        <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                            Is the life insurance provided by my employer
                            enough?
                        </p>
                        <p className="text-lg mt-1 text-[#323232]">
                            Employer-sponsored policies typically offer coverage
                            that is a fraction of what financial experts
                            recommend. MinaLife offers individual term policies
                            to supplement your coverage through work and help
                            ensure your family is fully protected.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:py-6">
                        <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                            How much life insurance do I need?
                        </p>
                        <p className="text-lg mt-1 text-[#323232]">
                            Calculating the right amount of coverage can be
                            tricky, but MinaLife offers a helpful life insurance
                            calculator to determine your coverage needs. A
                            common rule of thumb is to multiply your annual
                            income by 10.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:py-6">
                        <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                            What type of life insurance does MinaLife offer?
                        </p>
                        <p className="text-lg mt-1 text-[#323232]">
                            MinaLife offers both term life insurance and
                            guaranteed issue whole life insurance, with term
                            lengths ranging from 10 to 30 years and coverage
                            amounts from $20,000 to $2 million, depending on
                            your qualifications.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:py-6">
                        <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                            How can I be sure that MinaLife is a legitimate
                            provider?
                        </p>
                        <p className="text-lg mt-1 text-[#323232]">
                            MinaLife's policies are backed by industry giants
                            with a long history of financial strength and
                            stability. You can trust that your policy will
                            withstand the test of time, while enjoying the
                            simplicity and ease of use of a modern tech company.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:py-6">
                        <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                            Does MinaLife offer a money-back guarantee?
                        </p>
                        <p className="text-lg mt-1 text-[#323232]">
                            Yes, MinaLife's application is non-binding and 100%
                            free, with no impact on your credit score. Each
                            policy comes with a 30-day free look period and a
                            money-back guarantee. You can cancel your policy at
                            any time, with no fees or penalties.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-[61px] bg-[#deebff] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[600px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] text-[#054742] sm:text-[2rem] leading-tight`}
                        >
                            We're here to help
                        </p>
                        <p className="text-gray-700 font-medium mt-6">
                            Our team of licensed agents are happy to answer any
                            questions you have.
                        </p>
                    </div>
                </div>
                <Link
                    href="/q/goals"
                    className="text-[rgb(33,35,34)] hover:bg-[rgb(33,35,34)] transition-all hover:text-white border border-black sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                >
                    Contact us →
                </Link>
            </div>
            <Footer p1="" p2="" />
        </>
    );
};

export default page;
