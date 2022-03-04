import {
  HomeCarousel,
  HomeHeadMasterCard,
  HomeNoticeBox,
  HomeWelcome,
} from "@component/home";
import type { NextPageWithLayout } from "@util";
import { APP_TITLE } from "@util";
import { Wrapper } from "components";
import { useLocale } from "hooks";
import Head from "next/head";
import { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  const { localeConst, locale } = useLocale();
  return (
    <div className="pb-[3.75rem] md:p-0">
      <Head>
        <title>
          {localeConst.APP_TITLE} | {localeConst.ROUTES.home.toUpperCase()}
        </title>
        <meta
          name="description"
          content={`This is the home page of ${APP_TITLE}`}
        />
      </Head>
      <HomeCarousel />
      <HomeWelcome />
      <HomeHeadMasterCard />
      <HomeNoticeBox />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Wrapper>{page}</Wrapper>;
};

export default Home;
