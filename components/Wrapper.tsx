import { BottomBar, Header } from "@component-navigation";
import classNames from "classnames";
import { Fragment, HTMLAttributes } from "react";

const Wrapper = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Fragment>
      <Header />
      <main className={classNames("mt-16", className)} {...rest}>
        {children}
      </main>
      <BottomBar />
    </Fragment>
  );
};

export default Wrapper;
