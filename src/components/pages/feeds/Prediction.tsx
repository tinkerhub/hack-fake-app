import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ActionButton, FeedTitle } from "../..";
import Chips from "../../interface/Chips";

function Prediction() {
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/annotate");
    };

    return (
        <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-2/3 mx-auto gap-8 flex flex-col">
            <FeedTitle content="This is what i think about the news" />
            <div className="flex flex-col items-center">
                <div className="w-96 scale-110 h-10 bg-red-600 flex justify-center items-center text-white rounded-md">
                    Fake
                </div>
                <div className="mt-5 flex flex-wrap justify-center  gap-2">
                    <Chips text="Misinformation" />

                    <Chips text="Misinformation" />
                    <Chips text="Misinformation" />
                    <Chips text="Misinformation" />
                    <Chips text="Misinformation" />
                </div>
            </div>
            <div className="w-full flex flex-col gap-4">
                <div className="flex justify-center items-center gap-4">
                    State your opinion
                    <div className="flex w-1/2  ">
                        <ActionButton text="Annotate" onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prediction;
