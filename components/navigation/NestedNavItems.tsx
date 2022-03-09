import type { AnimationControls, Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  controls?: AnimationControls;
}

const variants: Variants = {
  from: {
    y: 20,
    opacity: 0,
    display: "none",
  },
  to: {
    y: 0,
    opacity: 1,
    display: "block",
  },
};

const NestedNavItems = ({ children, controls }: Props) => {
  return (
    <motion.div
      initial="from"
      animate={controls}
      variants={variants}
      transition={{ bounce: 0, duration: 0.3 }}
      className="absolute top-full left-0 pt-1 min-w-full rounded-md"
    >
      <ul className="list-none bg-white shadow-md w-max min-w-full rounded-md overflow-hidden">
        {children}
      </ul>
    </motion.div>
  );
};

export default NestedNavItems;
