// import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { validateLogin } from "../services/authService";
import { isAxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, authLogout } from "../store/auth/slice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const login = async (email, password) => {
        try {
            const { status, data } = await validateLogin(email, password);

            if (status !== 200) {
                throw new Error(data.message);
            }

            const token = data.token;

            const user = data;
            delete user.token;

            localStorage.setItem(
                "token",
                JSON.stringify({
                    token,
                    user,
                })
            );

            dispatch(authLogin(data));
        } catch (error) {
            if (isAxiosError(error)) {
                Swal.fire("Error", error.response.data.message, "error");
            } else Swal.fire("Error", error.message, "error");
        }
    };

    const logout = () => {
        localStorage.clear();
        dispatch(authLogout());
    };

    return {
        checking: auth.checking,
        user: auth.user,
        login,
        logout,
    };
};
