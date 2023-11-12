import { useNavigate } from "react-router-dom";
import { FormEvent, useContext } from "react";
import axios from "axios";

import { GlobalStateContext } from "../../../app-context/global-state";
import { ActionButton, FeedTitle } from "../..";
import NewsCreationService from "../../../services/api/hfAppServer/NewsCreationService";

function UrlForm() {
  const { globalState, updateState } = useContext(GlobalStateContext);
  const newsUrl = globalState.news.url;
  const newsDate = globalState.news.date;
  const apiServer = axios.create({
    baseURL: "http://localhost:3086",
  });

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const postData = {
        title: globalState.news.title,
        content: globalState.news.content,
        url: globalState.news.url,
        date: globalState.news.date,
      };

      const res = await NewsCreationService(apiServer).create(postData);

      console.log("res", res);

      updateState({
        ...globalState,
        newsId: res.data.id,
      });
      // console.log(res.data.id);

      navigate("/submit-news");
    } catch (err) {
      console.error("An unexpected error occurred:", err);
    }
  };

  return (
    <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
      <FeedTitle content="Finally, can I know the source URL and date" />

      <form className="w-full flex flex-col gap-4">
        <input
          value={newsUrl}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder="URL"
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
