"use client";

import Header from "../sections/Header";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Footer from "@/app/sections/Footer";
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
                    Understanding Whole Life Insurance
                </h1>
                <p className="text-gray-500 font-medium mt-2">Sep 3, 2020</p>
            </div>
            <div className="px-8 lg:px-14 sm:px-12 flex justify-center mt-10">
                <img
                    src="/life-insurance-01-older-couple.webp"
                    alt="road-trip"
                />
            </div>
            <div className="px-8 lg:px-14 sm:px-12 flex flex-col max-w-[700px] mx-auto justify-center mt-16">
                <p className="mt-2 text-lg xl:text-2xl text-black">
                    Whole life insurance is often referred to as a permanent
                    life insurance product. This means that no matter how old
                    you are when you die, and even if you become ill or are
                    diagnosed with a disease at some point, your beneficiaries
                    will receive a death benefit.
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Permanent life insurance and term life insurance are the two
                    main types of life insurance.
                    <Link
                        href="/life/term-life-policies"
                        className="mx-2 underline text-[#254742]"
                    >
                        Term life insurance
                    </Link>
                    covers the insured person for a set amount of time, often in
                    terms of 10, 20, or 30 years. If they die while the term
                    policy is in force, their beneficiaries receive the face
                    value of the life insurance policy. If they outlive the term
                    of the policy, it expires. They can then choose to purchase
                    a new policy if they wish. <br /> <br /> Whole life
                    insurance has two parts. It has a life insurance component
                    that pays the policy owner’s designated beneficiary a death
                    benefit. It also has a cash value component that can gain
                    value over time. Whole life insurance is more versatile in
                    that the policy owner can take out tax free loans against
                    the cash value of the policy when values become sufficient
                    to do so. If they decide they no longer need the insurance,
                    they can surrender the policy back to the insurance company
                    and get any available cash value in a lump sum. <br />{" "}
                    <br /> Another differentiating factor between whole and term
                    life insurance is the cost. Because of the lifetime coverage
                    and the cash value aspect of the policy, whole life
                    insurance policy premiums are higher.
                </p>
                <p className="mt-12 font-semibold text-lg xl:text-2xl text-black">
                    How much does whole life insurance cost?
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    At Minalife, our
                    <Link
                        href="/life/whole-life-policies"
                        className="mx-2 underline text-[#254742]"
                    >
                        whole life policies
                    </Link>
                    are guaranteed issue, which means applicants skip the
                    traditional underwriting process and are guaranteed the
                    policy. Understandably, because of the duration of the
                    policy and the guarantee of coverage, these policies tend to
                    be more expensive. No matter how long you live, if your
                    premium is paid on a monthly basis, your beneficiaries are
                    guaranteed the security of receiving a
                    <Link
                        href="/faq/what-is-a-death-benifit"
                        className="ml-2 underline text-[#254742]"
                    >
                        death benefit.
                    </Link>
                    <br /> <br /> This also means you will be paying that
                    premium for the rest of your life, even during retirement.
                    With Minalife’ whole life policy and in most other cases, your
                    premiums for a whole life insurance policy are fixed. <br />
                    <br /> Given all the variables, you’ll want to carefully
                    consider the cost of any type of life insurance and
                    thoroughly understand your policy before purchasing.
                </p>
                <p className="mt-12 font-semibold text-lg xl:text-2xl text-black">
                    What is whole life insurance cash value?
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Cash value is what some refer to as a savings-like component
                    of a whole life insurance policy. It grows slowly, on a
                    tax-deferred basis, and accumulates as you pay the policy
                    premium. <br /> <br /> With your authorization, the cash
                    value can also be used to pay premiums, keeping your policy
                    current as your income changes with age. When available, you
                    can also borrow against this cash value for unexpected
                    emergencies, or even to pay medical bills or go on vacation
                    by taking a tax free policy loan against the accumulated
                    policy cash value. Keep in mind that annual loan interest
                    will be applied to any outstanding loan balance, so it’s a
                    good idea to pay it back if you can. The final death benefit
                    will be reduced by any outstanding loans you have taken on
                    the policy and any premium due. <br /> <br /> For whole life
                    insurance policies with a higher death benefit, it’s a good
                    idea to consult with a certified financial advisor or wealth
                    expert to see if whole life insurance is aligned with your
                    financial goals.
                </p>
                <p className="mt-12 font-semibold text-lg xl:text-2xl text-black">
                    Who Gets The Death Benefit From A Whole Life Insurance
                    Policy?
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Like any other type of life insurance, whole life insurance
                    offers the policy owner the opportunity to name any person
                    or organization as the beneficiary of their death benefit.
                    This generally tax-free benefit, paid by the insurance
                    company, can provide financial stability for a family with
                    young children, replace income, or help create a legacy with
                    a donation to a favorite charity or non-profit group. <br />{" "}
                    <br /> Some companies offer policies that contain a graded
                    death benefit, where the payout is a percentage of the full
                    face amount or a percentage of premiums paid if the insured
                    passes away in the first couple years of the policy. After
                    coverage has been in effect for several years, the death
                    benefit increases to the full amount.
                </p>
                <p className="mt-12 font-semibold text-lg xl:text-2xl text-black">
                    How To Customize A Whole Life Insurance Policy
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Whole life insurance policies often come with additional
                    benefits which are referred to as riders or endorsements.
                    These options can sometimes add to the price of the life
                    insurance premiums, but they also provide additional
                    coverage or benefits. <br /> <br /> Below is a sampling of
                    some of the riders often available with whole life (and some
                    term) policies. Note that this is not a complete listing of
                    the many possible benefits that can be added to life
                    insurance policies with a rider or an endorsement.
                </p>
                <p className="text-lg mt-6 font-semibold text-black">
                    Family income benefit rider
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    People concerned with how their family will manage
                    financially in the event of their premature death may be
                    interested in purchasing a family income benefit rider. This
                    option provides a monthly benefit amount in addition to a
                    lump sum payment as a death benefit.
                </p>
                <p className="text-lg mt-6 font-semibold text-black">
                    Disability waiver of premium
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    If the policy owner becomes disabled and can no longer work,
                    they can stop making monthly premium payments for their life
                    insurance policy until they can go back to work. This rider,
                    which is also available with some term policies, protects
                    the policy owner from lapsing the policy, and potentially
                    forfeiting the money they’ve paid into their policy so far.
                    It is a worthwhile option to protect their policy in the
                    unexpected instance of a temporary or permanent disability.
                </p>
                <p className="text-lg mt-6 font-semibold text-black">
                    Long-term care rider
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Long-term care costs are rising steadily, and so are life
                    expectancies. In-home care, nursing home care, and various
                    rehabilitation services aren’t covered by many health
                    insurance policies. They are also expensive—and many people
                    struggle to pay for this type of medical care on their own.
                    A long-term care rider could help cover some of those costs,
                    and is an option worth considering for someone who wants
                    both a life insurance policy and long-term care coverage.
                </p>
                <p className="text-lg mt-6 font-semibold text-black">
                    Accelerated death benefit rider
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    The insured person has the option of accessing a portion of
                    the face value of their life insurance policy if they are
                    diagnosed with a terminal illness. This rider, which is also
                    available with some term policies, is beneficial because it
                    could provide the funds needed to help pay for expensive
                    life-extending care or medications, in addition to
                    day-to-day living expenses that the insured may have. Any
                    money received is typically provided on a tax-free basis via
                    a policy lien which reduces the death benefit paid at the
                    time of the insured’s death.
                </p>
                <p className="text-lg mt-6 font-semibold text-black">
                    Travel accident endorsement
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    With this endorsement, if the insured dies as a result of a
                    qualified travel related accident, the face amount of the
                    policy is increased.
                </p>
                <p className="mt-12 font-semibold text-lg xl:text-2xl text-black">
                    Why should I consider whole life insurance?
                </p>
                <p className="text-lg mt-6 text-[#323232]">
                    Whole life insurance is a great way to protect your family,
                    legacy, or business if you can afford the lifelong premiums.
                </p>
                <p className="text-lg mt-6 font-semibold text-black">
                    Here are some reasons why it might be right for you:
                </p>
                <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                    <li>You want coverage for life</li>
                    <li>
                        You’re planning on spending your retirement savings and
                        still want to leave money to loved ones
                    </li>
                    <li>
                        You want to manage estate taxes so your beneficiaries
                        don’t have to cut into their inheritance to pay them
                    </li>
                    <li>
                        You want to fund a special needs trust to provide
                        lifelong care for a dependent
                    </li>
                    <li>
                        You want to equalize inheritance when leaving a business
                        property to only one child
                    </li>
                </ul>
                <p className="text-lg mt-6 font-semibold text-black">
                    Why
                    <Link
                        href="/life/whole-life-policies"
                        className="mx-2 underline text-[#254742]"
                    >
                        whole life insurance with Minalife
                    </Link>
                    might be right for you:
                </p>
                <ul className="text-lg mt-5 text-[#323232] list-disc ml-8">
                    <li>
                        You’re between 60-85 years old, and looking for a policy
                        to cover your final expenses
                    </li>
                    <li>
                        You want the security of a guaranteed issue policy,
                        where you skip the traditional underwriting process and
                        are guaranteed coverage regardless of your health status
                    </li>
                    <li>
                        You want a policy with a cash value component that you
                        have the option to access later if needed
                    </li>
                    <li>
                        You’re looking for a policy with a lower face amount
                    </li>
                </ul>
                <p className="text-lg mt-6 text-[#323232]">
                    Whole life insurance offers a level of certainty that
                    appeals to some customers as well. As long as premiums are
                    paid, whole life policy doesn’t expire or decrease in value,
                    and the death benefit is guaranteed. This provides security
                    and peace of mind that your loved ones will be protected, no
                    matter the circumstances. <br /> <br /> However, when
                    considering whole life insurance as an option, it’s
                    important to ensure the monthly premiums are well within
                    your budget. It's not uncommon for policy owners to lapse on
                    their policies within a few years because they can't keep up
                    with the monthly premiums. These policy owners lose out on
                    the benefits of their whole life policies by not allowing
                    the cash value portion of their policy to grow and the death
                    benefit to be paid to their beneficiaries. <br /> <br />{" "}
                    Here’s the bottom line: both term and whole life insurance
                    policies have their merits, and each can be a valuable
                    option, depending on the individual. It’s important to
                    evaluate which is best for you and your family from a purely
                    individual perspective. A great way to kickstart the process
                    is to learn which product we can offer you based on your
                    response to a few quick questions.
                </p>
            </div>
            <div className="bg-[#deebff] xl:flex xl:justify-center xl:gap-10 xl:py-10 px-8 sm:mx-8 mt-8 sm:px-20 py-8 text-[#212326]">
                <div className="2md:mt-8">
                    <h1
                        className={`${playfair.className} text-[2rem] max-w-[380px]`}
                    >
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
