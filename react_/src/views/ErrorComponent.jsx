function ErrorComponent() {
    return (
        <div className="flex flex-col items-center justify-center m-10 ">
            <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4">
                    Oops, something went wrong!
                </h2>

                <p className="text-lg">Please try again later...</p>
            </div>
        </div>
    );
}

export default ErrorComponent;
