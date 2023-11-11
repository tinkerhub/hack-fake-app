function Navbar() {
    return (
        <>
            <progress
                className="progress w-full top-0 fixed [&::-webkit-progress-value]:rounded-none [&::-webkit-progress-bar]:bg-background [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary"
                value={30}
                max={100}
            ></progress>
        </>
    );
}

export default Navbar;
