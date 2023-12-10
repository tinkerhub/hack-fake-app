import { ActionButton, Input } from "..";
import Circle from "../../assets/svgs/circle.svg";

function Login() {
    return (
        <div className="flex flex-col h-screen md:flex-row">
            <div className="bg-primary flex-1 flex overflow-hidden">
                <h1 className="text-4xl font-bold text-background mt-auto ml-4 mb-4 lg:ml-12 lg:mb-12 lg:text-5xl">
                    hack <br /> fake
                </h1>
                <img
                    src={Circle}
                    alt="Two tone circle"
                    className="w-[320px] h-[320px] lg:w-[640px] lg:h-[640px] ml-auto -mr-32 mt-auto -mb-32 lg:-mr-64 lg:-mb-64"
                />
            </div>

            <div className="w-11/12 mx-auto py-8 md:w-2/5 md:py-0 my-auto md:px-8 lg:px-16 md:flex md:flex-col md:gap-6">
                <h1 className="text-3xl font-bold hidden md:block">Welcome!</h1>
                <form className="flex flex-col gap-4">
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <ActionButton text="Login" />
                </form>
            </div>
        </div>
    );
}

export default Login;
