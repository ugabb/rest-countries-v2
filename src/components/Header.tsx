import { PiMoonLight } from "react-icons/pi";

type Props = {
  theme: boolean;
};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between px-3 p-10 bg-gray-50 drop-shadow-custom">
      <h3 className="font-extrabold">Where in the world?</h3>
      <div className="flex gap-3 items-center">
        <PiMoonLight />
        <p className="">Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
