import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosCLient from "../axios-client";
import { useEffect } from "react";

function Dashboard() {
    const { user, token, setUser, setToken } = useStateContext();

    useEffect(() => {
        // @TODO maybe store user info in local storage for faster rendering
        axiosCLient.get("user").then((response) => {
            setUser(response.data);
        });
    }, []);

    if (!token) {
        // Redirect user if he is not auth
        return <Navigate to="/login" />;
    }

    const onLogout = (event) => {
        event.preventDefault();
        axiosCLient.post("logout").then(() => {
            setUser({});
            setToken(null);
        });
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <span>Hello {user.name} !</span>
            <br />
            <a
                href="#"
                className="text-black hover:text-gray-300"
                onClick={onLogout}
            >
                Logout
            </a>
        </div>
    );
}

export default Dashboard;
