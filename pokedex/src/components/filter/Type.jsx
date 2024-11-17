import useOutsideToCloseEvent from "../../hooks/useOutsideToCloseEvent";
import { MdArrowDropDown } from "react-icons/md";
import { types } from "../../services/DataDummy";
import { useGlobalContext } from "../../context/useContext";

const FilterType = () => {
  const { toogleSelectType, setToogleSelectType, filterTypeContainer } =
    useOutsideToCloseEvent();
    const { setOptionSelectType, optionSelectType} = useGlobalContext()

  const handleDropdownToggle = () => {
    setToogleSelectType((prev) => !prev);
  };

  const handleTypeSelect = (type, e) => {
    e.stopPropagation();
    setOptionSelectType((prev) => ({
      ...prev,
      id: type.id,
      type: type.name,
    }));
    setToogleSelectType(false);
  };

  return (
    <div
      ref={filterTypeContainer}
      className="w-full border-2 relative py-3 justify-between flex items-center px-2 border-primary/90 hover:border-primary rounded-md"
      onClick={handleDropdownToggle}
    >
      <p>{optionSelectType.type}</p>
      <span
        className={`${
          toogleSelectType ? "rotate-180" : "rotate-0"
        } transition duration-200`}
      >
        <MdArrowDropDown size={20} />
      </span>
      {toogleSelectType && (
        <div className="w-full flex flex-col h-auto bg-white space-y-0.5 py-1 absolute top-[48px] rounded-md left-0 px-1 border-primary border-2 z-10">
          {types.map((type) => (
            <button
              className="text-sm px-2 py-1 rounded-md text-left hover:bg-gray-200"
              key={type.id}
              onClick={(e) => handleTypeSelect(type, e)}
            >
              {type.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterType;
