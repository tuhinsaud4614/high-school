import classNames from "classnames";
import { useLocale } from "hooks";
import Image from "next/image";
import { Fragment } from "react";

const Welcome = () => {
  const { localeConst, locale } = useLocale();
  return (
    <Fragment>
      <h1 className="flex flex-col items-center mt-4">
        <span
          className={classNames(
            "text-3xl md:text-7xl text-indigo-700 capitalize",
            locale !== "bn" && "font-[Parisienne,cursive]"
          )}
        >
          {localeConst.HOME.welcome}
        </span>
        {locale !== "bn" && (
          <span className="text-xs md:lg text-indigo-400">TO</span>
        )}
        <span className="text-lg text-center text-indigo-600">
          {localeConst.APP_TITLE}
        </span>
      </h1>
      <div className="flex items-center py-3">
        <hr className="flex-1 mr-4 border-indigo-400" />
        <Image width={24} height={24} src="/logo.svg" alt="logo" />
        <hr className="flex-1 ml-4 border-indigo-400" />
      </div>
      <div className="md:flex md:justify-center">
        <div className="relative md:order-2 md:basis-1/2">
          <Image
            src="/home.jpeg"
            alt="Welcome Image"
            layout="responsive"
            objectFit="cover"
            width={320}
            height={180}
          />
        </div>
        <p className="md:basis-1/2 md:pr-3 pt-3 md:pt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem laudantium, porro est repellendus consequuntur maiores
          vitae odit dignissimos ratione placeat quod sapiente quaerat excepturi
          ipsa amet, voluptatem quidem ipsum odio iste. Provident libero eum
          ipsam saepe fuga laudantium quibusdam possimus alias doloribus
          numquam, accusamus minima recusandae earum, eius vel? Odio
          exercitationem labore expedita, veritatis, fugit modi debitis adipisci
          tempora atque vero repudiandae. Laboriosam, reiciendis veniam atque
          non iusto iste incidunt totam sapiente inventore quidem maiores nisi
          tenetur? Ratione error amet ea dicta recusandae, itaque neque numquam
          necessitatibus non labore laborum suscipit quo iure consequuntur!
          Facere voluptas quod a neque enim.
        </p>
      </div>
    </Fragment>
  );
};

export default Welcome;
