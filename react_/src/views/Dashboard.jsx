import { Navigate, Outlet, useParams } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import DashboardTabs from "../components/dashboard/DashboardTabs";
import AllUserAnime from "../components/dashboard/AllUserAnime";

function Dashboard() {
    const { user, token } = useStateContext();
    const { list } = useParams();

    if (!token) {
        // Redirect user if they are not authenticated
        return <Navigate to="/login" />;
    }

    return (
        <div className="min-h-screen p-1 md:p-8 text-center">
            <div className="max-w mx-auto bg-white rounded p-6 shadow-lg dark:bg-gray-900">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                    Hello, {user} 👋
                </span>
                <DashboardTabs />
                <div className="mt-4">
                    {list ? <Outlet /> : <AllUserAnime />}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
