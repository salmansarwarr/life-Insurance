import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });
const playfairLight = Playfair_Display({ subsets: ["latin"], weight: "400" });

const Section3 = () => {
    return (
        <div className="text-[#323232] xl:gap-28 2md:gap-20 2md:justify-center px-8 2md:px-12 xl:pl-16 flex flex-col 2md:flex-row py-10 2md:py-14 items-center">
            <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
                <div className="lg:w-full">
                    <h1
                        className={`${playfair.className} text-[#262626] lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.8rem] font-extralight`}
                    >
                        How Minalife works
                    </h1>
                    <p className="text-[1.1rem] mt-2 text-gray-600">
                        Minalife makes it easy to apply for a life insurance
                        plan that helps <br className="hidden lg:block" />{" "}
                        protect those you care about most.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 xl:gap-20">
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            1
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Quick and Easy Application
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            The online application process on the Minalife is
                            designed to be quick and easy. You can fill out the
                            necessary information and complete the application
                            without hassle.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            2
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Explore Coverage Options
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
                            you can easily explore a wide range of coverage
                            options in Minalife. We have teamed up with
                            top-rated insurance carriers to provide a variety of
                            plan.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div
                            className={`rounded-full w-16 h-16 text-center bg-[#deebff] text-[#262626] text-5xl ${playfairLight.className}`}
                        >
                            3
                        </div>
                        <p className=" text-[1.5rem] text-[#323232] mt-2">
                            Personalize Your Coverage
                        </p>
                        <p className="text-[1.1rem] text-gray-600">
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
