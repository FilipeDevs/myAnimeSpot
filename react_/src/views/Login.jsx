import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef, useState } from "react";
import axiosClient from "../axios-client.js";

function Login() {
    const { token } = useStateContext();

    if (token) {
        // Auth users can't have access to Login/Register Views
        return <Navigate to="/" />;
    }

    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErros] = useState(null);
    const { setUser, setToken } = useStateContext();

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        setErros(null);

        axiosClient
            .post("/login", payload)
            .then((response) => {
                setUser(response.data.user);
                setToken(response.data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                    if (response.data.errors) {
                        setErros(response.data.errors);
                    } else {
                        setErros({
                            email: [response.data.message],
                            password: [response.data.message],
                        });
                    }
                }
            });
    };
    return (
        <div className="max-w-md mx-auto m-10 p-6 bg-white rounded-md shadow-md">
            <h1 className="block mb-5 text-lg font-medium text-gray-900 dark:text-white">
                Log in
            </h1>
            <form onSubmit={onSubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        ref={emailRef}
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                        required
                    ></input>
                    {errors && errors.email && (
                        <p className="text-red-500">{errors.email[0]}</p>
                    )}
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        ref={passwordRef}
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    ></input>
                    {errors && errors.password && (
                        <p className="text-red-500">{errors.password[0]}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Log in
                </button>
                <p className="mt-4">
                    Don't have an account yet ?
                    <Link
                        to="/register"
                        className="text-blue-500 hover:underline"
                    >
                        Register here
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
