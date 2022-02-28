import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { HiAcademicCap } from "react-icons/hi";
import { IoIosClipboard } from "react-icons/io";
import { IoHome, IoImageSharp, IoPeopleSharp } from "react-icons/io5";

const items = [
  { to: "/", icon: <IoHome size={24} /> },
  {
    to: "/about-us",
    icon: <IoPeopleSharp size={24} />,
  },
  {
    to: "/academic",
    icon: <HiAcademicCap size={24} />,
  },
  {
    to: "/notice-board",
    icon: <IoIosClipboard size={24} />,
  },
  {
    to: "/gallery",
    icon: <IoImageSharp size={24} />,
  },
];

const BottomBar = () => {
  const { pathname } = useRouter();

  return (
    <nav
      aria-label="Bottom Navigation"
      className="z-[100] fixed bottom-3 left-1/2 -translate-x-1/2 rounded-[3rem] bg-white shadow-md md:hidden"
    >
      <ul className="list-none px-2 py-2 flex items-center justify-evenly">
        {items.map((item, i) => (
          <li key={item.to} className={classNames(i !== 0 && "ml-1")}>
            <Link href={item.to}>
              <a
                className={classNames(
                  "flex items-center justify-center w-12 h-8 rounded-full hover:text-white hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-500/50 transition-colors",
                  pathname === item.to
                    ? "text-white bg-indigo-500 shadow-md shadow-indigo-500/50"
                    : "text-indigo-500"
                )}
              >
                {item.icon}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomBar;
