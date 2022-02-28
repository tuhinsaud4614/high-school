import type { NextPageWithLayout } from "@util";
import { APP_TITLE } from "@util";
import { Wrapper } from "components";
import { useLocale } from "hooks";
import Head from "next/head";
import { ReactElement } from "react";

const CoCurricularActivities: NextPageWithLayout = () => {
  const { localeConst } = useLocale();
  return (
    <div>
      <Head>
        <title>
          {localeConst.APP_TITLE} | {localeConst.ROUTES.coCurricularActivities}
        </title>
        <meta
          name="description"
          content={`This is the home page of ${APP_TITLE}`}
        />
      </Head>
      CoCurricularActivities
    </div>
  );
};

CoCurricularActivities.getLayout = (page: ReactElement) => {
  return <Wrapper>{page}</Wrapper>;
};

export default CoCurricularActivities;
