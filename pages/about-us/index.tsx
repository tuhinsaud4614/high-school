import { BottomBar, Header } from "@component-navigation";
import { Fragment, ReactElement } from "react";

const AboutUs = () => {
  return <div>About us</div>;
};

AboutUs.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <Header />
      <main className="max-w-5xl mx-auto p-4 mt-16">{page}</main>
      <BottomBar />
    </Fragment>
  );
};

export default AboutUs;
