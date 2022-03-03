import classNames from "classnames";
import { useTouchable } from "hooks";
import Link from "next/link";
import { ReactNode } from "react";
import { IoChevronDown } from "react-icons/io5";

interface Props {
  active?: boolean;
  to: string;
  title: string;
  children?: ReactNode;
  classes?: {
    container?: string;
    root?: string;
  };
}

const NavItem = ({ active, title, to, children, classes }: Props) => {
  const touchable = useTouchable();

  return (
    <li className={classNames(classes?.container)}>
      <Link href={to}>
        <a
          className={classNames(
            "px-3 py-1.5 flex items-center capitalize",
            "hover:bg-blue-500 hover:text-white hover:shadow-md hover:shadow-blue-500/50",
            active
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/50"
              : "text-blue-600",
            classes?.root
          )}
        >
          {title}
          {!!children && !touchable && (
            <IoChevronDown size={16} className="ml-1.5" />
          )}
        </a>
      </Link>
      {!!children && !touchable && children}
    </li>
  );
};

export default NavItem;
