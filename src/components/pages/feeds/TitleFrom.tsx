import { ActionButton, FeedTitle } from "../..";

function TitleForm() {
    return (
        <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
            <FeedTitle content="What is your news title?" />

            <form className="w-full flex flex-col gap-4">
                <input className="textarea bg-transparent resize-none border border-primary focus:outline-none"></input>
                <ActionButton text="Next" />
            </form>
        </div>
    );
}

export default TitleForm;
