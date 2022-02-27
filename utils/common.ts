export const isTouchable = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window || Boolean(window.navigator.maxTouchPoints));
