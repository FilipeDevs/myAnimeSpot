import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useRef, useState } from "react";
import axiosClient from "../clients/axios-client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
    const { token } = useStateContext();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErros] = useState(null);
    const { setUser, setToken } = useStateContext();

    if (token) {
        // Auth users can't have acess to Login/Register Views
        return <Navigate to="/" />;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            // no camel case so Laravel can search for confirm password
            password_confirmation: passwordConfirmationRef.current.value,
        };

        axiosClient
            .post("/register", payload)
            .then((response) => {
                setUser(response.data.user.name);
                setToken(response.data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErros(response.data.errors);
                }
            });
    };

    return (
        <>
            <div className="max-w-md mx-auto m-10 p-6 bg-white rounded-md shadow-md dark:bg-gray-900">
                <h1 className="block mb-5 text-2xl font-medium text-gray-900 dark:text-white">
                    Register
                </h1>
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your name
                        </label>
                        <input
                            ref={nameRef}
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your name here"
                            required
                        ></input>
                    </div>
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
                    <div className="mb-6">
                        <label
                            htmlFor="passwordConfirmation"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Confirm password
                        </label>
                        <input
                            ref={passwordConfirmationRef}
                            id="passwordConfirmation"
                            name="passwordConfirmation"
                            type="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        ></input>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Register
                    </button>
                    <p className="mt-4 dark:text-white">
                        Already have an account ?
                        <Link
                            to="/login"
                            className="text-blue-500 hover:underline"
                        >
                            {" "}
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Register;
