import { TeacherCard } from "@component/about-us";
import type { NextPageWithLayout } from "@util";
import { APP_TITLE } from "@util";
import { Title, Wrapper } from "components";
import { useLocale } from "hooks";
import Head from "next/head";
import { ReactElement } from "react";

const Teachers: NextPageWithLayout = () => {
  const { localeConst } = useLocale();
  return (
    <div>
      <Head>
        <title>
          {localeConst.ROUTES.teachers} | {localeConst.APP_TITLE}
        </title>
        <meta
          name="description"
          content={`This is the home page of ${APP_TITLE}`}
        />
      </Head>
      <section className="max-w-6xl mx-auto p-4">
        <Title>{localeConst.ABOUT_PAGE.routes.alumni}</Title>
        <div className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
      </section>
    </div>
  );
};

Teachers.getLayout = (page: ReactElement) => {
  return <Wrapper>{page}</Wrapper>;
};

export default Teachers;
