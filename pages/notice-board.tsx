import type { NextPageWithLayout } from "@util";
import { APP_TITLE } from "@util";
import { Wrapper } from "components";
import { useLocale } from "hooks";
import Head from "next/head";
import { ReactElement } from "react";

const NoticeBoard: NextPageWithLayout = () => {
  const { localeConst } = useLocale();
  return (
    <div>
      <Head>
        <title>
          {localeConst.APP_TITLE} | {localeConst.ROUTES.noticeBoard}
        </title>
        <meta
          name="description"
          content={`This is the home page of ${APP_TITLE}`}
        />
      </Head>
      NoticeBoard
    </div>
  );
};

NoticeBoard.getLayout = (page: ReactElement) => {
  return <Wrapper className="max-w-6xl mx-auto p-4">{page}</Wrapper>;
};

export default NoticeBoard;
