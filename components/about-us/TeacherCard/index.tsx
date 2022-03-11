import { useAnimation } from "framer-motion";
import { useIsomorphicLayoutEffect } from "hooks";
import Image from "next/image";
import { useRef } from "react";
import TeacherCardGeneralInfo from "./GeneralInfo";
import TeacherCardOtherInfo from "./OtherInfo";

const className = {
  root: "bg-white w-full min-h-[13.5rem]  rounded-md shadow-md flex overflow-hidden",
  left: "flex flex-col items-center justify-center p-4 bg-cyan-600",
  img: "rounded-full h-24 w-24 shadow-md border-2",
  designation: "text-white mt-4 text-center",
  right: "basis-full p-4 relative overflow-hidden",
  name: "text-lg md:text-xl text-center",
};

const TeacherCard = () => {
  const rightRef = useRef<HTMLDivElement | null>(null);
  const otherChildControl = useAnimation();
  const otherRootControl = useAnimation();

  useIsomorphicLayoutEffect(() => {
    const handler = () => {
      if (rightRef.current) {
        otherChildControl.start({ width: rightRef.current.offsetWidth });
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
      <div
        className={className.left}
        onMouseEnter={() => {
          otherRootControl.start("to");
        }}
        onMouseLeave={() => {
          otherRootControl.start("from");
        }}
      >
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
        <TeacherCardGeneralInfo />
        <TeacherCardOtherInfo
          childControl={otherChildControl}
          rootControl={otherRootControl}
        />
      </div>
    </article>
  );
};

export default TeacherCard;
