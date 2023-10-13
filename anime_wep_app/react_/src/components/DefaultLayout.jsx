import { Link, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function DefaultLayout() {
    const { token } = useStateContext(); // Refresh layout when token is updated
    console.log("Component");

    return (
        <div>
            <nav className="bg-blue-500 p-4">
                <ul className="flex justify-between">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        {!token && (
                            <div className="flex space-x-4">
                                <Link
                                    to="/login"
                                    className="text-white hover:text-gray-300"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="text-white hover:text-gray-300"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                        {token && (
                            <Link
                                to="/dashboard"
                                className="text-white hover:text-gray-300"
                            >
                                Dashboard
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default DefaultLayout;
