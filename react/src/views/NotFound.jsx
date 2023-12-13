function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <p className="text-6xl text-red-500 font-bold">404</p>
            <p className="text-4xl text-gray-800 mt-2 dark:text-white">
                Page Not Found
            </p>
            <p className="text-gray-600 mt-4 text-xl dark:text-gray-300">
                The page you are looking for does not exist :(
            </p>
            <a
                href="/"
                className="text-gray-600 mt-4 text-xl underline dark:text-gray-300"
            >
                Go back to Home
            </a>
        </div>
    );
}

export default NotFound;
