import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section6 = () => {
    return (
        <div className="flex gap-12 sm:mt-20 lg:mt-24 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 justify-center">
            <h1
                className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
            >
                Frequently asked questions
            </h1>
            <div className="gap-10 grid w-full 2xl:w-[65%] 2md:gap-y-0 lg:items-center 2md:grid-cols-2">
                <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:pb-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        What does MinaLife's life insurance cover?
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        MinaLife's life insurance can help cover a variety of
                        expenses, including mortgage payments, debt, college
                        tuition, and lost income. Ultimately, it's up to your
                        beneficiaries to decide how to use the payout.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:pb-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        Does the COVID-19 pandemic affect MinaLife's life
                        insurance coverage?
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        No, MinaLife's life insurance does cover deaths related
                        to COVID-19, and the pandemic does not impact our rates.
                        You can still apply for life insurance online with
                        MinaLife and be considered covered as soon as your first
                        premium payment is made.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        Is the life insurance provided by my employer enough?
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        Employer-sponsored policies typically offer coverage
                        that is a fraction of what financial experts recommend.
                        MinaLife offers individual term policies to supplement
                        your coverage through work and help ensure your family
                        is fully protected.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        How much life insurance do I need?
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        Calculating the right amount of coverage can be tricky,
                        but MinaLife offers a helpful life insurance calculator
                        to determine your coverage needs. A common rule of thumb
                        is to multiply your annual income by 10.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                        What type of life insurance does MinaLife offer?
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                        MinaLife offers both term life insurance and guaranteed
                        issue whole life insurance, with term lengths ranging
                        from 10 to 30 years and coverage amounts from $20,000 to
                        $2 million, depending on your qualifications.
                    </p>
                </div>
                <div className="max-w-[550px] 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                    How can I be sure that MinaLife is a legitimate provider?

                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                    MinaLife's policies are backed by industry giants with a long history of financial strength and stability. You can trust that your policy will withstand the test of time, while enjoying the simplicity and ease of use of a modern tech company.

                    </p>
                </div>
                <div className="max-w-[550px] 2md:border-r 2md:pr-4 2md:py-6">
                    <p className=" text-lg xl:text-xl font-semibold text-[#323232]">
                    Does MinaLife offer a money-back guarantee?
                    </p>
                    <p className="text-lg mt-1 text-[#323232]">
                    Yes, MinaLife's application is non-binding and 100% free, with no impact on your credit score. Each policy comes with a 30-day free look period and a money-back guarantee. You can cancel your policy at any time, with no fees or penalties.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section6;
