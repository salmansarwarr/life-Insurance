import Link from "next/link";
import Header from "../components/Header";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col px-6 py-8 gap-8 sm:py-14 sm:items-center">
                <div>
                    <p
                        className={`font-semibold text-[1.7rem] sm:text-[2rem] leading-tight`}
                    >
                        Thanks for trusting Minalife for your term life insurance
                        quote
                    </p>
                    <p className="mt-2">
                        Term life can help guard your family against major costs
                        with coverage that never decreases
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-center gap-2 lg:gap-4">
                    <div className="py-4 px-8 border-t-4 border-t-blue-700 shadow-md">
                        <p
                            className={`font-semibold text-[1.7rem] sm:text-[2rem] leading-tight`}
                        >
                            Term Life
                        </p>
                        <hr className="my-4" />
                        <div className="flex items-center">
                            <p
                                className={`font-semibold text-[1.7rem] sm:text-[2rem] leading-tight`}
                            >
                                $57.50
                            </p>
                            <p className="text-lg ml-10 rounded-full w-[35px] h-[35px] flex justify-center items-center border border-blue-700">
                                +
                            </p>
                            <p className="text-lg ml-2 rounded-full w-[35px] h-[35px] flex justify-center items-center border border-blue-700">
                                -
                            </p>
                        </div>
                        <p className="text-[0.7rem] text-gray-800">
                            MONTHLY PAYMENT
                        </p>
                        <p
                            className={`font-semibold mt-4 text-[1.3rem] sm:text-[2rem] leading-tight`}
                        >
                            $175,000
                        </p>
                        <p className="text-[0.7rem] text-gray-800">COVERAGE</p>
                        <p className="text-[0.8rem] mt-4 text-gray-800">
                            Just a few questions <br /> Instant decision <br />
                            100% free online
                        </p>
                        <button className="bg-[#fae07e] px-5 py-2 mt-6 font-medium border">
                            Apply
                        </button>
                    </div>
                    <div className="py-4 px-8 shadow-md">
                        <div className="flex gap-3 text-center">
                            <p className="border-b-2 text-gray-800 pb-2 border-b-[#fae07e]">
                                More pricing
                            </p>
                            <p className="border-b-4 pb-2 text-lg border-b-[#fae07e] font-semibold">
                                Other products
                            </p>
                        </div>
                        <div className="bg-[#f6f7f7] flex flex-col px-8 py-6">
                            <p className="text-lg font-semibold">
                                Compare with other products
                            </p>
                            <div className="flex flex-col sm:flex-row mt-4  bg-white px-4 py-4">
                                <div>
                                    <p className="text-lg font-semibold">
                                        Whole life
                                    </p>
                                    <p className="text-[0.8rem] mt-2 text-gray-800">
                                        Builds cash value, helps pay final
                                        expenses
                                    </p>
                                </div>
                                <hr className="my-6 sm:hidden " />
                                <div className="h-[100px] w-[1px] border mx-6"></div>
                                <div>
                                    <p className="text-lg font-semibold">
                                        $49.00
                                    </p>
                                    <p className="text-[0.7rem] text-gray-800">
                                        MONTHLY PAYMENT
                                    </p>
                                    <p className="mt-2 text-[1.1rem]">
                                        $25.000
                                    </p>
                                    <p className="text-[0.7rem] text-gray-800">
                                        COVERAGE
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row mt-5 gap-1 place-self-end">
                                <p className="text-[0.7rem] text-gray-800">
                                    Not sure which product is right?
                                </p>
                                <Link
                                    href=""
                                    className="text-[0.7rem] underline text-green-800 font-medium"
                                >
                                    Get help deciding
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
