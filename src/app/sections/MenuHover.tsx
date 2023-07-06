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
                } fixed w-full bg-white z-10`}
            >
                <div className="p-5 bg-[#edf5f1] flex items-center">
                    <h1
                        className={`${playfairDisplay.className} font-medium text-black text-[1.5rem]`}
                    >
                        Life insurance 101
                    </h1>
                    <p className="text-[#494d4b] text-[1.3rem] flex-1 ml-5">
                        <span className="mr-3">/</span> A handy guide to life
                        insurance
                    </p>
                    <Link
                        href="/life/life-insurance-basics"
                        className="hover:bg-[#212322] hover:text-white py-3 px-4 text-black text-[0.9rem] border border-black"
                    >
                        Learn more
                    </Link>
                </div>
                <ul className={`font-medium text-[1.1rem] flex justify-around`}>
                    <div>
                        <li
                            className={`${playfairDisplay.className} border-b mb-3 flex items-center justify-between p-4 pb-3 pt-4`}
                        >
                            <span>Life insurance</span>
                        </li>
                        <ul
                            className={`text-[1rem] font-normal text-[#212322] max-w-[11rem]`}
                        >
                            <li className="p-4  pt-0">
                                <Link
                                target="_self"
                                    href="/life/term-life-insurance-no-medical-exam"
                                    className="hover:font-light"
                                >
                                    No medical exam life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/life-insurance-rates-by-age"
                                    className="hover:font-light"
                                >
                                    Life insurance rates by age
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/500000-dollar-life-insurance-policy"
                                    className="hover:font-light"
                                >
                                    $500K life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/one-million-dollar-life-insurance-policy"
                                    className="hover:font-light"
                                >
                                    $1 million life insurance
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <li
                            className={`${playfairDisplay.className} border-b mb-3 flex items-center justify-between p-4 pb-3`}
                        >
                            <span>Term life</span>
                        </li>
                        <ul
                            className={`text-[1rem] font-normal text-[#212322] max-w-[11rem]`}
                        >
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/term-life-policies"
                                    className="hover:font-light"
                                >
                                    Term life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/10-year-term"
                                    className="hover:font-light"
                                >
                                    10 year term life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/20-year-term"
                                    className="hover:font-light"
                                >
                                    20 year term life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/30-year-term"
                                    className="hover:font-light"
                                >
                                    30 year term life insurance
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <li
                            className={`${playfairDisplay.className} border-b mb-3 flex items-center justify-between p-4 pb-3`}
                        >
                            <span>Whole life</span>
                        </li>
                        <ul
                            className={`text-[1rem] font-normal text-[#212322] max-w-[11rem]`}
                        >
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/whole-life-policies"
                                    className="hover:font-light"
                                >
                                    Whole life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/gi-whole-life-insurance"
                                    className="hover:font-light"
                                >
                                    Guaranteed whole life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/20-year-term"
                                    className="hover:font-light"
                                >
                                    Understanding whole life insurance
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/faq/what-is-permanent-and-whole-life-insurance"
                                    className="hover:font-light"
                                >
                                    Permanent and whole life insurance
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <li
                            className={`${playfairDisplay.className} border-b mb-3 flex items-center justify-between p-4 pb-3`}
                        >
                            <span>Final expenses</span>
                        </li>
                        <ul
                            className={`text-[1rem] font-normal text-[#212322] max-w-[11rem]`}
                        >
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life-insurance/end-of-life-expenses"
                                    className="hover:font-light"
                                >
                                    End of life expenses
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life-insurance/final-expense-life-insurance"
                                    className="hover:font-light"
                                >
                                    Burial insurance
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <li
                            className={`${playfairDisplay.className} border-b mb-3 flex items-center justify-between p-4 pb-3`}
                        >
                            <span>Resources</span>
                        </li>
                        <ul
                            className={`text-[1rem] font-normal text-[#212322] max-w-[11rem]`}
                        >
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life/how-much-life-insurance-do-i-need"
                                    className="hover:font-light"
                                >
                                    How much life insurance do I need?
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/life-insurance/cost-of-life-insurance"
                                    className="hover:font-light"
                                >
                                    How is life insurance cost determined?
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link
                                    href="/needs"
                                    className="hover:font-light"
                                >
                                    Life insurance coverage calculator
                                </Link>
                            </li>
                            <li className="p-4  pt-0">
                                <Link href="/blog" className="hover:font-light">
                                    Life insurance blog
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
                } fixed w-full bg-white flex h-[15rem]`}
            >
                <div className="py-8 px-16">
                    <Link
                        href="/plan"
                        className={`${playfairDisplay.className} hover:underline font-light text-black text-[1.5rem]`}
                    >
                        Wills & estate plans <br /> 101
                        <EastOutlinedIcon
                            fontSize="small"
                            color="inherit"
                            className="font-light ml-2"
                        />
                    </Link>
                    <p className="text-[#494d4b] text-[1rem]">
                        Why everybody needs a <br /> plan
                    </p>
                </div>
                <div className="pt-8">
                    <Link
                        href="/get-a-free-will"
                        className="text-sm hover:underline"
                    >
                        Free will with life insurance
                        <EastOutlinedIcon
                            fontSize="small"
                            color="inherit"
                            className="text-sm font-light ml-2"
                        />
                    </Link>
                </div>
            </div>
            <div
                onMouseOver={() => handleHover(2)}
                onMouseOut={() => handleHover(2)}
                className={`${
                    hover[2] ? "block" : "hidden"
                } fixed w-full bg-white flex`}
            >
                <div className="py-8 px-16">
                    <Link
                        href="/why-minalife"
                        className={`${playfairDisplay.className} hover:underline font-light text-black text-[1.5rem]`}
                    >
                        Why Minalife
                        <EastOutlinedIcon
                            fontSize="small"
                            color="inherit"
                            className="font-light ml-2"
                        />
                    </Link>
                    <p className="text-[#494d4b] text-[1rem]">
                        Fast, easy life insurance you <br /> can trust.
                    </p>
                </div>
                <div className="pt-8 flex gap-5">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/how-it-works"
                            className="text-sm hover:underline"
                        >
                            How Minalife works
                            <EastOutlinedIcon
                                fontSize="small"
                                color="inherit"
                                className="text-sm font-light ml-2"
                            />
                        </Link>
                        <Link
                            href="/minalifeforgood"
                            className="text-sm hover:underline"
                        >
                            Minalife for good
                            <EastOutlinedIcon
                                fontSize="small"
                                color="inherit"
                                className="text-sm font-light ml-2"
                            />
                        </Link>
                    </div>
                    <Link href="/reviews" className="text-sm hover:underline">
                        Customer reviews
                        <EastOutlinedIcon
                            fontSize="small"
                            color="inherit"
                            className="text-sm font-light ml-2"
                        />
                    </Link>
                </div>
            </div>
            <div
                onMouseOver={() => handleHover(3)}
                onMouseOut={() => handleHover(3)}
                className={`${
                    hover[3] ? "block" : "hidden"
                } fixed w-full bg-white flex`}
            >
                <div className="py-8 px-16">
                    <Link
                        href="/self-serve-organic"
                        className={`${playfairDisplay.className} hover:underline font-light text-black text-[1.5rem]`}
                    >
                        Minalife for agents
                        <EastOutlinedIcon
                            fontSize="small"
                            color="inherit"
                            className="font-light ml-2"
                        />
                    </Link>
                    <p className="text-[#494d4b] text-[1rem]">
                        Grow your business with <br /> Ethos.
                    </p>
                </div>
                <div className="pt-8 flex gap-5">
                    <Link
                        href="/self-serve-organic"
                        className="text-sm hover:underline"
                    >
                        Join as an agent
                        <EastOutlinedIcon
                            fontSize="small"
                            color="inherit"
                            className="text-sm font-light ml-2"
                        />
                    </Link>
                    <Link
                        href="/agents-portal/login"
                        className="text-sm hover:underline"
                    >
                        Log in as an agent
                        <EastOutlinedIcon
                            fontSize="small"
                            color="inherit"
                            className="text-sm font-light ml-2"
                        />
                    </Link>
                </div>
            </div>
            <div
                onMouseOver={() => handleHover(4)}
                onMouseOut={() => handleHover(4)}
                className={`${
                    hover[4] ? "block" : "hidden"
                } fixed w-full bg-white flex`}
            >
                <div className="py-8 px-16">
                    <Link
                        href="/faq"
                        className={`${playfairDisplay.className} hover:underline font-light text-black text-[1.5rem]`}
                    >
                        FAQs
                        <EastOutlinedIcon
                            fontSize="small"
                            color="inherit"
                            className="font-light ml-2"
                        />
                    </Link>
                    <p className="text-[#494d4b] text-[1rem]">
                        Everything you need to know to <br /> make a plan.
                    </p>
                </div>
                <div className="pt-8 flex gap-5">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/life-insurance-learning-center"
                            className="text-sm hover:underline"
                        >
                            Complete guide to life insurance
                            <EastOutlinedIcon
                                fontSize="small"
                                color="inherit"
                                className="text-sm font-light ml-2"
                            />
                        </Link>
                        <Link
                            href="/contact-us"
                            className="text-sm hover:underline"
                        >
                            Contact us
                            <EastOutlinedIcon
                                fontSize="small"
                                color="inherit"
                                className="text-sm font-light ml-2"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link href="/needs" className="text-sm hover:underline">
                            Coverage calculator
                            <EastOutlinedIcon
                                fontSize="small"
                                color="inherit"
                                className="text-sm font-light ml-2"
                            />
                        </Link>
                        <Link href="/blog" className="text-sm hover:underline">
                            Blog
                            <EastOutlinedIcon
                                fontSize="small"
                                color="inherit"
                                className="text-sm font-light ml-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuHover;
