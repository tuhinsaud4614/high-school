import { bn, en } from "@locale";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

export const useTouchable = () => {
  const [touchable, setTouchable] = useState(false);
  useEffect(() => {
    setTouchable(
      typeof window !== "undefined" &&
        ("ontouchstart" in window || Boolean(window.navigator.maxTouchPoints))
    );
  }, []);

  return touchable;
};
