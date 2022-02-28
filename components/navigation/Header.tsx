import { LangSwitch } from "components";
import Logo from "components/Logo";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <header className="h-16 w-screen shadow bg-white fixed top-0 left-0 z-[100]">
      <nav
        className="max-w-6xl mx-auto h-full flex items-center px-3"
        aria-label="Main Navigation"
      >
        <Logo />
        <NavItems />
        <LangSwitch />
      </nav>
    </header>
  );
};

export default Header;
