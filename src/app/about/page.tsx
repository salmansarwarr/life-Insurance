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
            <div className="mt-[61px] bg-[#fff2e3] flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-64">
                <div className="my-6">
                    <div className="max-w-[400px]">
                        <p
                            className={`${playfair.className} text-[2rem] md:text-[2.4rem] text-[#262422] sm:text-[2rem] max-w-[500px]`}
                        >
                            We’re here to help millions protect their families
                            with access to simple, affordable life insurance
                        </p>
                        <p className="text-gray-800 font-medium mt-4">
                            And we’re well on our way.
                        </p>
                    </div>
                </div>
                <Image
                    height={2000}
                    width={500}
                    src="/Life-insurance-dad-kids_f0y19t.webp"
                    alt="img"
                />
            </div>
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0  2md:grid-cols-2">
                    <div className="max-w-[550px] 2md:pr-8 ">
                        <h1
                            className={`${playfair.className} leading-tight lg:w-[100%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                        >
                            We saw a problem with the life insurance industry.
                            And a way to fix it.
                        </h1>
                    </div>
                    <div className="text-lg max-w-[550px]">
                        <p className="mt-4 text-[#323232]">
                            The traditional process could take weeks to
                            complete—and that’s just the application. It could
                            involve confusing paperwork and long phone calls
                            with agents. At the end of the day, it wasn’t as
                            people-friendly as it could be. <br /> <br /> We set
                            out to change that. <br /> <br /> minaLife has
                            redesigned the application process from start to
                            finish, to make sure you always come first. How? By
                            offering flexible coverage options, eliminating
                            unnecessary hassles, giving you access to valuable
                            online tools, and having a team of licensed agents
                            ready to help you through it all. <br /> <br />
                            We’re here to put you first.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-14 2md:pt-24 2md:px-8">
                <div className="px-8 py-10 flex flex-col 2md:flex-row lg:px-14 xl:px-24 lg:py-20 sm:px-12 2md:justify-between bg-[#dbede5] text-black">
                    <div>
                        <p
                            className={`${playfairMd.className} max-w-[483px] text-[#054742] lg:w-[100%] 2xl:w-[65%] text-[1.9rem] sm:text-[2.5rem] font-extralight leading-tight`}
                        >
                            See how we’re changing the game
                        </p>
                    </div>
                    <Link
                        href="/why-minalife"
                        className="flex items-center justify-center gap-4 py-4 px-8 2md:px-0 2md:min-w-[212px] 2md:h-[56px] border mt-8 border-black hover:bg-[#323232] hover:text-white"
                    >
                        <span>Learn more</span>
                        <ArrowRightAltIcon fontSize="small" />
                    </Link>
                </div>
            </div>
            <div className="bg-[#f5f5f5] py-5 pb-7 px-4">
                <h1
                    className={`text-center text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
                >
                    <span className={playfair.className}>Over</span>{" "}
                    <span className="font-medium">$400M</span>{" "}
                    <span className={playfair.className}>
                        of invested capital
                    </span>
                </h1>
                <div className="flex gap-16 w-full justify-center flex-wrap mt-10">
                    <Image
                        alt="sequoia-logo"
                        height={130}
                        width={130}
                        src="/sequoia-logo.svg"
                    />
                    <Image
                        alt="accel-logo"
                        height={130}
                        width={130}
                        src="/accel-logo.svg"
                    />
                    <Image
                        alt="gv-logo"
                        height={130}
                        width={130}
                        src="/goldman-sachs-logo.svg"
                    />
                    <Image
                        alt="softbank"
                        height={130}
                        width={130}
                        src="/softbank.webp"
                    />
                    <Image
                        alt="general_catalyst"
                        height={130}
                        width={130}
                        src="/general_catalyst.webp"
                    />
                </div>
            </div>
            <div className="mt-[61px] flex w-full justify-center items-center md:flex-row-reverse flex-col py-14 px-4 xl:px-20 gap-10 xl:gap-x-52">
                <div className="max-w-[420px]">
                    <p
                        className={`${playfairMd.className} leading-tight text-[2rem] md:text-[2.4rem] text-[#262626] sm:text-[2rem] max-w-[500px]`}
                    >
                        Industry-leading partners
                    </p>
                    <p className="text-gray-800 font-medium mt-5">
                        minaLife partners with some of the most respected and
                        highly-rated insurance carriers in the world. These
                        insurance giants have paid out hundreds of millions of
                        dollars in life insurance claims for over a hundred
                        years.
                    </p>
                </div>
                <img
                    className="self-center sm:max-w-[448px] md:max-w-[350px] lg:max-w-[448px]"
                    src="/value_trust.webp"
                    alt="img"
                />
            </div>
            <Footer p1="" p2=""/>
        </>
    );
};

export default page;
