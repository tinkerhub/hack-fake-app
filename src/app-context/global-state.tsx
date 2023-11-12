import React, { createContext, useState } from "react";

interface GlobalState {
  news: {
    id: string;
    title: string;
    content: string;
    url: string;
    date: string;
  };
  annotations: string[];
  // Define your global state interface here
}

const initialGlobalState: GlobalState = {
  news: {
    id: "",
    title: "",
    content: "",
    url: "",
    date: "",
  },
  annotations: [
    "Hate",
    "Misleading",
    "Disinformation",
    "Rumour",
    "Sensationalism",
  ],
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
