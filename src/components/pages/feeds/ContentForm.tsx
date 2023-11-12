import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

import { ActionButton, FeedTitle } from "../..";
import { useContext } from "react";
import { GlobalStateContext } from "../../../app-context/global-state";

function ContentForm() {
    return (
        <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
            <FeedTitle content="May I know your news content?" />

            <form className="w-full flex flex-col gap-4">
                <textarea
                    rows={4}
                    className="textarea bg-transparent resize-none border border-primary focus:outline-none"
                ></textarea>
                <ActionButton text="Next" />
            </form>
        </div>
    );
}

export default ContentForm;
