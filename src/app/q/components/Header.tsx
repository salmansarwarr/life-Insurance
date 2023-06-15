'use client'

import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div
            className={`flex justify-between px-8 py-2 sm:py-4 w-full hover:border-b 2md:border-2 2md:border-b-0 border-l-blue-500 border-r-blue-500 border-t-blue-500`}
        >
            <div>
                <Link href="/">
                <Image alt="logo" src="/Minalife-logo.png" width={120} height={120} />
                </Link>
            </div>
            <div className="pt-3 font-semibold text-center leading-[1.2] text-[#7c7377]">
                <p className="text-[0.69rem]">CALL US FOR HELP</p>
                <Link href="tel:+1-415-915-0665" className="text-[#054742] hover:underline text-[0.8rem]">(415) 915-0665</Link>
            </div>
        </div>
    );
};

export default Header;
