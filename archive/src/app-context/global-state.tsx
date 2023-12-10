import React, {createContext, useState} from "react";
import AnnotationService from "../services/api/hfAppServer/AnnotationService.ts";
import axios from "axios";

const apiServer = axios.create({
  baseURL: "https://api.hackfake.swalah.co",
  // Add any other configurations you need
});
const annotationService = AnnotationService(apiServer);

const result = await annotationService.getAnnotations();
console.log("res", result);
interface GlobalState {
  news: {
    id: string;
    title: string;
    content: string;
    url: string;
    date: string;
  };
  annotations: string[];
  newsId: string;
  annontaionsMAp: Array<any>;
  // Define your global state interface here
}
const annots =[];



result?.data.ids.forEach((id: string) => {
    const annotation = result?.data.items[id].name;
    annots.push(annotation);
});
const initialGlobalState: GlobalState = {
  news: {
    id: "",
    title: "",
    content: "",
    url: "",
    date: "",
  },
  annotations: annots,
  newsId: "",
  annontaionsMAp:result?.data.items,
};

export const GlobalStateContext = createContext<{
  globalState: GlobalState;
  updateState: (newState: GlobalState) => void;
}>({
  globalState: initialGlobalState,
  updateState: () => {},
});

export const GlobalStateProvider: React.FC = ({ children }) => {
  const [globalState, setGlobalState] =
    useState<GlobalState>(initialGlobalState);
  const updateState = (newState: GlobalState) => {
    setGlobalState(newState);
  };
  return (
    <GlobalStateContext.Provider value={{ globalState, updateState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
