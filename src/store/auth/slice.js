import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    checking: true,
    user: null,
};

const getInitialState = () => {
    const token = localStorage.getItem("token");

    if (token) {
        return JSON.parse(token);
    }

    return initialState;
};

const authSlice = createSlice({
    name: "auth",
    initialState: getInitialState(),
    reducers: {
        authLogin: (state, action) => {
            state.checking = false;
            state.user = action.payload;
            return state;
        },
        authCheckingFinish: (state) => {
            state.checking = false;
            return state;
        },
        authLogout: (state) => {
            state = initialState;
            return state;
        },
    },
});

export const { authLogin, authLogout, authCheckingFinish } = authSlice.actions;
export default authSlice.reducer;
