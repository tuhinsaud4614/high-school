import classNames from "classnames";
import type { AnimationControls, Variants } from "framer-motion";
import { motion } from "framer-motion";

const className = {
  other: "absolute inset-0 h-full bg-cyan-600 overflow-hidden",
  vrLine:
    "after:content-[''] after:absolute after:block after:top-[10%] after:bottom-[10%] after:left-0 after:border-l after:border-white",
  name: "text-lg md:text-xl text-center text-white px-4 pt-4 pb-2",
  content: "h-full overflow-hidden flex flex-col",
  detail: "flex-auto flex flex-col justify-center",
  wrap: "px-4 w-full text-center text-white",
  title: "font-semibold text-sm",
  line: "my-1 border-white mx-4",
};

const variants: Variants = {
  from: {
    width: 0,
  },
  to: {
    width: "100%",
  },
};

const TeacherCardOtherInfo = ({
  childControl,
  rootControl,
}: {
  childControl: AnimationControls;
  rootControl: AnimationControls;
}) => {
  return (
    <motion.div
      variants={variants}
      initial="from"
      animate={rootControl}
      transition={{ bounce: 0, duration: 0.5 }}
      className={classNames(className.other, className.vrLine)}
    >
      <motion.div animate={childControl} className={className.content}>
        <h2 className={className.name}>Mr. Karim Khan</h2>
        <section className={className.detail}>
          <div className={className.wrap}>
            <h3 className={className.title}>Qualifications</h3>
            <p className="text-xs">
              M. Sc. In Applied Chemistry, B. Sc. In Mathematics
            </p>
          </div>
          <hr className={className.line} />
          <div className={classNames(className.wrap, "pb-2")}>
            <h3 className="font-semibold text-sm">Teaching Area</h3>
            <p className="text-xs">General Science, Mathematics</p>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default TeacherCardOtherInfo;
