import { useLocale } from "hooks";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const { localeConst } = useLocale();

  const height = 56;
  const width = height * 2.760521671502498;
  return (
    <Link href="/">
      <a className="flex items-center justify-center">
        <Image
          src={`/${localeConst.LOGO_TEXT}`}
          alt="Logo"
          height={height}
          width={width}
        />
      </a>
    </Link>
  );
};

export default Logo;
