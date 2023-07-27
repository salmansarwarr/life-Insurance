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
            <div className="mt-[61px] flex w-full justify-center items-center flex-col py-14 px-4 xl:px-20 gap-3">
                <p className="text-gray-500 font-medium mt-4">LIFE INSURANCE</p>
                <h1
                    className={`${playfair.className} max-w-[700px] text-center text-[1.84rem] sm:text-[2.5rem] font-extralight`}
                >
                    30-Year Term Life Insurance Explained
                </h1>
                <p className="text-gray-500 font-medium mt-2">
                    Joshua Cox-Steib | Feb 28, 2022
                </p>
            </div>
            <div className="px-8 lg:px-14 sm:px-12 flex justify-center mt-10">
                <img src="/roadtrip-in-car.webp" alt="road-trip" />
            </div>
            <div className="px-8 lg:px-14 sm:px-12 flex flex-col max-w-[700px] mx-auto justify-center mt-16">
                <p className="mt-2 text-lg xl:text-2xl text-black">
                    Term life insurance policies are perhaps the most common
                    form of life insurance, and they tend to have the most
                    competitive rates. But their affordability doesn't
                    necessarily mean they are less valuable for you. In fact,
                    term policies can offer higher coverage amounts than other
                    forms of life insurance.
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Like all life insurance, term policies can help families and
                    individuals increase their financial security. But before we
                    dive into the strategies for using these policies, it's
                    essential to understand what they are.
                </p>
                <p className="mt-12 font-semibold text-lg xl:text-2xl text-black">
                    What is a 30-year term life insurance policy?
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    <Link
                        href="/life-insurance/common-terms-about-term-life"
                        className="underline text-[#254742] mr-2"
                    >
                        Term life insurance policies
                    </Link>
                    provide a payout to the listed beneficiaries if the
                    policyholder passes away while the policy is in force.{" "}
                    <br /> <br /> A term policy is in force for the duration of
                    the "term," so long as the premiums are paid. This term is
                    decided at the time the policy is created. It's often done
                    in increments of ten, as in a 10-, 20-, or 30-year term life
                    policy. That means if the policy expires and the applicable
                    duration or term has completed, there won't be a payout. So,
                    while these policies are often less expensive than permanent
                    life insurance, the policyholder may outlive the policy.
                </p>
                <p className="text-lg mt-12 font-semibold text-[#323232]">
                    How much does 30-year term life insurance cost?
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Term life insurance often has more competitive rates than
                    permanent life insurance policies. Some of this is due to
                    the impermanent nature of term policies. Yet, these policies
                    are also usually cheaper because they often lack certain
                    features, like cash value (some permanent policies can
                    accrue value over time, some of which can be withdrawn
                    during the policyholder's lifetime). Monthly premiums for
                    people in their 20s and 30s acquiring a 30-year policy are
                    often under $100/month, with variance depending on the
                    amount of the death benefit. The affordability of term
                    policies is one reason they're among the more common
                    policies used in
                    <Link
                        href="/life-insurance/facts-about-group-life-insurance"
                        className="underline text-[#254742] ml-2"
                    >
                        group life insurance plans.
                    </Link>
                </p>
            </div>
            <div className="mt-[61px] bg-[#deebff] flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                        >
                            Ready to get started?
                        </p>
                        <p className="text-gray-600 font-medium mt-4">
                            Get a personalized quote in seconds.
                        </p>
                    </div>
                </div>
                <Link
                    href="/estimate-experience"
                    className="text-[rgb(33,35,34)] hover:bg-[rgb(33,35,34)] transition-all hover:text-white border border-black sm:w-[175px] text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                >
                    Check my price →
                </Link>
            </div>
            <div className="px-8 lg:px-14 sm:px-12 flex flex-col max-w-[700px] mx-auto justify-center mt-16">
                <p className="text-lg mt-12 font-semibold text-[#323232]">
                    What happens to term life insurance when it expires?
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    When the policy expires, it goes out of force and can no
                    longer pay out the beneficiaries. However, there may be an
                    option to renew the policy. Depending on the policy, your
                    situation, and the insurer, you may be able to renew your
                    term policy for another term. However, because you are now
                    older, rates may go up during the renewal process.
                </p>
                <p className="mt-12 font-semibold text-lg xl:text-2xl text-black">
                    Who is a 30-year term life insurance policy suitable for?
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Everyone's life insurance needs are different. There are
                    some scenarios where a 30-year life insurance policy could
                    be the right choice for you, such as if you have financial
                    goals, plans, or obligations spanning roughly 30 years. To
                    help with planning, consider using the Minalife web tool to
                    <Link
                        href="/life/how-much-life-insurance-do-i-need"
                        className="underline text-[#254742] ml-2"
                    >
                        calculate coverage.
                    </Link>
                </p>
                <p className="text-lg mt-12 font-semibold text-[#323232]">
                    How much does 30-year term life insurance cost?
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Term life insurance often has more competitive rates than
                    permanent life insurance policies. Some of this is due to
                    the impermanent nature of term policies. Yet, these policies
                    are also usually cheaper because they often lack certain
                    features, like cash value (some permanent policies can
                    accrue value over time, some of which can be withdrawn
                    during the policyholder's lifetime). Monthly premiums for
                    people in their 20s and 30s acquiring a 30-year policy are
                    often under $100/month, with variance depending on the
                    amount of the death benefit. The affordability of term
                    policies is one reason they're among the more common
                    policies used in
                    <Link
                        href="/life-insurance/facts-about-group-life-insurance"
                        className="underline text-[#254742] ml-2"
                    >
                        group life insurance plans.
                    </Link>
                </p>
                <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                    <li>Young people planning for the future</li>
                </ul>
                <p className="text-lg mt-5 text-[#323232]">
                    Whether you're just beginning a career out of college or
                    family planning with a spouse, young people making plans for
                    the future can be an ideal demographic for considering a
                    30-year term policy. For many people in these situations,
                    such a policy would cover them until their fifties or
                    sixties.
                </p>
                <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                    <li>People with special needs children</li>
                </ul>
                <p className="text-lg mt-5 text-[#323232]">
                    Having a special needs child can involve planning and
                    research that other parents may not need. One part of this
                    is finding ways to ensure your child's financial stability
                    well into the future. A 30-year term life insurance policy
                    can help provide some of that financial security.
                </p>
                <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                    <li>People with a new 30-year mortgage</li>
                </ul>
                <p className="text-lg mt-5 text-[#323232]">
                    Taking out a life insurance policy to match the size and
                    duration of your mortgage can help ensure that your home is
                    secure for your family, even if you were to pass away before
                    the mortgage was fully paid off. Indeed,
                    <Link
                        href="/life-insurance/life-insurance-and-debt"
                        className="underline text-[#254742] ml-2"
                    >
                        debt is one of the more common items that life insurance
                        can help with.
                    </Link>
                </p>
                <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                    <li>People with 30 or more years until retirement</li>
                </ul>
                <p className="text-lg mt-5 text-[#323232]">
                    People with roughly 30 years left until retirement may want
                    a lengthy term policy to offset the risk of income loss if
                    they were to pass away. This approach can provide financial
                    security to your family or dependents at a time when it's
                    needed most.
                </p>
                <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                    <li>
                        People who want the best rates on their life insurance
                    </li>
                </ul>
                <p className="text-lg mt-5 text-[#323232]">
                    Term life policies often have the best rates. The younger
                    and healthier you are when you begin the policy, the better
                    these rates are likely to be. It's common for term policies
                    to have fixed rates, so starting young and taking out a
                    30-year level term life insurance policy can help lock in
                    low rates for a long time. For this reason, 30-year life
                    insurance rates are often some of the most competitive.
                </p>
                <p className="mt-12 font-semibold text-lg xl:text-2xl text-black">
                    Term life policies with Minalife
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    <Link
                        href="/life/term-life-policies"
                        className="underline text-[#254742] mr-2"
                    >
                        Term life policies with Minalife
                    </Link>
                    include simplified and fully underwritten term life policies
                    for qualifying applicants. With a simplified policy, you'll
                    have a less rigorous application process, allowing for
                    greater access and a quicker application. Fully underwritten
                    policies involve a lengthier, more robust application
                    process but generally allow higher coverage limits. While
                    neither type requires medical exams for most applicants,
                    fully underwritten plans include some health questions to
                    help determine premium levels. <br /> <br /> If you're
                    looking for life insurance online, consider a 30-year term
                    life policy with Minalife and
                    <Link
                        href="/estimate-experience"
                        className="underline text-[#254742] mx-2"
                    >
                        get a quote
                    </Link>
                    today.
                </p>
            </div>
            <div className="bg-[#f5f5f5] xl:flex xl:justify-center xl:gap-10 xl:py-10 px-8 sm:mx-8 mt-8 sm:px-20 py-8 text-[#212326]">
                <div className="2md:mt-8">
                    <h1 className={`${playfair.className} text-[2rem] max-w-[380px]`}>
                    Get your estimate in seconds.
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
            <Footer p1="" p2="" />
        </>
    );
};

export default page;
