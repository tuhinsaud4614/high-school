import classNames from "classnames";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useIsomorphicLayoutEffect } from "hooks";
import Image from "next/image";
import { useRef } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

const className = {
  root: "bg-white w-full rounded-md shadow-md flex overflow-hidden group",
  left: "flex flex-col items-center justify-center p-4 bg-cyan-600",
  img: "rounded-full h-24 w-24 shadow-md border-2",
  designation: "text-white mt-4 text-center",
  right: "basis-full p-4 relative overflow-hidden",
  name: "text-lg md:text-xl text-center",
  phoneItems:
    "flex items-center justify-center flex-wrap list-none text-sm text-neutral-800 mt-4",
  phoneItem: "ml-1 first:ml-0",
  socialItems: "list-none flex items-center justify-center mt-4",
  socialItem: "ml-2 first:ml-0 inline-block hover:scale-110 duration-300",
  other:
    "absolute inset-0 h-full bg-cyan-600 overflow-hidden duration-500 w-0 group-hover:w-full",
  vrLine:
    "after:content-[''] after:absolute after:block after:top-[10%] after:bottom-[10%] after:left-0 after:border-l after:border-white",
};

const OtherInfo = ({ control }: { control: AnimationControls }) => {
  return (
    <div className={classNames(className.other, className.vrLine)}>
      <motion.div animate={control}>
        <h2 className={classNames(className.name, "text-white p-4")}>
          Mr. Karim Khan
        </h2>
      </motion.div>
    </div>
  );
};

const TeacherCard = () => {
  const rightRef = useRef<HTMLDivElement | null>(null);
  const control = useAnimation();

  useIsomorphicLayoutEffect(() => {
    const handler = () => {
      if (rightRef.current) {
        control.start({ width: rightRef.current.offsetWidth });
      }
    };
    handler();
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <article className={className.root}>
      <div className={className.left}>
        <div className={className.img}>
          <Image
            src="/head.jpeg"
            alt="User"
            width={96}
            height={96}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h3 className={className.designation}>Headmaster</h3>
      </div>
      <div className={className.right} ref={rightRef}>
        <OtherInfo control={control} />
        <h2 className={classNames(className.name, "text-blue-600 ")}>
          Mr. Karim Khan
        </h2>
        {/* Phone number start */}
        <ul className={className.phoneItems}>
          <li className={className.phoneItem}>
            <a href={`tel:+8801234567890`}>01234567890,</a>
          </li>
          <li className={className.phoneItem}>
            <a href={`tel:+8801234567890`}>01234567890</a>
          </li>
        </ul>
        {/* Phone number end */}
        {/* Email start */}
        <a
          className="block mt-1 text-sm text-blue-500 text-center"
          href={`mailto:abc@gmail.com`}
        >
          abc@gmail.com
        </a>
        {/* Email end */}
        {/* Social Link Start */}
        <ul className={className.socialItems}>
          <li className={className.socialItem}>
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
              <IoLogoFacebook
                className="text-[#1877f2] hover:text-[#1877f2]/80"
                size={24}
              />
            </a>
          </li>
          <li className={className.socialItem}>
            <a href="https://www.twitter.com" rel="noreferrer" target="_blank">
              <IoLogoTwitter
                className="text-[#1d9bf0] hover:text-[#1d9bf0]/80"
                size={24}
              />
            </a>
          </li>
          <li className={className.socialItem}>
            <a
              href="https://www.instagram.com"
              rel="noreferrer"
              target="_blank"
            >
              <IoLogoInstagram
                className="text-[#c7288f] hover:text-[#c7288f]/80"
                size={24}
              />
            </a>
          </li>
          <li className={className.socialItem}>
            <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
              <IoLogoLinkedin
                className="text-[#0e76a8] hover:text-[#0e76a8]/80"
                size={24}
              />
            </a>
          </li>
        </ul>
        {/* Social Link End */}
      </div>
    </article>
  );
};

export default TeacherCard;
