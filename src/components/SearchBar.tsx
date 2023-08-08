import { AiOutlineSearch } from "react-icons/ai";

type Props = {
  // country: string;
  handleInputCountry: () => void;
};

const SearchBar = ({ handleInputCountry }: Props) => {
  return (
    <div className="flex items-center gap-3 bg-white p-3 my-5 mx-3 rounded-lg drop-shadow-custom md:w-1/2">
      <AiOutlineSearch className="text-3xl text-darkGray" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full p-2"
        onChange={handleInputCountry}
      />
    </div>
  );
};

export default SearchBar;
