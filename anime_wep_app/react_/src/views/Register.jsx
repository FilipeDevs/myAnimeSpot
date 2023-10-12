import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef, useState } from "react";
import axiosClient from "../axios-client.js";

function Register() {
    const { token } = useStateContext();

    if (token) {
        // Auth users can't have acess to Login/Register Views
        return <Navigate to="/dashboard" />;
    }

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErros] = useState(null);
    const { setUser, setToken } = useStateContext();

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value, // no camel case so Laravel can search for confirm password
        };

        axiosClient
            .post("/register", payload)
            .then((response) => {
                setUser(response.data.user);
                setToken(response.data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                    setErros(response.data.errors);
                }
            });
    };

    return (
        <div className="max-w-md mx-auto m-10 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-3xl font-semibold mb-5">Register</h2>
            <form onSubmit={onSubmit} method="POST">
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Name
                    </label>
                    <input
                        ref={nameRef}
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Name"
                    />
                    {errors && errors.name && (
                        <p className="text-red-500">{errors.name[0]}</p>
                    )}
                </div>
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
                <div className="mb-4">
                    <label
                        htmlFor="passwordConfirmation"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        ref={passwordConfirmationRef}
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Password Confirmation"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Register
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
