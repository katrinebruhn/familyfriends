import Logo from "./Logo";
import { LuBell } from "react-icons/lu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-6">
      <Logo />
      <div className="relative">
        <LuBell className="h-7 w-7 text-gray" />
        <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-coral ring-[3px] ring-white" />{" "}
      </div>
    </header>
  );
};

export default Header;
