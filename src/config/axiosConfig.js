import axios from "axios";

export const axiosDummyJsonClient = axios.create({
    baseURL: "https://dummyjson.com",
    headers: { "Content-Type": "application/json" },
});
