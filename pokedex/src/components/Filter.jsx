import FilterType from "./filter/Type";


const Filter = () => {

  

  return (
    <div className="flex flex-col font-semibold gap-8 items-center p-2 w-full max-w-[240px]">
      <FilterType />
      <select
        name="SelectType"
        className="w-full border py-3 px-2 border-primary rounded-md"
      >
        <option value="">Weakness</option>
      </select>
      <select
        name="SelectType"
        className="w-full border py-3 px-2 border-primary rounded-md"
      >
        <option value="">Generation</option>
      </select>
      <div className="flex w-full items-center justify-between p2">
        <button
          type="button"
          className="bg-yellow text-sm rounded-md hover:bg-yellow/90 text-primary px-7 py-3"
        >
          Apply
        </button>
        <button type="button" className=" text-primary text-sm px-7 py-3">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
