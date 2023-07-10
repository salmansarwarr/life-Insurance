import Image from "next/image";
import Link from "next/link";

const Footer = ({ p1, p2 }: { p1: string; p2: string }) => {
    return (
        <div className="bg-[#054742] mt-10 py-10 sm:py-14 lg:pt-20 sm:pb-24 sm:px-14 px-5">
            {p1 && (
                <>
                    <p className="text-sm sm:text-base text-white">{p1}</p>
                    <p className="text-sm text-white mt-4">{p2}</p>
                </>
            )}

            <hr className="bg-white mt-8 sm:mt-14 mb-6 sm:mb-8" />
            <div className="grid">
                <div className="grid sm:hidden">
                    <p className="text-sm font-semibold text-white">
                        Contact Us
                    </p>
                    <p className="text-sm text-white mt-4">
                        1606 Headway Circle
                    </p>
                    <p className="text-sm text-white">#9013</p>
                    <p className="text-sm text-white">Austin, TX 78754</p>
                    <p className="text-sm text-white">(415) 915-0665</p>
                    <Link
                        href="/"
                        className="text-white border-white border w-[131px] text-center py-2 font-medium my-6"
                    >
                        Email us
                    </Link>
                    <div className="flex gap-4">
                        <Image src="/fb.svg" alt="fb" height={20} width={20} />
                        <Image
                            src="/twit.svg"
                            alt="fb"
                            height={20}
                            width={20}
                        />
                        <Image
                            src="/insta.svg"
                            alt="fb"
                            height={20}
                            width={20}
                        />
                        <Image src="/in.svg" alt="fb" height={20} width={20} />
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 mt-10 gap-y-8 gap-x-4 text-[0.85rem]">
                    <div className="hidden lg:grid">
                        <p className="text-sm font-semibold text-white">
                            Contact Us
                        </p>
                        {/* <p className="text-sm text-white mt-4">
                            1606 Headway Circle
                        </p>
                        <p className="text-sm text-white">#9013</p> */} 
                        <p className="text-sm text-white">
                            116 Forrestal Village, NJ, USA
                        </p>
                        <p className="text-sm text-white">(415) 915-0665</p>
                        <Link
                            href="/"
                            className="text-white border-white border w-[131px] text-center py-2 font-medium my-6"
                        >
                            Email us
                        </Link>
                        <div className="flex gap-4">
                            <Image
                                src="/fb.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                            <Image
                                src="/twit.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                            <Image
                                src="/insta.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                            <Image
                                src="/in.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-white">Resources</p>
                        <Link
                            href="/insurance/life-insurance-policies"
                            className="underline text-white"
                        >
                            Our policies
                        </Link>
                        <Link href="/faq" className="underline text-white">
                            FAQs
                        </Link>
                        <Link href="/blog" className="underline text-white">
                            Blog
                        </Link>
                        <Link
                            href="/life/life-insurance-101"
                            className="underline text-white"
                        >
                            Life insurance 101
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="underline text-white"
                        >
                            How it works
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-white">Company</p>
                        <Link href="/about" className="underline text-white">
                            About us
                        </Link>
                        <Link href="/reviews" className="underline text-white">
                            Reviews
                        </Link>
                    </div>
                    {/* <div className="flex flex-col gap-2">
                        <p className="font-semibold text-white">Partnerships</p>
                        <Link href="/agents" className="underline text-white">
                            Minalife for Agents
                        </Link>
                        <Link
                            href="/agents-portal"
                            className="underline text-white"
                        >
                            Agent Login
                        </Link>
                        <Link
                            href="/affiliate-program"
                            className="underline text-white"
                        >
                            Affiliate Program
                        </Link>
                    </div> */}
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-white">Legal</p>
                        <Link href="/terms" className="underline text-white">
                            Terms of Use
                        </Link>
                        <Link href="/privacy" className="underline text-white">
                            Online Privacy Policy
                        </Link>
                        <Link
                            href="/data-security-at-minalife"
                            className="underline text-white"
                        >
                            Data Security
                        </Link>
                        <Link
                            href="/accessibility"
                            className="underline text-white"
                        >
                            Accessibility
                        </Link>

                        <Link href="/licenses" className="underline text-white">
                            Licenses
                        </Link>
                    </div>
                </div>
                <p className="text-[0.7rem] mt-10 text-white sm:hidden lg:block lg:mt-20">
                    © 2023 Minalife Technologies Inc. Minalife operates in some
                    states as Minalife Life Insurance Services. CA license
                    #0L28949; AR license #100164629. Minalife offers policies
                    issued by the carriers listed at{" "}
                    <Link href="/carriers.">www.minalife.com/carriers.</Link>
                    Products and their features may not be available in all
                    states. To help avoid requiring a medical exam, our
                    application asks certain health and lifestyle questions.
                    <Image
                        src="/accessibility.png"
                        className="mt-4"
                        alt="accessibility"
                        height={32}
                        width={32}
                    />
                </p>
                <div className="hidden sm:flex mt-14 gap-24 lg:hidden">
                    <div className="grid">
                        <p className="text-sm font-semibold text-white">
                            Contact Us
                        </p>
                        {/* <p className="text-sm text-white mt-4">
                            1606 Headway Circle
                        </p>
                        <p className="text-sm text-white">#9013</p> */} 
                        <p className="text-sm text-white">
                            116 Forrestal Village, NJ, USA
                        </p>
                        <p className="text-sm text-white">(415) 915-0665</p>
                        <Link
                            href="/"
                            className="text-white border-white border w-[131px] text-center py-2 font-medium my-6"
                        >
                            Email us
                        </Link>
                        <div className="flex gap-4">
                            <Image
                                src="/fb.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                            <Image
                                src="/twit.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                            <Image
                                src="/insta.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                            <Image
                                src="/in.svg"
                                alt="fb"
                                height={20}
                                width={20}
                            />
                        </div>
                    </div>
                    <p className="text-[0.7rem] mt-10 text-white">
                        © 2023 Minalife Technologies Inc. Minalife operates in
                        some states as Minalife Life Insurance Services. CA
                        license #0L28949; AR license #100164629. Minalife offers
                        policies issued by the carriers listed at{" "}
                        <Link href="/carriers.">
                            www.minalife.com/carriers.
                        </Link>
                        Products and their features may not be available in all
                        states. To help avoid requiring a medical exam, our
                        application asks certain health and lifestyle questions.
                        <Image
                            src="/accessibility.png"
                            className="mt-4"
                            alt="accessibility"
                            height={32}
                            width={32}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
