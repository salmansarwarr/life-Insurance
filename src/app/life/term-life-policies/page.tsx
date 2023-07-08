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
            <div className="mt-[61px] bg-[#fff2e3] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[3rem] text-[#fa640a] sm:text-[2.4rem] leading-tight max-w-[500px]`}
                        >
                            Term Life Insurance Policies
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Term life insurance offers fast, easy and affordable
                            financial protection for your loved ones.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/estimate-experience"
                            className="bg-[rgb(33,35,34)] transition-all text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                        >
                            Check my price
                        </Link>
                        <Link
                            href="/q/goals"
                            className="text-[rgb(33,35,34)] hover:bg-[rgb(33,35,34)] transition-all hover:text-white border border-black sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                        >
                            Start Applying
                        </Link>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/Stocksy.png"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="self-start max-w-[560px]">
                    <h1
                        className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Term life insurance
                    </h1>
                </div>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:pb-6 2md:border-r 2md:pr-8">
                        <p className=" text-2xl font-semibold text-[#323232]">
                            What is it and how does it work?
                        </p>
                        <p className="text-[1.15rem] mt-4 text-[#323232]">
                            Term life insurance features the most
                            straightforward and affordable life insurance option
                            by covering you for a set "term" (typically 10 to 30
                            years). If you pass away during the term period,
                            your beneficiaries receive a cash payment.
                        </p>
                        <p className=" text-lg mt-4 font-semibold text-[#323232]">
                            Term life insurance with minaLife might be right for
                            you if:
                        </p>
                        <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                            <li>
                                Your loved ones would need to replace lost
                                income while raising children or paying a
                                mortgage
                            </li>
                            <li>
                                You have short-term financial responsibilities
                                such as loans, a new business, or credit card
                                debt
                            </li>
                            <li>
                                You want the most affordable life insurance
                                coverage
                            </li>
                            <li>
                                You appreciate the straightforward nature of
                                term life insurance
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6 2md:border-r 2md:pr-8">
                        <p className=" text-2xl font-semibold text-[#323232]">
                            What’s the difference between term and whole life
                            insurance?
                        </p>
                        <p className="text-[1.15rem] mt-4 text-[#323232]">
                            The answer lies in the names. Term life insurance
                            uses premiums to cover you for the determined "term"
                            of the policy, expiring if not claimed within that
                            timeframe.{" "}
                            <Link
                                href="/life/whole-life-policies"
                                className="underline"
                            >
                                Whole life insurance
                            </Link>{" "}
                            can last your entire life if premiums remain
                            current. Whole life policies also have the potential
                            to accrue cash value, depending on the policy.
                            Still, premiums typically cost between five and 15
                            times more than a term policy for the same benefit
                            amount. <br /> <br /> Term life may provide a good
                            match for someone seeking affordable coverage to
                            replace lost income over a critical period, such as
                            while raising children or paying off a mortgage.
                            Whole life insurance offers options for those with
                            complex financial situations or someone desiring the
                            security of lifetime coverage.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] sm:text-[2rem] max-w-[500px]`}
                        >
                            Coverage you can trust
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Our policies are backed by established life
                            insurance companies like Legal & General America,
                            Ameritas Life Insurance Corp., Senior Life, and
                            TruStage®. By combining minaLife' streamlined
                            application with their coverage, we've shortened the
                            application process to minutes, compared to weeks
                            with traditional applications. With minaLife, you get
                            the dependability of major insurers and the
                            convenience of modern technology.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/value_backed-giants.webp"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 xl:mt-14 justify-center">
                <div className="self-start max-w-[560px]">
                    <h1
                        className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Why purchase with minaLife?
                    </h1>
                </div>
                <div className="grid 2md:grid-cols-2 2xl:w-[65%] gap-12 w-full  lg:items-center">
                    <div className="max-w-[550px]">
                        <Image
                            src="/icon_agent.svg"
                            alt="Expert advice"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Expert advice
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            You don't have to talk to an agent if you don't want
                            to, but if you do, our licensed agents remain ready
                            and eager to answer your questions. They're here to
                            help you find the right life insurance policy for
                            you.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/icon_we-use-tech.svg"
                            alt="Flexible coverage"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Flexible coverage
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Get anywhere from $20,000 to $2 million in term life
                            insurance protection. Choose between 10-, 15-, 20-,
                            and 30-year terms.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/shoe.svg"
                            alt="Fast process (no medical exams)"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Fast process (no medical exams)
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Our 100% online and hassle-free process makes it
                            easy to apply. What traditionally took weeks can now
                            be done in minutes, and you don't even need a
                            medical exam (just answer a few health questions).
                            There are some instances when underwriters need more
                            information about your health to complete the
                            application process.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <Image
                            src="/icon_money-back.svg"
                            alt="Affordable Policies"
                            height={50}
                            width={50}
                        />
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Free-look, money-back guarantee
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Take your policy for a trial run with a 30-day
                            money-back guarantee. If you're not fully satisfied
                            in the first 30 days, we'll refund you in full.
                            After that time, you can cancel your policy with no
                            cancellation fees.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="self-start max-w-[560px]">
                    <h1
                        className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        Simplified issue vs. fully underwritten
                    </h1>
                    <p className="text-2xl mt-1 font-light">
                        minaLife offers term life insurance policies with both
                        simplified issue and fully underwritten options.
                        Understand the differences and what it means for you.
                    </p>
                </div>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:pb-6 2md:border-r 2md:pr-8">
                        <p className=" text-lg font-semibold text-[#323232]">
                            Simplified issue:
                        </p>
                        <p className="text-lg mt-5 text-[#323232]">
                            Most of our term policies are simplified issue,
                            meaning the application process and underwriting
                            decision come instantly based solely on third-party
                            data and the applicant's responses to health
                            questions within the application. No medical exam is
                            necessary.
                            <br />
                            <br />
                            Simplified issue underwriting may be right for you
                            if:
                        </p>
                        <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                            <li>
                                You need life insurance, but you aren’t sure
                                you’d qualify for a traditionally underwritten
                                policy
                            </li>
                            <li>
                                You want a simple process without medical exams
                                or lab tests
                            </li>
                            <li>
                                You thought you couldn’t get life insurance
                                because of your age or health
                            </li>
                        </ul>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6 2md:border-r 2md:pr-8">
                        <p className=" text-lg font-semibold text-[#323232]">
                            Fully underwritten:
                        </p>
                        <p className="text-lg mt-5 text-[#323232]">
                            We also offer fully underwritten term policies, a
                            more traditional method that historically includes a
                            complete application and medical exam. minaLife
                            modernizes the process and doesn't require a medical
                            exam but does include health questions within the
                            application to help determine premium levels.
                            <br />
                            <br />
                            Fully underwritten policies may be right for you if:
                        </p>
                        <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                            <li>You’re in good health</li>
                            <li>
                                You’re looking for life insurance with a higher
                                death benefit
                            </li>
                            <li>You don’t mind a longer application process</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 py-14 lg:items-center bg-[#fff2e3] w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="self-start max-w-[560px]">
                    <h1
                        className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        FAQs
                    </h1>
                </div>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:pb-6 2md:border-r 2md:pr-8">
                        <p className=" text-2xl font-semibold text-[#323232]">
                            What does a policy cover?
                        </p>
                        <p className="text-[1.15rem] mt-4 text-[#323232]">
                            It's ultimately up to your beneficiaries to decide
                            how to use the cash payout. People often choose to
                            help cover things like:
                        </p>
                        <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                            <li>Home mortgages or rent</li>
                            <li>Lost income</li>
                            <li>Loans and debt</li>
                            <li>Children’s education</li>
                            <li>Living expenses</li>
                            <li>Funeral costs</li>
                        </ul>
                        <p className=" text-2xl mt-7 font-semibold text-[#323232]">
                            How do policy claims and payouts work?
                        </p>
                        <p className="text-[1.15rem] mt-4 text-[#323232]">
                            It's typically simple for your beneficiaries to file
                            a claim and receive a cash payout. If you pass away
                            while your coverage is in force, your beneficiary
                            files a claim with your insurance carrier (as
                            identified on your policy documents), and the
                            carrier will issue the death benefit payout. Barring
                            unusual complications, your beneficiary will receive
                            an untaxed, lump-sum payment for the value of the
                            policy's death benefit. For example, if you purchase
                            $1 million in coverage, your beneficiary will
                            receive a tax-free $1 million lump-sum payout.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6 2md:border-r 2md:pr-8">
                        <p className=" text-2xl font-semibold text-[#323232]">
                            Is there a chance the payout won’t be paid?
                        </p>
                        <p className="text-[1.15rem] mt-4 text-[#323232]">
                            A claim may not be paid if underwriting finds that
                            parts of the application were answered untruthfully
                            or if the claim is the result of death by suicide
                            within the first two years of the policy being in
                            force.
                        </p>
                        <p className=" text-2xl mt-7 font-semibold text-[#323232]">
                            What happens when my term ends?
                        </p>
                        <p className="text-[1.15rem] mt-4 text-[#323232]">
                            If you do not pass away during your term, you have
                            options when your term ends:
                        </p>
                        <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                            <li>
                                You can apply to extend your term to ensure you
                                always have coverage.
                            </li>
                            <li>
                                You can apply for a new policy with a fresh term
                                length and coverage amounts
                            </li>
                            <li>
                                You can decide to bypass extensions or not
                                purchase a new policy
                            </li>
                        </ul>
                        <p className="text-2xl mt-7 font-semibold text-[#323232]">
                            Have more questions?
                        </p>
                        <p className="text-[1.15rem] mt-4 text-[#323232]">
                            Find the answers on the{" "}
                            <Link href="/faq" className="underline">
                                minaLife FAQ page
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfair.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                    >
                        How to purchase a policy
                    </h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20">
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 pt-2 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            1
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Choose coverage
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Choose a policy that’s right for you. minaLife offers a
                            range of coverage and term length options, so you
                            can personalize your coverage to fit your needs.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 pt-2 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            2
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Apply online
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            After you choose your plan, complete our online
                            application. It’s simple, straightforward, and it
                            only takes about 10 minutes.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 pt-2 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            3
                        </div>
                        <p className="text-[1.5rem] text-[#323232] mt-2">
                            Activate your coverage
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Once your application is submitted, we’ll process
                            the information to provide you a quick (sometimes
                            instant) decision on coverage eligibility and your
                            rate. If approved, you can activate your coverage
                            immediately.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#fff2e3] xl:flex xl:gap-20 xl:py-10 px-8 sm:mx-8 mt-8 sm:px-20 py-8 text-[#212326]">
                <div className="2md:mt-8">
                    <h1 className={`${playfair.className} text-[2.4rem] `}>
                        Get an instant quote
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
            <div className="bg-[#054742] mt-10 py-10 sm:py-14 lg:pt-20 sm:pb-24 sm:px-14 px-5">
                <div className="grid">
                    <div className="grid sm:hidden">
                        <p className="text-sm font-semibold text-white">
                            Contact Us
                        </p>
                        <p className="text-sm text-white mt-4">
                            1606 Headway Circle
                        </p>
                        <p className="text-sm text-white">#9013</p>
                        <p className="text-sm text-white">Austin, TX 78754</p>
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
                                href="/carriers"
                                className="underline text-white"
                            >
                                Our carriers
                            </Link>
                            <Link
                                href="/reviews"
                                className="underline text-white"
                            >
                                Reviews
                            </Link>
                            <Link
                                href="/careers"
                                className="underline text-white"
                            >
                                Careers
                            </Link>
                            <Link
                                href="/press"
                                className="underline text-white"
                            >
                                Press
                            </Link>
                            <Link
                                href="/leadership"
                                className="underline text-white"
                            >
                                Leadership
                            </Link>
                            <Link
                                href="/whats-yours-minalife"
                                className="underline text-white"
                            >
                                What's your Minalife? Podcast
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2">
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
                        </div>
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
