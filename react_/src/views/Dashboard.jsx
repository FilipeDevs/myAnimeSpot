import { Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import DashboardTabs from "../components/dashboard/DashboardTabs";
import AnimeTable from "../components/dashboard/AnimeTable";

function Dashboard() {
    const { user, token } = useStateContext();

    if (!token) {
        // Redirect user if he is not auth
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <span>Hello {user.name} !</span>
            <DashboardTabs />
            <AnimeTable />
        </div>
    );
}

export default Dashboard;
