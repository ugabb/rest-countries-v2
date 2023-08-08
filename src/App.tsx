import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterByRegion from "./components/FilterByRegion";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState<any[]>([]);
  const [filterCountries, setFilterCountries] = useState<any[]>([]);
  const [countrySearched, setCountrySearched] = useState<string>("");

  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
    filterCountriesByPrompt();
    // console.log(filterCountries);
  }, [countrySearched]);

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      console.log(countries[78].name.common);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputCountry = (e) => {
    const { value } = e.target;
    setCountrySearched(value);
  };

  const filterCountriesByPrompt = () => {
    const filter = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .startsWith(countrySearched.toLowerCase())
    );
    console.log("works filter", filter);
    if (countrySearched == "") {
      setFilterCountries(filter);
    } else {
      setFilterCountries([]);
    }
  };

  return (
    <div className="">
      <Header theme={false} />
      <div className="flex flex-col md:flex-row justify-between">
        <SearchBar handleInputCountry={handleInputCountry} />
        <FilterByRegion />
      </div>
      <main className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterCountries.length != 0
          ? filterCountries.map((country) => (
              <CountryCard
                key={country?.altSpellings[1]}
                flag={country?.flags?.png}
                name={country?.name?.common}
                capital={country?.capital}
                population={country?.population}
                region={country?.region}
              />
            ))
          : countries.map((country) => (
              <CountryCard
                key={country?.altSpellings[1]}
                flag={country?.flags?.png}
                name={country?.name?.common}
                capital={country?.capital}
                population={country?.population}
                region={country?.region}
              />
            ))}
      </main>
    </div>
  );
}

export default App;
