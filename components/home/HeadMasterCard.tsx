import { useLocale } from "hooks";
import Image from "next/image";

const HeadMasterCard = () => {
  const { localeConst } = useLocale();
  return (
    <section className="max-w-6xl px-4 mx-auto mt-8">
      <div className="pb-[56.25%] max-w-4xl mx-auto w-full relative">
        <Image
          src="/head.jpeg"
          alt="Welcome Image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className=" ml-5 mr-10 -mt-16 max-w-xl relative z-10 text-neutral-800">
          <blockquote className="bg-[#a6d6c9] px-4 py-3 text-base md:text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem laudantium
          </blockquote>
          <h6 className="bg-[#a6d6c9] inline-block px-4 pb-4">
            <strong className="text-sm md:text-base font-semibold">
              {localeConst.HOME.headSirName}
            </strong>
            <span className="text-xs md:text-sm">
              {" "}
              -{localeConst.HOME.headSirTitle}
            </span>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default HeadMasterCard;
