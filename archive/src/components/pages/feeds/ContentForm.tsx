import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

import { ActionButton, FeedTitle } from "../..";
import { useContext } from "react";
import { GlobalStateContext } from "../../../app-context/global-state";

function ContentForm() {
  const { globalState, updateState } = useContext(GlobalStateContext);
  const newsContent = globalState.news.content;

  const handleContentChange = (newContent: string) => {
    updateState({
      ...globalState,
      news: {
        ...globalState.news,
        content: newContent,
      },
    });
  };

    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/add-news-source");
    };

    return (
      <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
        <FeedTitle content="May I know your news content?" />

        <form className="w-full flex flex-col gap-4">
          <textarea
            rows={4}
            value={newsContent}
            onChange={(e) => handleContentChange(e.target.value)}
            className="textarea bg-transparent resize-none border border-primary focus:outline-none"
          ></textarea>
          <ActionButton text="Next" onClick={handleSubmit} />
        </form>
      </div>
    );
}

export default ContentForm;
