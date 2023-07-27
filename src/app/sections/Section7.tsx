import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section7 = () => {
    return (
        <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
            <h1
                className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
            >
                Blogs
            </h1>
            <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0 lg:items-center 2md:grid-cols-2">
                <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:pb-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce felis purus, malesuada ut nulla vel, suscipit
                        varius nunc. Aliquam non mauris laoreet, molestie ipsum
                        id, molestie magna. Mauris vel dictum libero. Nam
                        pretium dolor vitae facilisis iaculis. Fusce id viverra
                        risus. Praesent ullamcorper.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:pb-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce felis purus, malesuada ut nulla vel, suscipit
                        varius nunc. Aliquam non mauris laoreet, molestie ipsum
                        id, molestie magna. Mauris vel dictum libero. Nam
                        pretium dolor vitae facilisis iaculis. Fusce id viverra
                        risus. Praesent ullamcorper.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce felis purus, malesuada ut nulla vel, suscipit
                        varius nunc. Aliquam non mauris laoreet, molestie ipsum
                        id, molestie magna. Mauris vel dictum libero. Nam
                        pretium dolor vitae facilisis iaculis. Fusce id viverra
                        risus. Praesent ullamcorper.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce felis purus, malesuada ut nulla vel, suscipit
                        varius nunc. Aliquam non mauris laoreet, molestie ipsum
                        id, molestie magna. Mauris vel dictum libero. Nam
                        pretium dolor vitae facilisis iaculis. Fusce id viverra
                        risus. Praesent ullamcorper.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[rgb(50,50,50)]">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce felis purus, malesuada ut nulla vel, suscipit
                        varius nunc. Aliquam non mauris laoreet, molestie ipsum
                        id, molestie magna. Mauris vel dictum libero. Nam
                        pretium dolor vitae facilisis iaculis. Fusce id viverra
                        risus. Praesent ullamcorper.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce felis purus, malesuada ut nulla vel, suscipit
                        varius nunc. Aliquam non mauris laoreet, molestie ipsum
                        id, molestie magna. Mauris vel dictum libero. Nam
                        pretium dolor vitae facilisis iaculis. Fusce id viverra
                        risus. Praesent ullamcorper.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        Lorem ipsum dolor sit amet
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce felis purus, malesuada ut nulla vel, suscipit
                        varius nunc. Aliquam non mauris laoreet, molestie ipsum
                        id, molestie magna. Mauris vel dictum libero. Nam
                        pretium dolor vitae facilisis iaculis. Fusce id viverra
                        risus. Praesent ullamcorper.
                    </p>
                </div>
                <Link href="/blog" className="hover:underline font-medium ">
                    More Blogs <ArrowForwardIcon />
                </Link>
            </div>
        </div>
    );
};

export default Section7;
