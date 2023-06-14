import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const Section5 = () => {
    return (
        <div className="flex gap-12 lg:items-center w-full sm:gap-16 text-[#323232] flex-col px-8 lg:px-14 sm:px-12 mt-8 xl:mt-14 justify-center">
            <h1
                className={`${playfair.className} lg:w-[100%] 2xl:w-[65%] text-[2rem] sm:text-[2.5rem] font-extralight`}
            >
                Why MinaLife
            </h1>
            <div className="grid 2md:grid-cols-2 2xl:w-[65%] gap-12 w-full  lg:items-center">
                <div className="max-w-[550px]">
                    <Image
                        src="/no-med-exam.webp"
                        alt="no medical exam"
                        height={50}
                        width={50}
                    />
                    <p className="mt-2 text-lg xl:text-xl text-black">
                        No Medical Exams.
                    </p>
                    <p className="text-lg mt-1 text-[#7c7377]">
                        Our 100% online process means you can get coverage
                        quickly without any medical exams or blood tests. Answer
                        a few health questions and you'll be on your way to
                        protecting your family's future in no time.
                    </p>
                </div>
                <div className="max-w-[550px]">
                    <Image
                        src="/instant.png"
                        alt="Same-Day Coverage"
                        height={50}
                        width={50}
                    />
                    <p className="mt-2 text-lg xl:text-xl text-black">
                        Same-Day Coverage.
                    </p>
                    <p className="text-lg mt-1 text-[#7c7377]">
                        Our expedited process means that most customers enjoy
                        same-day coverage. You can apply for coverage and have
                        the peace of mind that your family is protected in a
                        matter of minutes.
                    </p>
                </div>

                <div className="max-w-[550px]">
                    <Image
                        src="/dollar-coins.svg"
                        alt="Affordable Policies"
                        height={50}
                        width={50}
                    />
                    <p className="mt-2 text-lg xl:text-xl text-black">
                        Affordable Policies.
                    </p>
                    <p className="text-lg mt-1 text-[#7c7377]">
                        We offer policies at competitive rates, so you don't
                        have to worry about breaking the bank to protect your
                        family's future. You can tailor your policy to fit your
                        budget and needs because we believe that life insurance
                        isn't a one-size-fits-all solution.
                    </p>
                </div>
                <div className="max-w-[550px]">
                    <Image
                        src="/family.svg"
                        alt="expert guidance"
                        height={50}
                        width={50}
                    />
                    <p className="mt-2 text-lg xl:text-xl text-black">
                        Expert Guidance.
                    </p>
                    <p className="text-lg mt-1 text-[#7c7377]">
                        Our agents are knowledgeable and experienced, and
                        they're always ready to help you find the coverage that
                        best suits your family's needs. We provide honest advice
                        without any pushy sales tactics, so you can make an
                        informed decision about your life insurance policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section5;
