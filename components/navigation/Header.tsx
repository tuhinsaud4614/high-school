import { LangSwitch } from "components";
import Logo from "components/Logo";

const Header = () => {
  return (
    <header className="h-16 w-screen shadow bg-white fixed top-0 left-0">
      <nav className="max-w-5xl mx-auto h-full flex items-center px-3">
        <Logo />
        <ul className="list-none ml-auto  flex-grow-1"></ul>
        <LangSwitch />
      </nav>
    </header>
  );
};

export default Header;
