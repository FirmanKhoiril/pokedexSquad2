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


  return (
    <StateContext.Provider
      value={{
        optionSelectGeneration,
        optionSelectWeakness,
        optionSelectType,
        optionSortBy,
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
