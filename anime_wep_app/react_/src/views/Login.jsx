import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef, useState } from "react";
import axiosClient from "../axios-client.js";

function Login() {
    const { token } = useStateContext();

    if (token) {
        // Auth users can't have access to Login/Register Views
        return <Navigate to="/dashboard" />;
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
            <h2 className="text-3xl font-semibold mb-5">Log in</h2>
            <form onSubmit={onSubmit} action="">
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Email
                    </label>
                    <input
                        ref={emailRef}
                        id="email"
                        name="email"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Email"
                    />
                    {errors && errors.email && (
                        <p className="text-red-500">{errors.email[0]}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Password
                    </label>
                    <input
                        ref={passwordRef}
                        id="password"
                        name="password"
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Password"
                    />
                    {errors && errors.password && (
                        <p className="text-red-500">{errors.password[0]}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Log in
                </button>
                <p className="mt-4">
                    Not registered yet?
                    <Link
                        to="/register"
                        className="text-blue-500 hover:underline"
                    >
                        Create an account
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
