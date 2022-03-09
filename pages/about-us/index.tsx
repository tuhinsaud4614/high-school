import { NavItem, SubNav } from "@component-navigation";
import { APP_TITLE, NextPageWithLayout, PATHS } from "@util";
import { Title, Wrapper } from "components";
import { useLocale } from "hooks";
import Head from "next/head";
import { Fragment, ReactElement } from "react";

const className = {
  description: "text-neutral-800 md:text-xl mt-6 text-center",
};

const AboutUs: NextPageWithLayout = () => {
  const { localeConst } = useLocale();

  return (
    <Fragment>
      <Head>
        <title>
          {localeConst.ROUTES.aboutUs} | {localeConst.APP_TITLE}
        </title>
        <meta
          name="description"
          content={`This is the home page of ${APP_TITLE}`}
        />
      </Head>
      <section className="max-w-6xl mx-auto p-4">
        <SubNav query="(min-width: 768px)">
          <NavItem
            title={localeConst.ABOUT_PAGE.routes.teachers}
            to={PATHS.teachers}
            classes={{ root: "rounded-md" }}
          />
          <NavItem
            title={localeConst.ABOUT_PAGE.routes.alumni}
            to={PATHS.alumni}
            classes={{ root: "rounded-md" }}
          />
        </SubNav>
        <Title classes={{ root: "mt-4" }}>{localeConst.ABOUT_PAGE.title}</Title>
        <p className={className.description}>
          {localeConst.ABOUT_PAGE.description}
        </p>
        <Title classes={{ root: "mt-8" }}>
          {localeConst.ABOUT_PAGE.historyTitle}
        </Title>
        <p className={className.description}>
          {localeConst.ABOUT_PAGE.historyDescription}
        </p>
        <Title classes={{ root: "mt-8" }}>
          {localeConst.ABOUT_PAGE.locationTitle}
        </Title>
        <div className="w-full pb-[56.25%] relative mt-8 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5439.10744227363!2d90.65390244207441!3d23.320320629933782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754fee835febc1b%3A0x4a9fdca543ee5ab3!2sAmirabad%20G.K.%20High%20School!5e0!3m2!1sen!2sbd!4v1646724602409!5m2!1sen!2sbd"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
      </section>
    </Fragment>
  );
};

AboutUs.getLayout = (page: ReactElement) => {
  return <Wrapper>{page}</Wrapper>;
};

export default AboutUs;
