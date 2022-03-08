import { Leaf } from "@component/icons";
import classNames from "classnames";
import { ReactNode } from "react";

const className = {
  titleWrapper: "flex items-center justify-center",
  title: "text-blue-600 text-2xl md:text-4xl px-4 capitalize",
};

interface Props {
  children: ReactNode;
  classes?: { root?: string; title?: string };
}

const Title = ({ children, classes }: Props) => {
  return (
    <div className={classNames(className.titleWrapper, classes?.root)}>
      <Leaf width={35} fill="rgb(191, 219, 254)" color="rgb(191, 219, 254)" />
      <h1 className={classNames(className.title, classes?.title)}>
        {children}
      </h1>
      <Leaf
        width={35}
        height={56}
        color="rgb(191, 219, 254)"
        fill="rgb(191, 219, 254)"
        right
      />
    </div>
  );
};

export default Title;
