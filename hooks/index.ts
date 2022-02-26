import { bn, en } from "@locals";
import { useRouter } from "next/router";

export const useLocale = () => {
  const { push, locale, pathname, asPath, ...rest } = useRouter();

  const onChange = (value: string) => {
    push(pathname, asPath, { locale: value });
  };

  return {
    locale,
    localeConst: locale === "bn" ? bn : en,
    onChange,
    pathname,
    asPath,
    ...rest,
  } as const;
};
