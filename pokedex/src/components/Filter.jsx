import FilterGeneration from "./filter/Generation";
import FilterType from "./filter/Type";
import FilterWeakness from "./filter/Weakness";
import ApplyAndReset from "./filter/ApplyAndReset";


const Filter = () => {
  return (
    <div className="flex flex-col font-semibold gap-8 items-center p-2 w-full max-w-[240px]">
      <FilterType />
      <FilterWeakness />
     <FilterGeneration />
      <ApplyAndReset />
    </div>
  );
};

export default Filter;
