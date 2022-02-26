import classNames from "classnames";
import { LangSwitch } from "components";
import Logo from "components/Logo";
import { useLocale } from "hooks";
import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  const { pathname } = useLocale();
  return (
    <header className="h-16 w-screen shadow bg-white fixed top-0 left-0">
      <nav
        className="max-w-5xl mx-auto h-full flex items-center px-3"
        aria-label="Main Navigation"
      >
        <Logo />
        <ul className="list-none ml-auto flex-grow-1 hidden md:flex items-center justify-end">
          <li className="ml-1.5">
            <Link href="/about-us">
              <a
                className={classNames(
                  "px-3 py-1.5 rounded-md hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/50",
                  pathname === "/about-us"
                    ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/50"
                    : "text-indigo-500",
                  "flex items-center relative group"
                )}
              >
                About Us
                <IoChevronDown size={16} className="ml-1.5" />
                <div className="group-hover:flex hidden w-[100px] h-[100px] absolute top-[calc(100%)] left-1/2 -translate-x-1/2 bg-white shadow-md"></div>
              </a>
            </Link>
          </li>

          <li className="ml-1.5">
            <Link href="/academic">
              <a
                className={classNames(
                  "px-3 py-1.5 rounded-md hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/50",
                  pathname === "/academic"
                    ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/50"
                    : "text-indigo-500",
                  "flex items-center relative"
                )}
              >
                Academic
                <IoChevronDown size={16} className="ml-1.5" />
              </a>
            </Link>
          </li>
          <li className="ml-1.5">
            <Link href="/notice-board">
              <a
                className={classNames(
                  "px-3 py-1.5 rounded-md hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/50",
                  pathname === "/notice-board"
                    ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/50"
                    : "text-indigo-500"
                )}
              >
                Notice Board
              </a>
            </Link>
          </li>
          <li className="ml-1.5">
            <Link href="/gallery">
              <a
                className={classNames(
                  "px-3 py-1.5 rounded-md hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-500/50",
                  pathname === "/gallery"
                    ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/50"
                    : "text-indigo-500"
                )}
              >
                Gallery
              </a>
            </Link>
          </li>
        </ul>
        <LangSwitch />
      </nav>
    </header>
  );
};

export default Header;
