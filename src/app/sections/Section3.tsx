import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section3 = () => {
    return (
        <div className="bg-[#c7ffde] text-[#323232] xl:gap-28 2md:gap-20 2md:justify-center px-8 2md:px-12 xl:pl-16 flex flex-col 2md:flex-row py-10 2md:py-14 items-center">
            <div className="flex gap-12 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 xl:mt-14 justify-center">
                <div className="self-start max-w-[560px]">
                    <h1
                        className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2.3rem] sm:text-[2.5rem] font-extralight`}
                    >
                        How MinaLife Works
                    </h1>
                </div>
                <div className="grid 2md:grid-cols-2 2xl:w-[65%] gap-12 w-full  lg:items-center">
                    <div className="max-w-[550px]">
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Quick and Easy Application
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            The online application process on the Minalife is
                            designed to be quick and easy. You can fill out the
                            necessary information and complete the application
                            without hassle.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Explore Coverage Options
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            you can easily explore a wide range of coverage
                            options in Minalife. We have teamed up with
                            top-rated insurance carriers to provide a variety of
                            plan.
                        </p>
                    </div>
                    <div className="max-w-[550px]">
                        <p className="mt-2 text-lg xl:text-xl text-black">
                            Personalize Your Coverage
                        </p>
                        <p className="text-lg mt-1 text-[#7c7377]">
                            Minalife uses advanced data technology to
                            personalize your coverage. Minalife tailors the
                            available coverage plans to fit your specific
                            requirements based on provided information
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
