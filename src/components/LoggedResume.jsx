import { useAuth } from "../hooks/useAuth";

export const LoggedResume = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <h1>
                Usuario: {user.firstName} {user.lastName}
            </h1>
            <button onClick={logout}>Cerrar sesión</button>
        </div>
    );
};
