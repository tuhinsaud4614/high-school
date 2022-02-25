import { Header } from "@component-navigation";
import type { NextPageWithLayout } from "@util";
import { APP_TITLE } from "@util";
import { useLocale } from "hooks";
import Head from "next/head";
import { ChangeEvent, Fragment, ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  const { locale, localeConst, onChange } = useLocale();

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>{APP_TITLE} | Home</title>
        <meta
          name="description"
          content={`This is the home page of ${APP_TITLE}`}
        />
      </Head>
      <main>
        Home {localeConst.title}
        <div>
          <input
            type="radio"
            name="local"
            value="en"
            id="english-local"
            onChange={handler}
            checked={!locale || locale === "en"}
          />
          <label htmlFor="english-local">English</label>
          <br />
          <input
            type="radio"
            name="local"
            value="bn"
            id="bangla-local"
            onChange={handler}
            checked={locale === "bn"}
          />
          <label htmlFor="bangla-local">বাংলা</label>
        </div>
      </main>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <Header />
      <main className="max-w-5xl mx-auto p-4">{page}</main>
      <footer className="fixed bottom-0 left-0 right-0 py-2.5 px-4">
        <div className="max-w-5xl mx-auto rounded-md bg-white drop-shadow-md">
          h
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
