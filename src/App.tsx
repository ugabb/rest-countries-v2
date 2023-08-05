import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterByRegion from "./components/FilterByRegion";
import CountryCard from "./components/CountryCard";

function App() {
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      console.log(countries);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Header theme={false} />
      <div className="flex flex-col md:flex-row justify-between">
        <SearchBar />
        <FilterByRegion />
      </div>
      <main className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {countries.map((country) => (
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
