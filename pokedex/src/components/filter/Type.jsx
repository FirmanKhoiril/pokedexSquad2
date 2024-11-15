import { useState } from "react";

import { MdArrowDropDown } from "react-icons/md";
import { types } from "../../services/DataDummy";

const FilterType = () => {
    const [toogleSelectType, setToogleSelectType] = useState({
        id: "",
        isOpen: false,
        type: "Type",
      });
    
      const handleDropdownToggle = () => {
        setToogleSelectType((prev) => ({
          ...prev,
          isOpen: !prev.isOpen,
        }));
      };
    
      const handleTypeSelect = (type, e) => {
        e.stopPropagation();
        setToogleSelectType((prev) => ({
          ...prev,
          id: type.id,
          isOpen: !prev.isOpen,
          type: type.name,
        }));
      };

  return (
    <div
        className="w-full border relative py-3 justify-between flex items-center px-2 border-primary/90 hover:border-primary rounded-md"
        onClick={handleDropdownToggle}
      >
        <p>{toogleSelectType.type}</p>
        <span
          className={`${
            toogleSelectType.isOpen ? "rotate-180" : "rotate-0"
          } transition duration-200`}
        >
          <MdArrowDropDown size={20} />
        </span>
        {toogleSelectType.isOpen && (
          <div className="w-full flex flex-col h-auto bg-white space-y-3 py-2 absolute top-[48px] rounded-md left-0 px-2 border-primary border z-10">
            {types.map((type) => (
              <button
                className="text-sm px-2 py-2 rounded-md text-left hover:bg-gray-200"
                key={type.id}
                onClick={(e) => handleTypeSelect(type, e)}
              >
                {type.name}
              </button>
            ))}
          </div>
        )}
      </div>
  )
}

export default FilterType