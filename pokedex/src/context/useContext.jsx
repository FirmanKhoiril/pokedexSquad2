import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  optionSelectWeakness: "",
  setOptionSelectWeakness: () => {},
  optionSelectGeneration: {
    id: "",
    generation: "Generation",
  },
  setOptionSelectGeneration: () => {},
  optionSelectType: {
    id: "",
    type: "Type",
  },
  setOptionSelectType: () => {},
  optionSortBy: "id",
  setOptionSortBy: () => {},
  bookmarks: [],
  setBookmarks: () => {},
  setSearchInput: () => {},
  searchInput: "",
});

export const ContextProvider = ({ children }) => {
  const [optionSelectWeakness, setOptionSelectWeakness] = useState("Weakness");
  const [optionSortBy, setOptionSortBy] = useState("id")
  const [optionSelectGeneration, setOptionSelectGeneration] = useState({
    id: "",
    generation: "Generation",
  });
  const [optionSelectType, setOptionSelectType] = useState({
    id: "",
    type: "Type",
  });
  const [bookmarks, setBookmarks] = useState([])
  const [searchInput, setSearchInput] = useState("")


  return (
    <StateContext.Provider
      value={{
        optionSelectGeneration,
        optionSelectWeakness,
        optionSelectType,
        optionSortBy,
        bookmarks,
        searchInput,
        setSearchInput,
        setBookmarks,
        setOptionSortBy,
        setOptionSelectGeneration,
        setOptionSelectType,
        setOptionSelectWeakness,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateContext);
