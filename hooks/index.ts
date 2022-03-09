import { bn, en } from "@locale";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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

const supportMatchMedia =
  typeof window !== "undefined" && typeof window.matchMedia !== "undefined";
export const useMediaQuery = (query: string) => {
  const [touchable, setTouchable] = useState(() => {
    if (supportMatchMedia) {
      return window.matchMedia(query).matches;
    }
    return false;
  });
  const [matched, setMatched] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setTouchable(
      typeof window !== "undefined" &&
        ("ontouchstart" in window || Boolean(window.navigator.maxTouchPoints))
    );

    if (!supportMatchMedia) {
      return undefined;
    }

    let active = true;
    const media = window.matchMedia(query);

    const listener = () => {
      if (active) {
        setMatched(media.matches);
      }
    };

    listener();
    media.addListener(listener);
    return () => {
      active = false;
      media.removeListener(listener);
    };
  }, [query]);

  return [matched, touchable] as const;
};
