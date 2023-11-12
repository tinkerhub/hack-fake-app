import { useNavigate } from "react-router-dom";
import { FormEvent, useContext } from "react";

import { GlobalStateContext } from "../../../app-context/global-state";
import { ActionButton, FeedTitle } from "../..";

function UrlForm() {
  const { globalState, updateState } = useContext(GlobalStateContext);
  const newsUrl = globalState.news.url;
  const newsDate = globalState.news.date;

  const handleUrlChange = (newUrl: string) => {
    updateState({
      ...globalState,
      news: {
        ...globalState.news,
        url: newUrl,
      },
    });
  };

  const handleDateChange = (newDate: string) => {
    updateState({
      ...globalState,
      news: {
        ...globalState.news,
        date: newDate,
      },
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/submit-news");
    
    console.log(globalState.news);
  };

  return (
    <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
      <FeedTitle content="FInally can I know the source url and date" />

      <form className="w-full flex flex-col gap-4">
        <input
          value={newsUrl}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder="Url"
          className="textarea bg-transparent resize-none border border-primary focus:outline-none"
        ></input>
        <input
          value={newsDate}
          onChange={(e) => handleDateChange(e.target.value)}
          type="date"
          placeholder="Date"
          className="textarea bg-transparent resize-none border border-primary focus:outline-none"
        ></input>
        <ActionButton text="Next" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default UrlForm;
