import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element : <Login/>

            },
            {
                path: '/register',
                element : <Register/>

            },
        ]
    },

    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
    },
    {
        path: '*',
        element : <NotFound/>

    },

])

export default router
