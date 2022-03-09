import { AlumniCard } from "@component/about-us";
import type { NextPageWithLayout } from "@util";
import { APP_TITLE } from "@util";
import { Title, Wrapper } from "components";
import { useLocale } from "hooks";
import Head from "next/head";
import { ReactElement } from "react";

const Alumni: NextPageWithLayout = () => {
  const { localeConst } = useLocale();
  return (
    <div>
      <Head>
        <title>
          {localeConst.APP_TITLE} | {localeConst.ROUTES.alumni}
        </title>
        <meta
          name="description"
          content={`This is the home page of ${APP_TITLE}`}
        />
      </Head>
      <section className="max-w-6xl mx-auto p-4">
        <Title>{localeConst.ABOUT_PAGE.routes.alumni}</Title>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
        </div>
      </section>
    </div>
  );
};

Alumni.getLayout = (page: ReactElement) => {
  return <Wrapper>{page}</Wrapper>;
};

export default Alumni;
