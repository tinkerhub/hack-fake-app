function Navbar() {
    return (
        <>
            <progress
                className="progress w-full top-0 fixed [&::-webkit-progress-value]:rounded-none [&::-webkit-progress-bar]:bg-background [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary"
                value={30}
                max={100}
            ></progress>

            <h1 className="text-3xl font-bold text-primary pl-4 pt-4 lg:pl-8 lg:pt-8 lg:text-4xl">
                hack <br /> fake
            </h1>
        </>
    );
}

export default Navbar;
