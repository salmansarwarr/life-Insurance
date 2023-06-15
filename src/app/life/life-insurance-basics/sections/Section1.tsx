import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const Section1 = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/q/goals");
    };

    return (
        <div className="mb-4 mt-[61px] px-8 sm:mb-6 xl:justify-center lg:px-14 lg:pl-24 lg:justify-between overflow-hidden flex flex-col lg:flex-row items-center bg-[#fff2e3] pt-10 2lg:pt-12 lg:pt-6 xl:pt-4">
            <div className="lg:w-[42rem] xl:py-14">
                <h1
                    className={`${dmSerif.className} text-left text-[#fa640a] font-bold flex flex-col text-[2.8rem] sm:text-[3.8rem] lg:text-[4rem]`}
                >
                    <span className="leading-none sm:h-[60px]">Life insurance</span>
                    <span>101</span>
                </h1>
                <p className="mt-2 text-lg text-left max-w-[504px]">
                    If you’re new to life insurance, it can be overwhelming to
                    sift through all the information out there. Learn the basics
                    and find out what you need to make an informed decision.
                </p>
            </div>
            <div className="bg-white lg:bg-[#dbede5] mt-6 sm:mt-8 lg:mt-0 w-full lg:w-fit">
                <div className="w-full lg:w-fit flex justify-center overflow-hidden bg-[#dbede5]">
                    <Image
                        className="sm:w-[350px] 2lg:w-auto xl:w-[440px]"
                        src="/Stocksy_txp.png"
                        alt="insurance"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

export default Section1;
