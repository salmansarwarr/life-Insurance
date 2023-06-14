"use client";

import Image from "next/image";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";

const Header = () => {
    return (
        <div
            className={`flex bg-[#deebff] justify-between px-8 sm:px-20 py-4 sm:py-8 w-full `}
        >
            <div>
                <Link href="/">
                <Image alt="logo" src="/Minalife-logo.png" width={120} height={120} />
                </Link>
            </div>
            <div className="pt-3 hidden sm:block font-semibold leading-[1.2] text-[#7c7377]">
                <p className=" text-[#054742] text-[0.8rem]">Support</p>
                <Link
                    href="tel:+1-415-915-0665"
                    className="text-[0.69rem] underline"
                >
                    (415) 915-0665
                </Link>
            </div>
            <Link
                href="tel:+1-415-915-0665"
                className="text-gray-900 text-[0.9rem] sm:hidden flex gap-1 items-center"
            >
                <p>Call us</p>
                <IoCallOutline className="text-[1.4rem]"/>
            </Link>
        </div>
    );
};

export default Header;
