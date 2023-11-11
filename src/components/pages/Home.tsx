import { ActionButton } from "..";
import Circle from "../../assets/svgs/circle.svg";

function Home() {
    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="w-11/12 mx-auto py-8  md:pt-16 md:pb-0">
                    <h1 className=" md:text-center text-5xl font-semibold text-primary">
                        hack <br /> fake
                    </h1>
                </div>
                <div className="flex flex-1 flex-col justify-between py-8 md:flex-row md:gap-10 md:w-1/2 md:mx-auto md:items-center md:py-0">
                    <img
                        className="h-96 w-96 rounded-full mx-auto"
                        src={Circle}
                        alt="Circles"
                    />
                    <div className=" w-11/12 mx-auto flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-2xl font-bold">Hey There!</h1>
                            <p className=" ">
                                Lets get started on the innovative tech solution
                                to detect and prevent the spread of digital
                                falsehoods.
                            </p>
                        </div>
                        <ActionButton text={"start"} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
