import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section4 = () => {
    return (
        <div className="bg-white text-[#323232] 2md:gap-20 xl:gap-28 2md:justify-center px-8 2md:px-12 flex flex-col 2md:flex-row-reverse py-10 2md:py-14 items-center">
            <div className="flex flex-col gap-3 2md:gap-6">
                <h1
                    className={`${playfair.className} text-[2rem] sm:text-[2.5rem] font-extralight`}
                >
                    Peace of Mind in price of a Dinner
                </h1>
                <p className="font-medium max-w-[538px]">
                    Qualify for a policy to protect your family for decades in
                    just 10 mins.
                </p>
                <Link
                    href="/estimate-experience"
                    className="bg-[rgb(33,35,34)] text-white hover:bg-[#494d4b] sm:w-[159px] font-medium text-center mt-6 py-3 sm:py-4 px-4 text-[1rem]"
                >
                    Check My Price
                </Link>
            </div>
            <div className="mt-10 w-full xl:w-auto flex justify-center 2md:w-[50%] 2md:justify-start">
                <Image
                    alt="peace of mind"
                    className="w-full h-[50vw] max-w-[560px] max-h-[315px] 2md:max-w-none 2md:max-h-none 2md:w-[35vw] 2md:h-[20vw] xl:w-[480px] xl:h-[319px]"
                    src="/peace of mind 2-01.png"
                    height={300}
                    width={300}
                ></Image>
            </div>
        </div>
    );
};

export default Section4;
