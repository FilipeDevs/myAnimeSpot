import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

function DefaultLayout() {
    const { token } = useStateContext();

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar token={token} />
            <main className="flex-grow">
                <Outlet />
                <ToastContainer position="top-center" autoClose={2000} />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
