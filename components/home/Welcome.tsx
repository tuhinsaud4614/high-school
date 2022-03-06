import classNames from "classnames";
import { useLocale } from "hooks";
import Image from "next/image";
import { Fragment } from "react";

const Welcome = () => {
  const { localeConst, locale } = useLocale();
  return (
    <Fragment>
      <h1 className="flex flex-col items-center max-w-6xl mx-auto px-4 py-6">
        <span
          className={classNames(
            "text-3xl md:text-7xl text-blue-700 capitalize",
            locale !== "bn" && "font-[Parisienne,cursive]"
          )}
        >
          {localeConst.HOME.welcome}
        </span>
        {locale !== "bn" && (
          <span className="text-xs md:lg text-blue-500">To</span>
        )}
        <span className="text-xl text-center text-blue-600 font-bold">
          {localeConst.APP_TITLE}
        </span>
      </h1>
      <section className="bg-[#a6d6c9]">
        <div className="md:flex md:justify-center max-w-6xl mx-auto p-4">
          <div className="relative h-[11.25rem] md:h-auto md:order-2 md:basis-1/2 bg-blue-500 rounded-xl">
            <div className="absolute inset-0 md:inset-4">
              <div className=" w-full h-full relative rounded-lg overflow-hidden">
                <Image
                  src="/home.jpeg"
                  alt="Welcome Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="md:basis-1/2 md:pr-3 mt-3 md:mt-0 text-lg text-neutral-800">
            {localeConst.HOME.welcomeText}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Welcome;
