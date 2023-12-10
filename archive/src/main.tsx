import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Feed, Home, Login } from "./components/index.ts";
import TitleForm from "./components/pages/feeds/TitleForm.tsx";
import ContentForm from "./components/pages/feeds/ContentForm.tsx";
import UrlForm from "./components/pages/feeds/UrlForm.tsx";
import PredictAnnotateSelect from "./components/pages/feeds/PredictAnnotateSelect.tsx";
import Prediction from "./components/pages/feeds/Prediction.tsx";
import Annotate from "./components/pages/feeds/Annotate.tsx";
import Feedback from "./components/pages/feeds/Feedback.tsx";
import { GlobalStateProvider } from "./app-context/global-state.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App children={<Home />} />,
  },
  {
    path: "/login",
    element: <App children={<Login />} />,
  },
  {
    path: "/add-news-title",
    element: <App children={<Feed children={<TitleForm />} />} />,
  },
  {
    path: "/add-news-content",
    element: <App children={<Feed children={<ContentForm />} />} />,
  },
  {
    path: "/add-news-source",
    element: <App children={<Feed children={<UrlForm />} />} />,
  },
  {
    path: "/submit-news",
    element: <App children={<Feed children={<PredictAnnotateSelect />} />} />,
  },
  {
    path: "/predict",
    element: <App children={<Feed children={<Prediction />} />} />,
  },
  {
    path: "/annotate",
    element: <App children={<Feed children={<Annotate />} />} />,
  },
  {
    path: "/feedback",
    element: <App children={<Feed children={<Feedback />} />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GlobalStateProvider>
    <RouterProvider router={router} />
  </GlobalStateProvider>
);
