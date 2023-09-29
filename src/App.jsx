import { LoggedResume } from "./components/LoggedResume";
import { LoginCard } from "./components/LoginCard";
import { useAuth } from "./hooks/useAuth";

function App() {
    const { user } = useAuth();

    return (
        <>
            <main>
                <section className="d-flex min-vh-100 flex-column justify-content-center align-items-center">
                    {!user ? <LoginCard /> : <LoggedResume />}
                </section>
            </main>
        </>
    );
}

export default App;
