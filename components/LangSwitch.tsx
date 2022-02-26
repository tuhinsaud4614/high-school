import classnames from "classnames";
import { useLocale } from "hooks";
import { ChangeEvent } from "react";

const LangSwitch = () => {
  const { locale, onChange } = useLocale();

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onChange("bn");
    } else {
      onChange("en");
    }
  };

  const textStyle =
    "absolute pointer-events-none font-bold text-xs uppercase w-1/2 text-center top-1/2 -translate-y-1/2";

  return (
    <div className="ml-3 relative inline-block">
      <input
        id="language-toggle"
        className="hidden"
        type="checkbox"
        onChange={handler}
        checked={locale === "bn"}
      />
      <label
        htmlFor="language-toggle"
        className={classnames(
          "block relative cursor-pointer outline-0 select-none",
          "p-0.5 w-20 h-8 bg-[#27895d] rounded-[3.75rem]",
          "before:content-[''] before:block before:absolute before:inset-0.5 before:bg-[#27895d] before:rounded-[3.75rem]",
          "after:content-[''] after:block after:absolute after:inset-1 after:w-1/2 after:bg-white after:rounded-[3.25rem] after:transition-all after:shadow-md",
          locale === "bn" && "after:ml-8"
        )}
      />
      <span
        className={classnames(
          textStyle,
          "left-1 pr-0.5",
          locale === "bn" ? "text-white" : "text-red-500"
        )}
      >
        EN
      </span>
      <span
        className={classnames(
          textStyle,
          "right-1 pl-0.5",
          locale === "bn" ? "text-red-500" : "text-white"
        )}
      >
        বাং
      </span>
    </div>
  );
};

export default LangSwitch;
