import { axiosDummyJsonClient } from "../config/axiosConfig";

export const validateLogin = async (username, password) => {
    return await axiosDummyJsonClient.post("/auth/login", {
        username,
        password,
    });
};
