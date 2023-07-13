import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const Section1 = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/q/goals')
    }

    return (
        <div className="mb-4 mt-[61px] sm:mb-6 lg:rounded-bl-[35%] xl:justify-center xl:rounded-bl-[30%] lg:px-14 lg:pl-24 lg:justify-between overflow-hidden flex flex-col lg:flex-row items-center bg-[#dbede5] text-[#056257] pt-5 2lg:pt-12 lg:pt-6 xl:pt-4 text-center lg:text-left">
            <div className="lg:w-[42rem] xl:py-14">
                <h1
                    className={`${dmSerif.className} font-bold flex flex-col text-[2.8rem] sm:text-[3.8rem] lg:text-[4rem]`}
                >
                    <span className="h-[45px] sm:h-[60px]">Instant</span>
                    <span>life insurance</span>
                </h1>
                <p className="mt-2 text-lg">No medical exams or blood tests.</p>
                <p className="font-semibold text-lg">
                    $1 million in coverage starts at $1/day.
                </p>
                <button onClick={handleClick} className="bg-[#f06c00] text-white px-16 sm:px-24 2lg:px-[4.5rem] py-4 mt-8 sm:mt-9 rounded-[0.25rem] font-medium">
                    Get my rates
                </button>
                <div className="flex mt-12 justify-center lg:justify-start items-center gap-5">
                    <p className="h-fit text-[0.7rem] sm:text-[0.8rem] tracking-widest sm:font-semibold font-bold opacity-40 leading-[1.2]">
                        BUISINESS
                        <br />
                        INSIDER
                    </p>
                    <p
                        className={`${dmSerif.className} h-fit text-[1rem] sm:text-[1.6rem] font-bold sm:font-extrabold opacity-50 leading-tight`}
                    >
                        Forbes
                    </p>
                    <Image
                        alt="fortune"
                        src="/fortune.png"
                        className="sm:w-[70px]" 
                        width={50}
                        height={50}
                    />
                    <Image
                        alt="yahoo"
                        src="/yahoo.png"
                        className="sm:w-[70px]" 
                        width={50}
                        height={50}
                    />
                </div>
            </div>
            <div className="bg-white lg:bg-[#dbede5] mt-6 sm:mt-12 w-full lg:w-fit">
                <div className="w-full pt-10 lg:w-fit flex justify-center overflow-hidden bg-[#dbede5] rounded-bl-[70%] sm:rounded-bl-[60%] 2lg:rounded-bl-[50%] 2md:rounded-bl-[40%] lg:rounded-none">
                    <Image
                        className="sm:w-full xl:w-[900px]"
                        src="/ctaImage.png"
                        alt="insurance" 
                        width={800}
                        height={800}
                    />
                </div>
            </div>  
        </div>
    );
};

export default Section1;
