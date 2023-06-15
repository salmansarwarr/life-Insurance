import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section3 = () => {
    return (
        <div className="py-14 2md:pt-24 2md:px-8">
            <div className="px-8 py-10 flex flex-col 2md:flex-row lg:px-14 xl:px-24 lg:py-20 sm:px-12 2md:justify-between bg-[#dbede5] text-black">
                <div>
                    <p
                        className={`${playfair.className} max-w-[483px] lg:w-[100%] 2xl:w-[65%] text-[1.9rem] sm:text-[2.5rem] font-extralight leading-tight`}
                    >
                        Wonder how much coverage you need?
                    </p>
                    <p className="text-lg mt-3 max-w-[483px]">
                        Our coverage calculator helps estimate how much coverage
                        you need to protect your family.
                    </p>
                </div>
                <Link href='/needs' className="flex items-center justify-center gap-4 py-4 px-8 2md:px-0 2md:min-w-[212px] 2md:h-[56px] border mt-8 border-black hover:bg-[#323232] hover:text-white">
                    <span>Calculate coverage</span>
                    <ArrowRightAltIcon fontSize="small" />
                </Link>
            </div>
        </div>
    );
};

export default Section3;
