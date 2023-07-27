import Link from "next/link";
import { Lora } from "next/font/google";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const playfairDisplay = Lora({ subsets: ["latin"] });

interface Props {
    hover: boolean[];
    handleHover: (num: number) => void;
}

const MenuHover = ({ hover, handleHover }: Props) => {
    return (
        <>
            <div
                onMouseOver={() => handleHover(0)}
                onMouseOut={() => handleHover(0)}
                className={`${
                    hover[0] ? "block" : "hidden"
                } fixed left-36 lg:left-40 xl:left-[11.6rem] 2xl:left-96 border-r-8 rounded-se-lg rounded-bl-lg max-w-[200px] transition-all border-b-8 border-[#268057] bg-white z-10`}
            >
                <ul className={` text-[1.1rem] flex justify-around`}>
                    <div>
                        <li
                            className={`text-[1rem] hover:text-[#80e0b5] mb-3 flex items-center justify-between p-4 pb-3 pt-4`}
                        >
                            <Link href="/life/life-insurance-basics">
                                Life insurance
                            </Link>
                        </li>
                        <ul
                            className={`text-[1rem] font-normal text-[#212322] max-w-[20rem]`}
                        >
                            <li className="p-4  pt-0">
                                <Link
                                    target="_self"
                                    href="/life/term-life-insurance-no-medical-exam"
                                    className="hover:text-[#5fbd92] transition-all"
                                >
                                    No medical exam life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/life-insurance-rates-by-age"
                                    className="hover:text-[#5fbd92] transition-all"
                                >
                                    Life insurance rates by age
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/term-life-policies"
                                    className="hover:text-[#5fbd92] transition-all"
                                >
                                    Term life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/whole-life-policies"
                                    className="hover:text-[#5fbd92] transition-all"
                                >
                                    Whole life insurance
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
            <div
                onMouseOver={() => handleHover(1)}
                onMouseOut={() => handleHover(1)}
                className={`${
                    hover[1] ? "block" : "hidden"
                } fixed left-[304px] lg:left-[340px] xl:left-[360px] border-r-8 rounded-se-lg rounded-bl-lg max-w-[200px] transition-all border-b-8 border-[#268057] bg-white z-10`}
            >
                <ul className={`font-medium text-[1.1rem] flex justify-around`}>
                    <div>
                        <ul
                            className={`text-[1rem] font-normal text-[#212322] max-w-[20rem]`}
                        >
                            <li className="p-4  pt-0">
                                <Link
                                    target="_self"
                                    href="/get-a-free-will"
                                    className="hover:text-[#5fbd92] transition-all"
                                >
                                    Free will with life insurance
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
            <div
                onMouseOver={() => handleHover(2)}
                onMouseOut={() => handleHover(2)}
                className={`${
                    hover[2] ? "block" : "hidden"
                } fixed left-[525px] lg:left-[545px] xl:left-[560px] border-r-8 rounded-se-lg rounded-bl-lg max-w-[200px] transition-all border-b-8 border-[#268057] bg-white z-10`}
            >
                <ul className={`text-[1rem] flex justify-around`}>
                    <div>
                        <li
                            className={` hover:text-[#80e0b5] mb-3 flex items-center justify-between p-4 pb-3 pt-4`}
                        >
                            <Link href="/why-Minalife"> Why Minalife</Link>
                        </li>
                        <ul
                            className={`text-[1rem] font-normal text-[#212322] max-w-[20rem]`}
                        >
                            <li className="p-4  pt-0">
                                <Link
                                    target="_self"
                                    href="/why-Minalife"
                                    className="hover:text-[#5fbd92] transition-all"
                                >
                                    How Minalife works
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    target="_self"
                                    href="/reviews"
                                    className="hover:text-[#5fbd92] transition-all"
                                >
                                    Customer reviews
                                </Link>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default MenuHover;
