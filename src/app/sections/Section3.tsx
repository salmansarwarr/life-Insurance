import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section3 = () => {
    return (
        <div className="bg-[#fff2e3] text-[#323232] xl:gap-28 2md:gap-20 2md:justify-center px-8 2md:px-12 xl:pl-16 flex flex-col 2md:flex-row py-10 2md:py-14 items-center">
            <div className="flex flex-col gap-3 2md:gap-6">
                <h1
                    className={`${playfair.className} text-[2rem] sm:text-[2.5rem] font-extralight`}
                >
                    How MinaLife Works
                </h1>
                <p className="font-medium max-w-[538px]">
                    Here at MinaLife, we take pride in providing a faster,
                    better, and easier life insurance experience for you and
                    your loved ones. Our mission is to protect the next million
                    families and we intend to do just that with an honest and
                    transparent process. Take a look at how it works.
                </p>
                <Link
                    href="/how-it-works"
                    className="hover:bg-[#212322] sm:w-[126px] font-medium text-center mt-6 hover:text-white py-3 sm:py-4 px-4 text-[1rem] border border-[#323232]"
                >
                    Learn more
                </Link>
            </div>
            <div className="mt-10 w-full xl:w-auto flex justify-center 2md:w-[50%] 2md:justify-end">
                <iframe
                    className="w-full h-[50vw] max-w-[560px] max-h-[315px] 2md:w-[35vw] 2md:h-[20vw]"
                    src="https://www.youtube.com/embed/XSSFJ94is08"
                ></iframe>
            </div>
        </div>
    );
};

export default Section3;
