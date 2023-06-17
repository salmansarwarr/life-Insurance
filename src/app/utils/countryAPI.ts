import { RequestInit } from "next/dist/server/web/spec-extension/request";

export const fetchCountryData = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("Error fetching country data:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error fetching country data:", error);
        return null;
    }
};

export const fetchCountryStates = async () => {
    try {
        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", "API_KEY");

        var requestOptions: RequestInit = {
            method: "GET",
            headers: headers,
            redirect: "follow",
        };

        const code = localStorage.getItem('code');

        const response = await fetch(
            `https://api.countrystatecity.${code}/v1/states`,
            requestOptions
        );
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("Error fetching country data:", response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error fetching country data:", error);
        return null;
    }
};
