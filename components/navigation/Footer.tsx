import { PATHS } from "@util";
import classNames from "classnames";
import { useLocale } from "hooks";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

const InfoItem = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return (
    <div className="pt-4">
      <label className="block text-blue-300 uppercase text-sm mb-3">
        {label}
      </label>
      {children}
    </div>
  );
};

const LinkItem = ({
  to,
  active,
  children,
}: {
  active?: boolean;
  to: string;
  children?: ReactNode;
}) => {
  return (
    <Link href={to}>
      <a
        className={classNames(
          "mt-3 inline-block capitalize mr-4 md:mr-0",
          "hover:text-blue-400",
          active ? "text-blue-400" : "text-white"
        )}
      >
        {children}
      </a>
    </Link>
  );
};

const Footer = () => {
  const { localeConst, pathname } = useLocale();
  return (
    <footer className="bg-black mt-4 pb-16 md:pb-0">
      <section className="max-w-6xl mx-auto flex md:items-center flex-col md:flex-row">
        <div className="flex-grow p-4">
          <Image src="/text-bn.svg" alt="Logo" width={320} height={180} />
        </div>
        <div className="flex-grow flex flex-col p-4">
          <h6 className="text-white text-3xl">
            {localeConst.FOOTER.contact.title}
          </h6>
          <InfoItem label={localeConst.FOOTER.contact.address.label}>
            <address className="text-white capitalize">
              {localeConst.FOOTER.contact.address.value}
            </address>
          </InfoItem>
          <InfoItem label={localeConst.FOOTER.contact.email.label}>
            <a
              href={`mailto:${localeConst.FOOTER.contact.email.value}`}
              className="block text-white"
            >
              {localeConst.FOOTER.contact.email.value}
            </a>
          </InfoItem>
          <InfoItem label={localeConst.FOOTER.contact.mobile.label}>
            <a href={`tel:+8801234567890`} className="block text-white">
              {localeConst.FOOTER.contact.mobile.value}
            </a>
          </InfoItem>
          <InfoItem label={localeConst.FOOTER.contact.social.label}>
            <div className="flex items-center">
              <a
                className="block cursor-pointer"
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com"
              >
                <IoLogoFacebook className="text-[#1877f2]" size={36} />
              </a>
              <a
                className="block cursor-pointer ml-3"
                rel="noreferrer"
                target="_blank"
                href="https://www.twitter.com"
              >
                <IoLogoTwitter className="text-[#1d9bf0]" size={36} />
              </a>
              <a
                className="block cursor-pointer ml-3"
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com"
              >
                <IoLogoInstagram className="text-[#c7288f]" size={36} />
              </a>
            </div>
          </InfoItem>
        </div>
        <div className="flex-grow self-start p-4">
          <h6 className="text-white text-xl capitalize">
            {localeConst.FOOTER.links.title}
          </h6>
          <div className="flex flex-row flex-wrap md:flex-col">
            <LinkItem to={PATHS.aboutUs} active={pathname === PATHS.aboutUs}>
              {localeConst.ROUTES.aboutUs}
            </LinkItem>
            <LinkItem
              to={PATHS.guidelines}
              active={pathname === PATHS.guidelines}
            >
              {localeConst.ROUTES.guidelines}
            </LinkItem>
            <LinkItem
              to={PATHS.noticeBoard}
              active={pathname === PATHS.noticeBoard}
            >
              {localeConst.ROUTES.noticeBoard}
            </LinkItem>
            <LinkItem to={PATHS.gallery} active={pathname === PATHS.gallery}>
              {localeConst.ROUTES.gallery}
            </LinkItem>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto text-white text-center p-4">
        <hr className="border-t border-white -translate-y-4 w-full" />
        {localeConst.FOOTER.copyRight}
      </div>
    </footer>
  );
};

export default Footer;
