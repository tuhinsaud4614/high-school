import { BottomBar, Header } from "@component-navigation";
import { Fragment, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <main className="max-w-5xl mx-auto p-4 mt-16">{children}</main>
      <BottomBar />
    </Fragment>
  );
};

export default Wrapper;
