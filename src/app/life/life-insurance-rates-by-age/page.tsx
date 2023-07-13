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
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] text-[#fa640a] sm:text-[2rem] max-w-[500px]`}
                        >
                            Lock in your lowest life insurance rate
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            The older you get, the more life insurance rates
                            increase. The sooner you buy, the sooner you'll lock
                            in your lowest premium—and save the most money in
                            the long run.
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
                    src="/Stocksy_txp2f9.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] sm:text-[2rem] max-w-[500px]`}
                        >
                            A simple way to save on life insurance
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Purchasing life insurance early typically sets you
                            up for your best rates. The average life insurance
                            cost can increase by 8%, on average, for each year
                            you delay. However, the moment you sign your policy,
                            your rate is locked in and won't change during the
                            policy's term. For example, a 40-year-old
                            non-smoking male in good health could get a new,
                            20-year term policy with $1 million coverage for
                            $2,172 a year.* However, if he were to purchase the
                            same policy at age 41, his cost would rise to $2,340
                            a year—and he'd spend $2,508 annually if he waited
                            another year.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/chart-life-insurance-age.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfairMd.className} text-[2rem] md:text-[2.4rem] sm:text-[2rem] max-w-[500px]`}
                        >
                            Average term life insurance rates by age
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            As you age, your average life insurance costs
                            increase. Based on our policies, we developed a
                            chart that shows the shift in premiums based on
                            different age groups. The term life insurance quotes
                            shown represent a 10-year term life insurance policy
                            with a death benefit of $1 million for applicants in
                            good health. In this scenario, the monthly cost of
                            life insurance for a 35-year-old non-smoker would be
                            $65. A 45-year-old non-smoker would pay a $135
                            monthly premium for the same policy.* By purchasing
                            this policy at age 35 instead of 45, you could save
                            $840 per year over the life of your policy.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/rate-chart-10yr.webp"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <h1
                    className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                >
                    Common mistakes when <br className="hidden sm:block" />{" "}
                    buying life insurance
                </h1>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:border-r 2md:pr-8 2md:pb-6">
                        <p className=" text-[1.5rem] font-semibold text-[#323232]">
                            Waiting until you have kids
                        </p>
                        <p className="text-[1.1rem] mt-5 text-[#323232]">
                            If you delay buying life insurance until you have
                            kids, it could cost you valuable years of locking in
                            a low premium. Even if you don’t yet have children
                            to protect, life insurance can cover your personal
                            debts, medical bills, home mortgage, lost wages, and
                            even funeral expenses. <br /> <br /> Your health
                            status is one of the most crucial factors when
                            determining premiums. The healthier you are, the
                            less you pay, so getting life insurance at a younger
                            age can be advantageous. As you age, the risk of
                            developing health issues (such as cancer or
                            diabetes) can lead to higher premiums and sometimes
                            make it difficult to get coverage. Securing life
                            insurance earlier in life helps protect you—and
                            those who depend on you—against any unexpected
                            changes.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6">
                        <p className=" text-[1.5rem] font-semibold text-[#323232]">
                            Relying on employer-sponsored coverage
                        </p>
                        <p className="text-[1.1rem] mt-5 text-[#323232]">
                            Employer-provided life insurance is a nice benefit,
                            but these policies rarely offer sufficient coverage.
                            Employer-sponsored policies typically only provide
                            coverage of one to two times your annual salary.
                            However, financial experts recommend you carry
                            coverage about ten times your salary. And any change
                            to your employment status (such as retirement,
                            layoff, or job change) likely means you’ll lose the
                            policy. If a change occurs when you're older—or
                            after you've developed a health issue—it could be
                            more expensive and difficult to secure new coverage.
                            Having your own policy helps protect you and your
                            loved ones against life’s unexpected changes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#dbede5] lg:justify-center  xl:flex xl:gap-32 xl:py-10 px-8 sm:mx-8 mt-8 sm:px-20 py-8 text-[#212326]">
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
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfair.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                    >
                        How minaLife works
                    </h1>
                    <p className="text-[1.1rem] mt-2 text-gray-600">
                        minaLife makes it easy to apply for a life insurance plan
                        that helps <br className="hidden lg:block" /> protect
                        those you care about most.
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
                            Choose your coverage
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Select the life insurance policy that’s right for
                            you. If you're not sure, keep in mind that you can
                            make adjustments after you get approved. Wondering
                            how much coverage you need? Use our handy
                            calculator.
                        </p>
                        <Link
                            href="/needs"
                            className="text-[1.1rem] hover:underline"
                        >
                            Calculate coverage →
                        </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 pt-2 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            2
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Apply in minutes
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            After choosing your plan, complete our simple online
                            application and answer questions about your age,
                            health, medical history, and lifestyle. It's easy,
                            straightforward, and should only take about 10
                            minutes.
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
                            className={`rounded-full w-16 h-16 pt-2 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            3
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Get coverage
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Once you submit your application, we’ll process it
                            in real-time for a quick—often instant—decision. You
                            can activate your coverage immediately after
                            receiving approval, and we won't require a medical
                            exam (the health questions you answer are enough).
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-[61px] bg-[#dbede5] flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-52">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[420px]">
                        <p
                            className={`${playfairMd.className} text-[2rem] md:text-[2.4rem] text-[#262626] sm:text-[2rem] max-w-[500px]`}
                        >
                            A+ rated and backed by top insurance agencies
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            MinaLife works with some of the world's largest and
                            most respected insurance companies, so you can feel
                            confident and secure. minaLife puts our customers and
                            their needs first, as is evident in our excellent
                            user ratings.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/life/trust"
                            className="bg-[rgb(33,35,34)] transition-all text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/value_trust.webp"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfairMd.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                    >
                        See what verified customers say on Trustpilot
                    </h1>
                </div>
                <div className="grid 2md:grid-cols-4 gap-4 lg:gap-8">
                    <div className="flex flex-col gap-4 bg-[#fff2e3] p-8 rounded-lg">
                        <div>
                            <div className="flex text-[#fa640a]">
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                            </div>
                            <p className="text-xs mt-2 text-gray-500">
                                via Trustpilot
                            </p>
                        </div>
                        <p
                            className={`${playfairMd.className} text-lg text-[#fa640a] leading-[1.3] sm:text-[2rem]`}
                        >
                            It was the easiest transaction ever
                        </p>
                        <p className="text-[1rem] mt-4 text-gray-600">
                            It was the easiest transaction ever! I loved getting
                            this insurance policy! I still work full time and I
                            saved a lot of time! Excellent!!
                        </p>
                        <p className="text-xs text-gray-600">Wendell M.</p>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#deebff] p-8 rounded-lg">
                        <div>
                            <div className="flex text-[#054742]">
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                            </div>
                            <p className="text-xs mt-2 text-gray-500">
                                via Trustpilot
                            </p>
                        </div>
                        <p
                            className={`${playfairMd.className} text-lg text-[#054742] leading-[1.3] sm:text-[2rem]`}
                        >
                            Great experience from start to finish
                        </p>
                        <p className="text-[1rem] mt-4 text-gray-600">
                            Great experience from start to finish. Would totally
                            recommend this process to anyone. Thanks for helping
                        </p>
                        <p className="text-xs text-gray-600">Richard P..</p>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#e5e0d9] p-8 rounded-lg">
                        <div>
                            <div className="flex text-[#fa640a]">
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                            </div>
                            <p className="text-xs mt-2 text-gray-500">
                                via Trustpilot
                            </p>
                        </div>
                        <p
                            className={`${playfairMd.className} text-lg text-[#fa640a] leading-[1.3] sm:text-[2rem]`}
                        >
                            I loved working with minaLife
                        </p>
                        <p className="text-[1rem] mt-4 text-gray-600">
                            I loved working with minaLife. They are professional,
                            timely, honest, and quick to respond to my questions
                            and concerns. I was really pleased with the service
                            I received through working with them. Thanks for
                            helping me get insured, minaLife!
                        </p>
                        <p className="text-xs text-gray-600">M.F. Cook</p>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#dbede5] p-8 rounded-lg">
                        <div>
                            <div className="flex text-[#054742]">
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                                <StarRateIcon
                                    fontSize="small"
                                    color="inherit"
                                />
                            </div>
                            <p className="text-xs mt-2 text-gray-500">
                                via Trustpilot
                            </p>
                        </div>
                        <p
                            className={`${playfairMd.className} text-lg text-[#054742] leading-[1.3] sm:text-[2rem]`}
                        >
                            Quick, Honest, Stress Free
                        </p>
                        <p className="text-[1rem] mt-4 text-gray-600">
                            Quick, honest, and zero stress. Compared to
                            traditional agents, a no-brainer. As advertised!
                        </p>
                        <p className="text-xs text-gray-600">Josh</p>
                    </div>
                </div>
            </div>
            <div className="py-14 2md:pt-24 2md:px-8">
                <div className="px-8 py-10 flex flex-col 2md:flex-row lg:px-14 xl:px-24 lg:py-20 sm:px-12 2md:justify-between bg-[#fff2e3] text-black">
                    <div>
                        <p
                            className={`${playfairMd.className} max-w-[483px] text-[#fa640a] lg:w-[100%] 2xl:w-[65%] text-[1.9rem] sm:text-[2.5rem] font-extralight leading-tight`}
                        >
                            We're here to help
                        </p>
                        <p className="text-[1.1rem] text-gray-900 mt-3 max-w-[500px]">
                            At minaLife, we know life insurance is a significant
                            decision, so we make it easy to get answers. Our
                            team of licensed non-comissioned agents is ready to
                            answer all your questions.
                        </p>
                    </div>
                    <Link
                        href="/contact-us"
                        className="flex items-center justify-center gap-4 py-4 px-8 2md:px-0 2md:min-w-[212px] 2md:h-[56px] border mt-8 border-black hover:bg-[#323232] hover:text-white"
                    >
                        <span>Contact us</span>
                        <ArrowRightAltIcon fontSize="small" />
                    </Link>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5 pb-7 px-4">
                <h1
                    className={`${playfair.className} text-center text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                >
                    We're featured in:
                </h1>
                <div className="flex gap-16 w-full justify-center flex-wrap mt-10">
                    <Image alt="venture" height={130} width={130} src="/logo_venturebeat.svg"/>
                    <Image alt="bi" height={130} width={130} src="/logo_businessinsider.svg"/>
                    <Image alt="bloomberg" height={130} width={130} src="/logo_bloomberg.svg"/>
                    <Image alt="yahoo" height={130} width={130} src="/logo_yahoo.svg"/>
                    <Image alt="fortune" height={130} width={130} src="/logo_fortune.svg"/>
                    <Image alt="forbes" height={130} width={130} src="/logo_forbes.svg"/>
                </div>
            </div>
            <Footer
                p1="*Sample based on 2021 rates. Individual rates may vary by carrier, underwriting class, date of issue, and other factors."
                p2={`"How Age Affects Life Insurance", Investopedia. https://www.investopedia.com/articles/personal-finance/022615/how-age-affects-life-insurance-rates.asp`}
            />
        </>
    );
};

export default page;
