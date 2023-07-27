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

const playfairB = Playfair_Display({ subsets: ["latin"], weight: "700" });
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
                    <div className="max-w-[500px]">
                        <p
                            className={`${playfairB.className} leading-tight text-[2.5rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.5rem] text-[#262422]  max-w-[500px]`}
                        >
                            Our online life insurance policies
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            At Minalife, we work with the best in the business to
                            find you a life insurance policy to meet your needs.
                            Explore this page to learn about the online life
                            insurance products we offer.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/father-and-daughter-playing-instrument.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfairMd.className} text-[2rem] md:text-[3rem] sm:text-[2.4rem] max-w-[500px]`}
                        >
                            Term life insurance
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            With multiple term lengths and a wide range of
                            coverage amounts to choose from, you can select a
                            life insurance policy that works best for you. Every
                            term life insurance policy we offer includes level
                            monthly premiums that never increase over the course
                            of the policy. Product type, benefit amounts, and
                            eligibility may vary by carrier.
                        </p>
                    </div>
                    <Link
                        href="/life/term-life-policies"
                        className="bg-[rgb(33,35,34)] transition-all text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                    >
                        Learn More
                    </Link>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/card-product-details-term.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] sm:text-[2.4rem] md:text-[3rem] max-w-[500px]`}
                        >
                            Whole life insurance
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Age and health issues make it difficult for some to
                            gain access to life insurance. That's why Minalife
                            offers whole life insurance. It helps your loved
                            ones cover expenses such as funeral costs,
                            outstanding debt, and other day-to-day costs. If
                            you're aged 66 to 85, you can get approved in
                            minutes without a medical exam, regardless of your
                            medical history. Simply answer a few health
                            questions. With a secure rate that never increases,
                            you're covered for life.
                        </p>
                    </div>
                    <Link
                        href="/life/whole-life-policies"
                        className="bg-[rgb(33,35,34)] transition-all text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                    >
                        Learn More
                    </Link>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/card-product-details-whole.webp"
                    alt="img"
                />
            </div>
            <div className="mt-[61px] bg-white flex w-full justify-center items-center md:flex-row flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-72">
                <div className="flex flex-col gap-4">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfairMd.className} text-[2rem] sm:text-[2.4rem] md:text-[3rem] max-w-[500px]`}
                        >
                            How Minalife works
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            Minalife partners with some of the world's largest and
                            most respected life insurance companies. You'll
                            receive the dependability of centuries-old industry
                            giants combined with the convenience of a modern
                            technology company. With Minalife, the online life
                            insurance application process is entirely digitized
                            to give you results in minutes. Once you apply, we
                            analyze your information in real-time against our
                            products to match you with the best policy and price
                            available. We make understanding and investing in
                            life insurance easy. If you have questions, our team
                            of licensed agents is always here to help.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/minaLife-spot-illustrations.webp"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfair.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-extralight`}
                    >
                        Why choose Minalife?
                    </h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20">
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/shoe.svg"
                            alt="shoe"
                            width={60}
                            height={60}
                        />
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Fast, easy application
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Our application process is simple, straightforward,
                            and entirely online. That means you can apply for
                            life insurance from the comfort of home—or anywhere.
                            Most applicants don't even require a medical exam.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/icon_money-back.svg"
                            alt="shoe"
                            width={60}
                            height={60}
                        />
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Money-back guarantee
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            If you're not happy with your policy for any reason
                            in the first 30 days, we'll refund your payment in
                            full. You're also free to cancel your policy at any
                            time with no cancellation fees.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/family.svg"
                            alt="shoe"
                            width={60}
                            height={60}
                        />
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Lifetime customer support
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            Whether you need technical support, answers to your
                            life insurance questions, or unbiased advice from a
                            licensed agent, our team is ready to help.
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
                            Minalife works with some of the world's largest and
                            most respected insurance companies, so you can feel
                            confident and secure. Minalife puts our customers
                            and their needs first, as is evident in our
                            excellent user ratings.
                        </p>
                    </div>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/value_trust.webp"
                    alt="img"
                />
            </div>
            <Footer p1="" p2="" />
        </>
    );
};

export default page;
