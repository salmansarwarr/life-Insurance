"use client";

import Header from "../sections/Header";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Footer from "../sections/Footer";
import StarRateIcon from "@mui/icons-material/StarRate";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });
const playfairMd = Playfair_Display({ subsets: ["latin"], weight: "500" });
const playfairLight = Playfair_Display({ subsets: ["latin"], weight: "400" });

const page = () => {
    const [showMenu, setshowMenu] = useState(false);

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
        <div>
            <Header showMenu={showMenu} setshowMenu={setshowMenu} />
            <div className="mt-[65px]x flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-60">
                <div className="flex flex-col gap-4 mt-6">
                    <div className="max-w-[600px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[3.8rem] md:leading-tight text-[#262626] sm:text-[2.8rem]`}
                        >
                            Real customers.
                        </p>
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[3.8rem] md:leading-tight text-[#262626] sm:text-[2.8rem]`}
                        >
                            Real Reviews.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[500px]"
                    src="/family-on-a-couch.jpg"
                    alt="img"
                />
            </div>
            <div className="text-[#323232] xl:gap-28 2md:gap-20 2md:justify-center px-8 2md:px-12 xl:pl-16 flex flex-col 2md:flex-row py-10 2md:py-14 items-center">
                <div className="flex gap-12 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20">
                        <div className="flex flex-col gap-3">
                            <Image
                                src="/icon-trustpilot_u560.webp"
                                alt="trustpilot"
                                height={50}
                                width={50}
                            />
                            <p className=" text-[1.5rem] text-[#323232] mt-2">
                                "Excellent” rating from Trustpilot
                            </p>
                            <p className="text-[1.1rem] text-gray-500">
                                Minalife has an ‘Excellent’ rating from
                                Trustpilot with 4.8/5 stars from customer
                                reviews.
                            </p>
                            <Link
                                href="#"
                                className="hover:underline text-black"
                            >
                                Read reviews →
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Image
                                src="/icon-BBB-centered.webp"
                                alt="BBBColor"
                                height={50}
                                width={50}
                            />
                            <p className=" text-[1.5rem] text-[#323232] mt-2">
                                A+ rating from Better Business Bureau
                            </p>
                            <p className="text-[1.1rem] text-gray-500">
                                Minalife is rated A+ by the Better Business
                                Bureau (BBB).
                            </p>
                            <Link
                                href="#"
                                className="hover:underline text-black"
                            >
                                BBB profile →
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Image
                                src="/__G__Logo.webp"
                                alt="trustpilot"
                                height={50}
                                width={50}
                            />
                            <p className=" text-[1.5rem] text-[#323232] mt-2">
                                4.7/5 stars on Google
                            </p>
                            <p className="text-[1.1rem] text-gray-500">
                                Minalife also earned a stellar rating of 4.7 out
                                of 5 stars on Google based on average customer
                                reviews.
                            </p>
                            <Link
                                href="#"
                                className="hover:underline text-black"
                            >
                                Read reviews →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-12 bg-[#dbede5] sm:pt-24 lg:pt-30 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 pt-16 justify-center">
                <h1
                    className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.6rem] font-extralight`}
                >
                    We do life insurance <br className="hidden sm:block" />{" "}
                    differently.
                </h1>
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:border-r 2md:pr-8 2md:pb-6">
                        <p className=" text-[1.5rem] font-semibold text-[#323232] flex items-center gap-2">
                            <MdOutlineDone /> Fast, straightforward application
                        </p>
                        <p className="text-[1.1rem] mt-5 text-[#323232]">
                            Our 100% online and hassle-free process makes it
                            easy to apply. What traditionally took weeks can now
                            be done in minutes, so you can focus on what
                            matters. Most applicants
                            <Link
                                href="/life/term-life-insurance-no-medical-exam"
                                className="underline ml-2"
                            >
                                don't even need a medical exam.
                            </Link>
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6">
                        <p className=" text-[1.5rem] font-semibold text-[#323232] flex items-center gap-2">
                            <MdOutlineDone /> Automated & simplified
                            underwriting
                        </p>
                        <p className="text-[1.1rem] mt-5 text-[#323232]">
                            Our simplified underwriting process uses new
                            technology and predictive modeling to provide
                            instant decisions, with no medical exams for most
                            people. When that isn’t possible, we’ve reduced the
                            time you wait from months to days.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6">
                        <p className=" text-[1.5rem] font-semibold text-[#323232] flex items-center gap-2">
                            <MdOutlineDone /> Expert advice
                        </p>
                        <p className="text-[1.1rem] mt-5 text-[#323232]">
                            If you want help, our team of licensed agents is
                            dedicated to finding you the right life insurance
                            policy for you.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6">
                        <p className=" text-[1.5rem] font-semibold text-[#323232] flex items-center gap-2">
                            <MdOutlineDone /> Money-back guarantee
                        </p>
                        <p className="text-[1.1rem] mt-5 text-[#323232]">
                            If you’re not happy with your policy in the first 30
                            days for any reason, we’ll refund your payment in
                            full. No problem.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6">
                        <p className=" text-[1.5rem] font-semibold text-[#323232] flex items-center gap-2">
                            <MdOutlineDone /> Flexible, affordable options
                        </p>
                        <p className="text-[1.1rem] mt-5 text-[#323232]">
                            We analyze your information against our wide range
                            of products in real-time, matching you to a policy
                            that fits your needs with a price that works for
                            you.
                        </p>
                    </div>
                    <div className="max-w-[550px] 2md:pb-6">
                        <p className=" text-[1.5rem] font-semibold text-[#323232] flex items-center gap-2">
                            <MdOutlineDone /> Cancel anytime
                        </p>
                        <p className="text-[1.1rem] mt-5 text-[#323232]">
                            You can cancel your policy anytime, with no
                            cancellation fees.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] sm:text-[2rem] max-w-[500px]`}
                        >
                            Coverage you can trust
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Our policies are insured by established life
                            insurance companies like Legal & General America,
                            Ameritas Life Insurance Corp., and TruStage®. By
                            combining our streamlined application process with
                            their coverage, we've been able to shrink the
                            application process down to just minutes, compared
                            to the weeks traditional applications require. You
                            get the dependability of major insurers and the
                            convenience of a modern technology company.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/value-in-good-hands.webp"
                    alt="img"
                />
            </div>
            {/* <div className="mt-[61px] bg-[#dbede5] flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-60">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfairMd.className} text-[2rem] md:text-[2.4rem] sm:text-[2rem] max-w-[500px]`}
                        >
                            Top investors
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Minalife is proud to be backed by leading investors,
                            including Sequoia, Accel, GV, Goldman Sachs, and the
                            investment funds of Jay-Z, Will Smith, Kevin Durant,
                            Robert Downey, Jr., and others. They’ve put their
                            money on us, so we can focus on you.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/value_backed-giants.webp"
                    alt="img"
                />
            </div> */}
            {/* <div className="py-14 2md:px-8">
                <div className="px-8 py-10 flex flex-col 2md:flex-row lg:px-14 xl:px-24 lg:py-20 sm:px-12 2md:justify-between items-center">
                    <div>
                        <p
                            className={`${playfair.className} max-w-[483px] lg:w-[100%] 2xl:w-[65%] text-[1.9rem] sm:text-[2.5rem] font-extralight leading-tight`}
                        >
                            Our origins
                        </p>
                        <p className="text-lg mt-3 max-w-[483px]">
                            Our founders, Peter Colis and Lingke Wang, met at
                            Stanford Business School and started Minalife in 2016
                            with the goal of making life insurance affordable,
                            accessible, and straightforward. While Lingke was in
                            college, he was upsold on an expensive life
                            insurance policy he didn’t need and couldn’t afford.
                            Eventually, he realized he wasn’t alone. Many
                            Americans don’t know much about life insurance or
                            have the right coverage to protect their families.
                            Traditionally, life insurance has been confusing,
                            expensive, and time-consuming. Lingke and Peter
                            wanted to change that—so they set out to help people
                            protect their families with simple, affordable life
                            insurance. Minalife provides an affordable life
                            insurance option so people don't get stuck with
                            policies they don't need.
                        </p>
                    </div>
                    <Link
                        href="/needs"
                        className="flex items-center justify-center gap-4 py-4 px-8 2md:px-0 2md:min-w-[212px] 2md:h-[56px] border mt-8 border-black hover:bg-[#323232] hover:text-white"
                    >
                        <span>Calculate coverage</span>
                        <ArrowRightAltIcon fontSize="small" />
                    </Link>
                </div>
            </div> */}
            <div className="flex gap-12 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfairMd.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                    >
                        See what our customers are saying
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
                            They made it extremely simple and easy…
                        </p>
                        <p className="text-[1rem] mt-4 text-gray-600">
                            They made it extremely simple and easy to apply. The
                            process took much less time than the competition.
                            Their representatives were cordial and friendly. The
                            cost was a third less. I would highly recommend this
                            company.
                        </p>
                        <p className="text-xs text-gray-600">Mason E.</p>
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
                            Getting life insurance was so easy…
                        </p>
                        <p className="text-[1rem] mt-4 text-gray-600">
                            Getting life insurance was so easy through Minalife.
                            I’ve been procrastinating doing it for years because
                            the whole process felt intimidating and confusing.
                            Minalife cut right through all that and made it
                            simple for me.
                        </p>
                        <p className="text-xs text-gray-600">Laleh H.</p>
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
                            Fast approval & great life insurance rates!
                        </p>
                        <p className="text-[1rem] mt-4 text-gray-600">
                            Extremely efficient easy application process & took
                            less than a week for approval. Compared premiums
                            from many insurance companies & Minalife Life had
                            the best rates. Medical not required. HIGHLY
                            RECOMMENDED!
                        </p>
                        <p className="text-xs text-gray-600">Donald L.</p>
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
                            This was such a good experience looking…
                        </p>
                        <p className="text-[1rem] mt-4 text-gray-600">
                            This was such a good experience looking at insurance
                            policy options. The experience working with the
                            Minalife team was so simple and easy. In the end I
                            was given options that exceeded my expectations and
                            gave me peace of mind thay my wife is in good hands
                            if something happened to me.
                        </p>
                        <p className="text-xs text-gray-600">Roger H.</p>
                    </div>
                </div>
            </div>
            <div className="py-14 2md:pt-24 2md:px-8">
                <div className="px-8 py-10 flex flex-col 2md:flex-row lg:px-14 xl:px-24 lg:py-20 sm:px-12 2md:justify-between bg-[#fff2e3] text-black">
                    <div>
                        <p
                            className={`${playfairMd.className} max-w-[483px] text-[#fa640a] lg:w-[100%] 2xl:w-[65%] text-[1.9rem] sm:text-[2.5rem] font-extralight leading-tight`}
                        >
                            Ready to get started?
                        </p>
                        <p className="text-[1.1rem] text-gray-900 mt-3 max-w-[500px]">
                            Get a personalized quote in seconds.
                        </p>
                    </div>
                    <Link
                        href="/estimate-experience"
                        className="flex items-center justify-center gap-4 py-4 px-8 2md:px-0 2md:min-w-[212px] 2md:h-[56px] border mt-8 border-black hover:bg-[#323232] hover:text-white"
                    >
                        <span>Check my price</span>
                        <ArrowRightAltIcon fontSize="small" />
                    </Link>
                </div>
            </div>
            <Footer
                p1="Trustpilot rating as of 3/31/23."
                p2={`Google rating as of 3/31/23.`}
            />
        </div>
    );
};

export default page;
