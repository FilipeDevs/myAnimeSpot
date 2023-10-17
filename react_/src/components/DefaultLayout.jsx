import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import axiosCLient from "../axios-client";

function DefaultLayout() {
    console.log("Component rendered");
    const { token, setUser } = useStateContext();

    useEffect(() => {
        // @TODO maybe store user info in local storage for faster rendering
        axiosCLient.get("user").then((response) => {
            setUser(response.data);
        });
    }, []);

    return (
        <div>
            <Navbar token={token} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
