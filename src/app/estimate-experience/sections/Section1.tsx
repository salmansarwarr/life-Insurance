"use client";

import { Playfair_Display } from "next/font/google";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });

const Section1 = () => {
    const [showSelect, setShowSelect] = useState(false);

    interface Info {
        gender?: "male" | "female" | undefined;
        birthday?: Date | undefined;
        zipCode?: string | undefined;
        health?: "average" | "great" | "excellent" | undefined;
        nicotine?: "yes" | "no" | undefined;
        estimatedCredit?: string | undefined;
    }

    const [info, setInfo] = useState<Info>();

    const filled =
        info &&
        "gender" in info &&
        "birthday" in info &&
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
        <div className="bg-[#deebff] px-8 sm:px-20 py-8 text-[#212326]">
            <div>
                <h1 className={`${playfair.className} text-[2.4rem]`}>
                    Get a quote
                </h1>
                <p className="mt-1">
                    See a range of personalized price estimates in seconds.
                </p>
            </div>
            <form className="mt-8">
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
                                    ? "w-full py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 border bg-white border-gray-400 transition-all"
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
                                    ? "w-full py-4 border bg-[#82d1ca] text-white transition-all border-gray-400"
                                    : "w-full py-4 border bg-white border-gray-400 transition-all"
                            }
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between gap-2 mt-2">
                        <div className="w-full">
                            <p className="text-sm">Birthdate</p>
                            <input
                                type="date"
                                name="birthday"
                                onChange={handleChange}
                                className="mt-2 w-full px-3 py-4 border bg-white border-gray-400"
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-sm">Zip Code</p>
                            <input
                                type="number"
                                name="zipCode"
                                onChange={handleChange}
                                value={info?.zipCode}
                                className="mt-2 px-3 w-full py-4 border bg-white border-gray-400"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
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
                                    ? "w-full py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 border bg-white border-gray-400 transition-all"
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
                                    ? "w-full py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 border bg-white border-gray-400 transition-all"
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
                                    ? "w-full py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 border bg-white border-gray-400 transition-all"
                            }
                        />
                    </div>
                </div>
                <div className="mt-4">
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
                                    ? "w-full py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 border bg-white border-gray-400 transition-all"
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
                                    ? "w-full py-4 border bg-[#054742] text-white transition-all border-gray-400"
                                    : "w-full py-4 border bg-white border-gray-400 transition-all"
                            }
                        />
                    </div>
                </div>
                <div className="mt-4">
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
                                    info?.estimatedCredit == "high(740+)"
                                        ? "w-full text-left px-4 py-2 border bg-[#054742] text-white border-gray-400 transition-all"
                                        : "w-full text-left px-4 py-2 border border-t-0 bg-white border-gray-400 transition-all"
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
                                    info?.estimatedCredit == "average(670-739)"
                                        ? "w-full text-left px-4 py-2 border bg-[#054742] text-white border-gray-400 transition-all"
                                        : "w-full text-left px-4 py-2 border border-t-0 bg-white border-gray-400 transition-all"
                                }
                            />
                            <input
                                type="button"
                                name="estimatedCredit"
                                //@ts-ignore
                                onClick={handleChange}
                                value="Low(below 670)"
                                className={
                                    info?.estimatedCredit == "low(below 670)"
                                        ? "w-full text-left px-4 py-2 border bg-[#054742] text-white border-gray-400 transition-all"
                                        : "w-full text-left px-4 py-2 border border-t-0 bg-white border-gray-400 transition-all"
                                }
                            />
                            <input
                                type="button"
                                name="estimatedCredit"
                                //@ts-ignore
                                onClick={handleChange}
                                value="I don't know"
                                className={
                                    info?.estimatedCredit == "i don't know"
                                        ? "w-full text-left px-4 py-2 border bg-[#054742] text-white border-gray-400 transition-all"
                                        : "w-full text-left px-4 py-2 border border-t-0 bg-white border-gray-400 transition-all"
                                }
                            />
                        </div>
                    )}
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
                    This tool is intended for estimation purposes only. Please
                    reach out to our support team for specific questions.
                </p>
            </form>
        </div>
    );
};

export default Section1;
