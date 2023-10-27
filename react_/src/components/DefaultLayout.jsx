import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

function DefaultLayout() {
    const { token } = useStateContext();

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Navbar token={token} />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
