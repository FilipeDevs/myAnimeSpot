function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-400">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between h-16">
                <span className="text-sm text-gray-500 text-center dark:text-gray-400 w-full flex items-center justify-center">
                    © 2023{" "}
                    <a
                        href="https://github.com/FilipeDevs"
                        className="hover:underline"
                    >
                        Developed by FilipeDevs 😎
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
