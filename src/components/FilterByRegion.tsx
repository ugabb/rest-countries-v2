import React from "react";

type Props = {};

const FilterByRegion = (props: Props) => {
  return (
    <div className="flex w-1/2 lg:w-[200px] gap-3 bg-white p-5 my-5 mx-3 rounded-lg drop-shadow-custom">
      <select className="">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterByRegion;
