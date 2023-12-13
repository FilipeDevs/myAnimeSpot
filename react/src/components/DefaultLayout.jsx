import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

function DefaultLayout() {
    const { token } = useStateContext();
    const initialMode = localStorage.getItem("darkMode") === "true";
    const [isDarkMode, setDarkMode] = useState(initialMode);

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800">
            <Navbar token={token} toggleDarkMode={toggleDarkMode} />
            <main className="flex-grow">
                <Outlet />
                <ToastContainer position="top-center" autoClose={2000} />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
