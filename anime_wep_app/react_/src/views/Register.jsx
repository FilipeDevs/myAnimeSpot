import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function Register() {
    const { token } = useStateContext();

    if (token) {
        // Auth users can't have acess to Login/Register Views
        return <Navigate to="/dashboard" />;
    }

    const onSubmit = (event) => {};

    return (
        <div className="max-w-md mx-auto m-10 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-3xl font-semibold mb-5">Register</h2>
            <form onSubmit={onSubmit} action="">
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Name"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Password"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Log in
                </button>
                <p className="mt-4">
                    Already Registered ?
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Log in
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
