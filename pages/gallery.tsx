import type { NextPageWithLayout } from "@util";
import { APP_TITLE } from "@util";
import { Wrapper } from "components";
import { useLocale } from "hooks";
import Head from "next/head";
import { ReactElement } from "react";

const Gallery: NextPageWithLayout = () => {
  const { localeConst } = useLocale();
  return (
    <div>
      <Head>
        <title>
          {localeConst.APP_TITLE} | {localeConst.ROUTES.gallery}
        </title>
        <meta
          name="description"
          content={`This is the home page of ${APP_TITLE}`}
        />
      </Head>
      Gallery
    </div>
  );
};

Gallery.getLayout = (page: ReactElement) => {
  return <Wrapper>{page}</Wrapper>;
};

export default Gallery;
