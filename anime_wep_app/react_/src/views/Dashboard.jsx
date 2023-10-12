import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const onLogout = (event) => {
    event.preventDefault();
};

function Dashboard() {
    const { user, token } = useStateContext();

    if (!token) {
        // Redirect user if he is not auth
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <span>Hello {user.name} !</span>
            <br />
            <a href="" onClick={onLogout}>
                Logout
            </a>
        </div>
    );
}

export default Dashboard;
