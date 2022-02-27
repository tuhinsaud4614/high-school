import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const SubNavItems = ({ children }: Props) => {
  return (
    <div className="group-hover:block hidden absolute top-full left-0 pt-1 min-w-full">
      <ul className="list-none bg-white shadow-md w-max min-w-full rounded-md overflow-hidden">
        {children}
      </ul>
    </div>
  );
};

export default SubNavItems;
