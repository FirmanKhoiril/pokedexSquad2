import { MdArrowDropDown } from "react-icons/md";
import { weaknessName } from "../../services/DataDummy";
import useOutsideToCloseEvent from "../../hooks/useOutsideToCloseEvent";
import { useGlobalContext } from "../../context/useContext";

const FilterWeakness = () => {
  const {
    toogleSelectWeakness,
    setToogleSelectWeakness,
    filterWeaknessContainer,
  } = useOutsideToCloseEvent();
  const { setOptionSelectWeakness, optionSelectWeakness} = useGlobalContext()

  const handleDropdownToggle = () => {
    setToogleSelectWeakness((prev) => !prev);
  };

  const handleTypeSelect = (weak, e) => {
    e.stopPropagation();
    setOptionSelectWeakness(weak);
    setToogleSelectWeakness(false);
  };

  return (
    <div
      ref={filterWeaknessContainer}
      className="w-full border relative py-3 justify-between flex items-center px-2 border-primary/90 hover:border-primary rounded-md"
      onClick={handleDropdownToggle}
    >
      <p className="capitalize">{optionSelectWeakness}</p>
      <span
        className={`${
          toogleSelectWeakness ? "rotate-180" : "rotate-0"
        } transition duration-200`}
      >
        <MdArrowDropDown size={20} />
      </span>
      {toogleSelectWeakness && (
        <div className="w-full flex flex-col h-auto bg-white space-y-0.5 py-1 absolute top-[48px] rounded-md left-0 px-1 border-primary border z-10">
          {weaknessName.map((weak) => (
            <button
              className="text-sm px-2 py-1 capitalize rounded-md text-left hover:bg-gray-200"
              key={weak}
              onClick={(e) => handleTypeSelect(weak, e)}
            >
              {weak}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterWeakness;
