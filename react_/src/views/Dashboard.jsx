import { Navigate, Outlet, useParams } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import DashboardTabs from "../components/dashboard/DashboardTabs";
import AnimeTable from "../components/dashboard/AnimeTable";
import AnimeListContent from "../components/dashboard/AnimeListContent";
import AllAnimeLists from "../components/dashboard/AllAnimeLists";

function Dashboard() {
    const { user, token } = useStateContext();
    const { list } = useParams();

    if (!token) {
        // Redirect user if he is not auth
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <span>Hello {user.name} !</span>
            <DashboardTabs />
            {list ? null : <AllAnimeLists />}
            <Outlet />
        </div>
    );
}

export default Dashboard;
