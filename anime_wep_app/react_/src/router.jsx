import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";
import Main from "./views/Main";

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
            },
            {
                path: "/",
                element: <Main />,
            },
        ],
    },

    {
        path: "/",
        element: <DefaultLayout />,
        children: [],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
