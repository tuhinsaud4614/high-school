import type { AppPropsWithLayout } from "@util";
import { APP_TITLE } from "@util";
import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Fragment>
      <Head>
        <title>{APP_TITLE}</title>
        <meta
          name="description"
          content={`This is official website of ${APP_TITLE}`}
        />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

// routes
// / - home
// /notice-board Notice Board
// /gallery Gallery
// /about-us About Us [history]
// /about-us/teachers Teachers
// /about-us/alumni Alumni
// /academic/syllabus Syllabus
// /academic/routines Class Routine
// /academic/co-curricular-activities Co-curricular Activities
// /academic/guidelines Guidelines

// Admin Routes
// /admin Dashboard
// /admin/notice-board Notice Board
// /admin/notice-board/modify Add Notice
// /admin/notice-board/modify?id=[] Edit Notice
