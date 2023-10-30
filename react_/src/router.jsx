import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import DetailAnime from "./views/DetailAnime";
import UserListAnime from "./components/dashboard/UserListAnime";
import SearchnAnime from "./views/SearchAnime";
import ErrorBoundary from "./components/ErrorBoundary";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ErrorBoundary>
                <DefaultLayout />
            </ErrorBoundary>
        ),
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "/dashboard/:list",
                        element: <UserListAnime />,
                    },
                ],
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/search",
                element: <SearchnAnime />,
            },
            {
                path: "/animeDetail/:id",
                element: <DetailAnime />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
