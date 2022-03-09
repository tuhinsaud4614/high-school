import classNames from "classnames";
import { motion, useAnimation, Variants } from "framer-motion";
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
  root: "p-2 bg-white rounded-md relative shadow-md",
  container: "w-full pb-[125%] relative",
  imgContent: "absolute inset-0 w-full h-full z-10",
  socialIcon: "ml-2 first:ml-0 inline-block hover:scale-105 duration-300",
};

const socialVariants: Variants = {
  from: {
    y: "100%",
    display: "none",
    opacity: 0,
  },
  to: {
    y: 0,
    opacity: 1,
    display: "flex",
  },
};

const AlumniCard = () => {
  const animationControls = useAnimation();
  const socialAnimationControls = useAnimation();
  const infoRef = useRef<HTMLDivElement | null>(null);
  const infoHeight = useRef<number>(0);

  useIsomorphicLayoutEffect(() => {
    if (infoRef.current) {
      infoHeight.current = infoRef.current.offsetHeight;
    }
  }, []);

  return (
    <article
      className={classNames(className.root)}
      onMouseEnter={() => {
        animationControls.start({
          height: `calc(100% - ${infoHeight.current + 8}px)`,
        });
        socialAnimationControls.start("to");
      }}
      onMouseLeave={() => {
        animationControls.start({ height: "100%" });
        socialAnimationControls.start("from");
      }}
    >
      <div className={className.container}>
        <div className={className.imgContent}>
          <motion.div
            className="relative w-full overflow-hidden"
            animate={animationControls}
            initial={{ height: "100%" }}
            transition={{ bounce: 0, duration: 0.5 }}
          >
            <Image
              src="/head.jpeg"
              alt="user"
              layout="fill"
              objectFit="cover"
              priority
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-black/20 flex-wrap justify-center items-center px-4 py-2"
              animate={socialAnimationControls}
              variants={socialVariants}
              initial="from"
            >
              <a
                href="https://www.facebook.com"
                className={className.socialIcon}
              >
                <IoLogoFacebook className="text-white" size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                className={className.socialIcon}
              >
                <IoLogoTwitter className="text-white" size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                className={className.socialIcon}
              >
                <IoLogoInstagram className="text-white" size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                className={className.socialIcon}
              >
                <IoLogoLinkedin className="text-white" size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div
          ref={infoRef}
          className="absolute bottom-0 left-0 right-0 overflow-hidden"
        >
          <h1 className="text-center text-xl text-blue-600">Hello world</h1>
          <h3 className="text-center text-sm text-red-500">
            Businessman, Example
          </h3>
        </div>
      </div>
    </article>
  );
};

export default AlumniCard;
