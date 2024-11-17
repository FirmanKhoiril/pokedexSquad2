import FilterGeneration from "./filter/Generation";
import FilterType from "./filter/Type";
import FilterWeakness from "./filter/Weakness";
import ApplyAndReset from "./filter/ApplyAndReset";

const Filter = () => {
  return (
    <div className="static md:sticky top-[103px] left-0 max-h-screen h-full flex flex-col font-semibold gap-6 sm:gap-8 items-center p-2 w-full md:max-w-[180px] xl:max-w-[240px] bg-white z-10">
      <FilterGeneration />
      <FilterType />
      <FilterWeakness />
      <ApplyAndReset />
    </div>
  );
};

export default Filter;
