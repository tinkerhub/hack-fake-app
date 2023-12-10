import {useNavigate} from "react-router-dom";
import {FormEvent, useContext} from "react";
import {ActionButton, FeedTitle} from "../..";
import {GlobalStateContext} from "@/app-context/global-state.tsx";

function PredictAnnotateSelect() {
    const navigate = useNavigate();

    const handlePredictClick = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        navigate("/predict");
    };

    const handleAnnotateClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/annotate");
    };

    return (
        <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
            <FeedTitle content="What would you like to do" />

            <form className="w-full flex flex-col gap-4">
                <div className="flex  w-1/2 gap-2">
                    <ActionButton text="Predict" onClick={handlePredictClick} />
                    <ActionButton
                        text="Annotate"
                        onClick={handleAnnotateClick}
                    />
                </div>
            </form>
        </div>
    );
}

export default PredictAnnotateSelect;
