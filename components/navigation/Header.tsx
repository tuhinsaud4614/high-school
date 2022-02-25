import Logo from "components/Logo";

const Header = () => {
  return (
    <header className="h-16 w-screen shadow bg-white">
      <nav className="max-w-5xl mx-auto h-full flex items-center px-2.5">
        <Logo />
        <ul className="list-none"></ul>
      </nav>
    </header>
  );
};

export default Header;
