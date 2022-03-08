import classNames from "classnames";
import { useMediaQuery } from "hooks";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  query: string;
  classes?: {
    root?: string;
    items?: string;
  };
}

const SubNav = ({ children, classes, query }: Props) => {
  const [matched, touchable] = useMediaQuery(query);
  if (!matched || touchable) {
    return (
      <nav className={classes?.root}>
        <ul
          className={classNames(
            "flex items-center justify-center flex-wrap list-none",
            classes?.items
          )}
        >
          {children}
        </ul>
      </nav>
    );
  }
  return null;
};

export default SubNav;
