import { useState } from "react";

import { MdArrowDropDown } from "react-icons/md";
import { generations } from "../../services/DataDummy";
import useOutsideToCloseEvent from "../../hooks/useOutsideToCloseEvent";
import { useGlobalContext } from "../../context/useContext";

const FilterGeneration = () => {
  const {
    toogleSelectGeneration,
    setToogleSelectGeneration,
    filterGenerationContainer,
  } = useOutsideToCloseEvent();
  const { setOptionSelectGeneration, optionSelectGeneration } =
    useGlobalContext();

  const handleDropdownToggle = () => {
    setToogleSelectGeneration((prev) => !prev);
  };

  const handleGenerationSelect = (generation, e) => {
    e.stopPropagation();
    setOptionSelectGeneration((prev) => ({
      ...prev,
      id: generation.id,
      generation: generation.name,
    }));
    setToogleSelectGeneration(false);
  };

  return (
    <div
      ref={filterGenerationContainer}
      className="w-full border-2 relative py-3 justify-between flex items-center px-2 border-primary/90 hover:border-primary rounded-md"
      onClick={handleDropdownToggle}
    >
      <p>{optionSelectGeneration.generation}</p>
      <span
        className={`${
          toogleSelectGeneration ? "rotate-180" : "rotate-0"
        } transition duration-200`}
      >
        <MdArrowDropDown size={20} />
      </span>
      {toogleSelectGeneration && (
        <div className="w-full flex flex-col h-auto bg-white space-y-0.5 py-1 absolute top-[48px] rounded-md left-0 px-1 border-primary border-2 z-10">
          {generations.map((generation) => (
            <button
              className="text-sm px-2 py-1 rounded-md text-left hover:bg-gray-200"
              key={generation.id}
              onClick={(e) => handleGenerationSelect(generation, e)}
            >
              {generation.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterGeneration;
