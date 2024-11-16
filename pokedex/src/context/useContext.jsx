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
  triggerFilter: false,
  setTriggerFilter: () => {},
});

export const ContextProvider = ({ children }) => {
  const [optionSelectWeakness, setOptionSelectWeakness] = useState("Weakness");
  const [optionSelectGeneration, setOptionSelectGeneration] = useState({
    id: "",
    generation: "Generation",
  });
  const [optionSelectType, setOptionSelectType] = useState({
    id: "",
    type: "Type",
  });
  const [triggerFilter, setTriggerFilter] = useState(false)
  return (
    <StateContext.Provider
      value={{
        optionSelectGeneration,
        optionSelectWeakness,
        optionSelectType,
        triggerFilter,
        setTriggerFilter,
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
