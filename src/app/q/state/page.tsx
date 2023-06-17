"use client";

import Header from "../../estimate-experience/sections/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { fetchCountryData } from "@/app/utils/countryAPI";

interface Country {
    label: string;
    value: string;
}

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const page = () => {
    const [selectedCountry, setSelectedCountry] = useState<Country>();
    const [countries, setCountries] = useState<Country[]>();
    const router = useRouter();

    const handleCountryChange = (selectedOption: Country) => {
        setSelectedCountry(selectedOption);
    };

    useEffect(() => {
        const getCountries = async () => {
            const data = await fetchCountryData();
            const formattedData = data.map((country: any) => ({
                value: country.name.common,
                label: country.name.common,
            }));
            if (data) {
                setCountries(formattedData);
            }
        };

        getCountries();
    }, []);


    const handleSubmit = () => {
        router.push("/q/us-citizenship");
    };

    const customStyles = {
        option: (provided: any, state: any) => ({
            ...provided,
            color: "black", // Set the color based on selection
            background: state.isSelected ? "blue" : "white", // Set the background color based on selection
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: "black", // Set the color to black
        }),
    };


    return (
        <>
            <Header />
            <div>
                <div className="h-[0.5rem] w-full bg-gray-100">
                    <div className="w-[35%] h-full bg-[#054742]"></div>
                </div>
                <div className="flex flex-col px-6 py-8 sm:py-14 sm:items-center">
                    <p
                        className={`${playfair.className} sm:w-[496px] font-semibold text-[1.7rem] sm:text-[2rem] leading-tight max-w-[500px]`}
                    >
                        What country you were born in?
                    </p>
                    <div className="text-[1.1rem] mt-8">
                        {countries && (
                            <Select
                                styles={customStyles}
                                options={countries}
                                value={selectedCountry}
                                //@ts-ignore
                                onChange={handleCountryChange}
                                getOptionLabel={(option: Country) =>
                                    option.label
                                }
                                getOptionValue={(option: Country) =>
                                    option.value
                                }
                                className="mt-2 w-full px-3 py-4  text-black bg-white sm:w-[525px]"
                            />
                        )}
                    </div>
                    <button
                        onClick={handleSubmit}
                        disabled={selectedCountry == undefined}
                        className="bg-gray-900 hover:bg-gray-800 sm:text-lg disabled:bg-gray-300 min-w-[220px] sm:w-[496px] flex justify-between items-center mt-10 my-10 text-gray-100 px-4 sm:py-4 sm:px-5 py-3"
                    >
                        <span>Next </span>
                        <ArrowForwardIcon fontSize="small" color="inherit" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default page;
