import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
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
                        <div className="flex space-x-4">
                            <Link
                                to="/login"
                                class="text-white hover:text-gray-300"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                class="text-white hover:text-gray-300"
                            >
                                Register
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default DefaultLayout;
