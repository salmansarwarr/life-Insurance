import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section5 = () => {
    return (
        <div className="flex gap-12 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-16 sm:mt-24 justify-center">
            <div className="gap-10 items-start grid w-full 2xl:w-[65%] 2md:gap-y-0 2md:grid-cols-2">
                <div
                    className={`lg:w-[100%] self-start max-w-[560px] text-[2rem] sm:text-[2.5rem] font-extralight`}
                >
                    <p className={`${playfair.className} leading-tight`}>
                        Employer-sponsored (group) life insurance
                    </p>
                    <p className="text-[1.2rem] leading-tight text-black mt-2 mb-6">
                        Group life insurance typically comes in the form of an
                        employer-sponsored life insurance policy. You may
                        already have some coverage provided to you as an
                        employee benefit. However, this type of policy might
                        only provide a fraction of the coverage you need. For
                        this reason, many people buy an individual term life
                        insurance policy to supplement the coverage they receive
                        through work.
                    </p>
                    <Link
                        href="/life/employer-sponsored-life-insurance/"
                        className=" bg-black px-6 py-4 text-base font-medium text-gray-100 hover:bg-[#292929]"
                    >
                        Learn more
                    </Link>
                </div>
                <div className="max-w-[550px]">
                    <Image src="/employer-coverage.png" alt="employer-coverage" height={500} width={500}/>
                </div>
            </div>
        </div>
    );
};

export default Section5;
