import React from "react";

type Props = {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
};

const CountryCard = ({ flag, name, population, region, capital }: Props) => {
  return (
    <div className="flex flex-col gap-3 bg-white my-5 mx-3 rounded-lg drop-shadow-custom">
      <img src={flag} alt="" className="w-full rounded-t-lg" />
      <h3 className="text-lg font-extrabold mx-5">{name}</h3>

      <div className="mx-5">
        <p>
          <span className="font-semibold">Population</span>:{population}
        </p>
        <p>
          <span className="font-semibold">Region: {region}</span>
        </p>
        <p>
          <span className="font-semibold">Capital: {capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
