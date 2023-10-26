import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import axiosCLient from "../axios-client";

function DefaultLayout() {
    const { token, setUser } = useStateContext();

    useEffect(() => {
        // @TODO maybe store user info in local storage for faster rendering
        axiosCLient.get("user").then((response) => {
            setUser(response.data);
        });
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar token={token} />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
