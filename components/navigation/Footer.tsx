import { useLocale } from "hooks";
import Image from "next/image";
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

const Footer = () => {
  const { localeConst } = useLocale();
  return (
    <footer className="bg-black mt-4">
      <section className="max-w-6xl mx-auto p-4 flex items-center">
        <div className="flex-grow">
          <Image src="/text-bn.svg" alt="Logo" width={320} height={180} />
        </div>
        <div className="flex-grow flex flex-col">
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
        <div className="flex-grow"></div>
      </section>
    </footer>
  );
};

export default Footer;
