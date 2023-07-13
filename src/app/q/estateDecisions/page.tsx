"use client";

import Image from "next/image";
import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    interface Decisons {
        recieveAssets: "court" | "user";
        guardianForKids: "court" | "user";
        medAndFinancialQuestions: "court" | "user";
    }

    const router = useRouter();
    const [decisons, setDecisons] = useState<Decisons>({
        recieveAssets: "court",
        guardianForKids: "court",
        medAndFinancialQuestions: "court",
    });
    const [section, setSection] = useState(1);

    return (
        <>
            <Header />
            <div>
                <div className=" text-sm flex flex-col gap-2 w-full bg-gray-100">
                    <div className="w-[20%] h-2 bg-[#054742]"></div>
                    <p className="px-4 pb-2">
                        PART 2:
                        <span className="font-medium">ASSESS YOUR NEEDS</span>
                    </p>
                </div>
                {section < 4 && (
                    <div className="flex flex-col justify-center items-center w-full h-full py-14 px-4">
                        <div className="border p-10 flex justify-center items-center flex-col text-center shadow-lg">
                            <p className="font-medium">
                                Are you interested in making any of these
                                decisions?
                            </p>
                            <p className="text-sm mt-6 text-gray-800">
                                {section} of 3
                            </p>
                            <p
                                className={`text-3xl mt-2 ${playfair.className}`}
                            >
                                {section == 1 && "When heirs receive my assets"}
                                {section == 2 && "Guardians for my kids"}
                                {section == 3 &&
                                    "Medical and financial questions (when I am incapacitated)"}
                            </p>
                        </div>

                        <div className="flex px-4 mt-8 gap-4">
                            <button
                                onClick={() => {
                                    section == 1
                                        ? setDecisons({
                                              ...decisons,
                                              recieveAssets: "court",
                                          })
                                        : section == 2
                                        ? setDecisons({
                                              ...decisons,
                                              guardianForKids: "court",
                                          })
                                        : setDecisons({
                                              ...decisons,
                                              medAndFinancialQuestions: "court",
                                          });
                                    section == 1
                                        ? setSection(2)
                                        : section == 2
                                        ? setSection(3)
                                        : setSection(4);
                                }}
                                className="py-2 rounded px-4 sm:px-10 sm:py-3 border border-orange-500 text-orange-500"
                            >
                                Courts can decide
                            </button>
                            <button
                                onClick={() => {
                                    section == 1
                                        ? setDecisons({
                                              ...decisons,
                                              recieveAssets: "user",
                                          })
                                        : section == 2
                                        ? setDecisons({
                                              ...decisons,
                                              guardianForKids: "user",
                                          })
                                        : setDecisons({
                                              ...decisons,
                                              medAndFinancialQuestions: "user",
                                          });
                                    section == 1
                                        ? setSection(2)
                                        : section == 2
                                        ? setSection(3)
                                        : setSection(4);
                                }}
                                className="py-2 rounded px-4 sm:px-10 sm:py-3 border border-green-700 text-green-700"
                            >
                                Let me have a say
                            </button>
                        </div>
                    </div>
                )}
                {section == 4 && (
                    <div className="flex flex-col justify-center items-center w-full h-full py-14 px-4">
                        <p className={`text-3xl mt-2 ${playfair.className}`}>
                            Thanks for answering those questions.
                        </p>
                        <p className="mt-6 text-gray-800">
                            We have the right tools to fit your needs
                        </p>
                        <Link
                            href="/q/epgReviewPlan"
                            className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                        >
                            <span>Next </span>
                            <ArrowForwardIcon
                                fontSize="small"
                                color="inherit"
                            />
                        </Link>
                    </div>
                )}
                {section > 1 && (
                    <button
                        onClick={() =>
                            section == 2 ? setSection(1) : setSection(2)
                        }
                        className="rounded-full mb-7 bg-gray-200 sm:absolute sm:bottom-[-15px] sm:left-[90px] flex mt-12 justify-end pr-1 items-center h-[40px] w-[40px]"
                    >
                        <ArrowBackIosIcon
                            className="font-extralight text-gray-600"
                            fontSize="medium"
                        />
                    </button>
                )}
            </div>
        </>
    );
};

export default page;
