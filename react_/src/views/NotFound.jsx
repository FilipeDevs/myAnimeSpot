function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <p className="text-6xl text-red-600 font-bold">404</p>
            <p className="text-4xl text-gray-800 mt-2">Page Not Found</p>
            <p className="text-gray-600 mt-4 text-xl">
                The page you are looking for does not exist :(
            </p>
            <a href="/" className="text-gray-600 mt-4 text-xl underline">
                Go back to Home
            </a>
        </div>
    );
}

export default NotFound;
