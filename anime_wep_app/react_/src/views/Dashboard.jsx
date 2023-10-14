import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function Dashboard() {
    const { user, token } = useStateContext();

    if (!token) {
        // Redirect user if he is not auth
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <span>Hello {user.name} !</span>
        </div>
    );
}

export default Dashboard;
