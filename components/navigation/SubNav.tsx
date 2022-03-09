import classNames from "classnames";
import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "hooks";
import { FC } from "react";

interface Props {
  // children?: ReactNode;
  query: string;
  classes?: {
    root?: string;
    items?: string;
  };
}

const variants: Variants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const SubNav: FC<Props> = ({ children, classes, query }) => {
  const [matched, touchable] = useMediaQuery(query);

  return (
    <AnimatePresence>
      {(!matched || touchable) && (
        <motion.nav
          className={classes?.root}
          variants={variants}
          initial="from"
          animate="to"
          exit="from"
        >
          <ul
            className={classNames(
              "flex items-center justify-center flex-wrap list-none",
              classes?.items
            )}
          >
            {children}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default SubNav;
