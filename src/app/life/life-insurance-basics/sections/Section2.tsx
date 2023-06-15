import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section2 = () => {
    return (
        <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
            <div
                className={`lg:w-[100%] self-start max-w-[560px] text-[2rem] sm:text-[2.5rem] font-extralight`}
            >
                <p className={`${playfair.className} leading-tight`}>
                    What is life insurance?
                </p>
                <p className="text-[1.2rem] leading-tight text-black mt-2">
                    70% of American families would be bankrupt in months if they
                    lost the primary breadwinner*.
                </p>
            </div>
            <div className="gap-10 items-start grid w-full 2xl:w-[65%] 2md:gap-y-0 2md:grid-cols-2">
                <div className="max-w-[550px] 2md:border-r 2md:h-full 2md:pr-4 2md:pb-6">
                    <p className="text-lg mt-1 text-[#323232]">
                        Simply put, life insurance is a way to provide financial
                        protection for your loved ones in their most vulnerable
                        moments. A life insurance policy ensures that if you die
                        while your policy is active, your loved ones will
                        receive a lump-sum payout, known as a death benefit. The
                        death benefit can be used to cover things like mortgage
                        or rent payments, education costs, funeral arrangements,
                        and more.
                    </p>
                </div>
                <div>
                    <p className="text-lg mt-1 text-[#323232]">
                        In its simplest state, every life insurance policy is
                        made up of these four components:
                    </p>
                    <ol className="list-decimal font-semibold mt-10 pl-5">
                        <li className="text-lg mt-1 text-[#323232] font-normal max-w-[550px] 2md:pb-6">
                            <span className="font-semibold">Insured -</span>
                            The person whose life is covered under the policy.
                            Typically, this is the person who owns the policy
                            and pays the premiums, however, it is possible for
                            the policy owner and payor to be someone other than
                            the insured.
                        </li>
                        <li className="text-lg mt-1 text-[#323232] font-normal max-w-[550px] 2md:pb-6">
                            <span className="font-semibold">Beneficiary -</span>
                            The person(s), entity, or institution(s) that
                            receive the death benefit if the insured person
                            dies. You can name one person (or more) as
                            beneficiaries when you purchase a policy.
                        </li>
                        <li className="text-lg mt-1 text-[#323232] font-normal max-w-[550px] 2md:pb-6">
                            <span className="font-semibold">Premium -</span>
                            The money paid to keep a policy active. Payment
                            ensures that the insurance company will provide your
                            beneficiaries with the stated death benefit in the
                            event of your passing. If you stop paying premiums,
                            the policy lapses.
                        </li>
                        <li className="text-lg mt-1 text-[#323232] font-normal max-w-[550px] 2md:pb-6">
                            <span className="font-semibold">
                                Death benefit -
                            </span>
                            The money paid out if the insured person passes
                            away. Death benefits are generally not subject to an
                            income tax and beneficiaries usually receive the
                            benefit in one lump-sum payment
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Section2;
