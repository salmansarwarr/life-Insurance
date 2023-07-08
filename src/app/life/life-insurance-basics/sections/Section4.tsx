import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section4 = () => {
    return (
        <div className="flex gap-12  lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
            <div
                className={`lg:w-[100%] self-start max-w-[560px] text-[2rem] sm:text-[2.5rem] font-extralight`}
            >
                <p className={`${playfair.className} leading-tight`}>
                    What type of life insurance is right for me?
                </p>
                <p className="text-[1.2rem] leading-tight text-black mt-2">
                    Permanent and term life insurance are the two main types of
                    individual life insurance. When choosing between the two,
                    consider how long you want coverage, the purpose of the
                    coverage, and how much you want to pay. Here's a brief
                    overview of each to help you decide which one may be the
                    best fit for you and your family.
                </p>
            </div>
            <div className="gap-10 items-start grid w-full 2xl:w-[65%] 2md:gap-y-0 2md:grid-cols-2">
                <div className="max-w-[550px] 2md:border-r 2md:h-full 2md:pr-4 2md:pb-6">
                    <p className="text-lg mt-1 font-semibold text-[#323232]">
                        Permanent (whole or universal) life insurance
                    </p>
                    <p className="text-lg mt-2 text-[#323232]">
                        As long as the premiums are paid, this type of coverage
                        is active for your whole life, guaranteeing the eventual
                        payout of a death benefit. It can cost 5-10X more but if
                        the premium is within budget, it can be a good option
                        for anyone interested in insurance that accumulates cash
                        value and doesn't end.
                    </p>
                    <ul className="text-lg mt-6 text-[#323232] list-disc pl-8">
                        <li>
                            Most types of permanent life insurance offer a cash
                            value component that accumulates as policy premiums
                            are paid. This cash value typically grows with a
                            guaranteed minimum rate of return.
                        </li>
                        <li>
                            In most cases, the insured person can borrow against
                            the cash value that's accumulated in the policy,
                            withdraw the cash value, or leave it in the policy
                            to increase or maintain the death benefit.
                        </li>
                        <li>
                            Due to the duration of the coverage and cash value
                            accumulation possibilities, premiums for permanent
                            coverage are typically more expensive than those for
                            term life insurance.
                        </li>
                    </ul>
                    <p className="text-lg my-6 text-[#323232]">
                        <span className="font-semibold">
                            Real-world example:
                        </span>{" "}
                        Frank is 68 years old, and retired. He wants to make
                        sure he doesn't saddle his loved ones with expenses when
                        he passes away. He's looking for coverage that doesn't
                        expire, so he can guarantee the payout of a death
                        benefit that will take care of his final expenses. A
                        whole life policy makes the most sense for Frank because
                        he will be covered for the duration of his life.
                    </p>
                    <Link
                        href="/life/whole-life-policies"
                        className="text-lg text-[#292929] font-semibold underline leading-tight"
                    >
                        Learn more about whole life insurance with minaLife →
                    </Link>
                </div>
                <div className="max-w-[550px] 2md:border-r 2md:h-full 2md:pr-4 2md:pb-6">
                    <p className="text-lg mt-1 font-semibold text-[#323232]">
                        Term life insurance
                    </p>
                    <p className="text-lg mt-2 text-[#323232]">
                        Term policies last for a specific amount of time (your
                        term), and there is no cash value accumulation. The
                        death benefit is only payable to the beneficiaries upon
                        the death of the insured person during the term. Because
                        it costs less and is more straightforward it's a good
                        option for many people.
                    </p>
                    <ul className="text-lg mt-6 text-[#323232] list-disc pl-8">
                        <li>
                            You are able to choose the length of your term and
                            the amount of coverage that would be paid out to
                            your beneficiaries if you die before your term ends.
                            If you die after your term ends, no death benefit is
                            paid. It's that simple.
                        </li>
                        <li>
                            If you outlive your term, you will typically have
                            the option to renew your policy.
                        </li>
                        <li>
                            Term life insurance premiums usually cost less than
                            permanent life insurance, making it an affordable
                            option for many.
                        </li>
                    </ul>
                    <p className="text-lg my-6 text-[#323232]">
                        <span className="font-semibold">
                            Real-world example:
                        </span>{" "}
                        Sarah is a married, 35-year-old mother of 2 young
                        children. She’s the primary breadwinner for her home,
                        and she wants to ensure that her children will still be
                        able to attend college in the event of her untimely
                        death. For Sarah, a term policy makes the most sense. By
                        structuring the term length around the time her children
                        expect to make it through school, she can protect her
                        children's educational future.
                    </p>
                    <Link
                        href="/life/whole-life-policies"
                        className="text-lg text-[#292929] font-semibold underline leading-tight"
                    >
                        Learn more about term life insurance with minaLife →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Section4;
