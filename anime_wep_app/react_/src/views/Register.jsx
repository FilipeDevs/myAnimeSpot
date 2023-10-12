import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef } from "react";
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
            .then((data) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.erros);
                }
            });
    };

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
                        ref={nameRef}
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
                        ref={emailRef}
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
                        ref={passwordRef}
                        id="password"
                        name="password"
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Password"
                    />
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
