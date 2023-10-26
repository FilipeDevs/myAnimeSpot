import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import FilterAndSearch from "./components/anime_search/FilterAndSearch";
import DetailAnime from "./views/DetailAnime";
import AnimeDetailContent from "./components/anime_detail/AnimeDetailContent";
import UserListAnime from "./components/dashboard/UserListAnime";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
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
                element: <FilterAndSearch />,
            },
            {
                path: "/animeDetail/:id",
                element: <DetailAnime />,
                children: [
                    {
                        path: "/animeDetail/:id/:content",
                        element: <AnimeDetailContent />,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
