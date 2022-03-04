import { useLocale } from "hooks";
import Image from "next/image";

const HeadMasterCard = () => {
  const { localeConst } = useLocale();
  return (
    <section className="max-w-6xl mx-auto px-4 md:mt-16 mt-7 md:flex md:items-center">
      <div className="relative h-[11.25rem] w-full md:h-[18.75rem] md:w-[30rem]">
        <div className="absolute inset-0 w-full h-full rounded-full border-2 border-blue-500">
          <div className="relative w-full h-full rounded-full overflow-hidden md:mt-3 md:ml-3">
            <Image
              src="/home.jpeg"
              alt="Welcome Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="md:flex-1 md:pl-8 mt-3 md:mt-0">
        <div className="bg-white shadow-md p-4 rounded-3xl">
          <blockquote className="text-neutral-800 relative after:absolute after:content-['“'] after:text-neutral-400 after:top-0 after:-left-2.5 after:leading-[0.6] after:text-6xl before:content-['”'] before:absolute before:leading-[0] before:text-neutral-400 before:-bottom-[15%] before:right-0 before:text-6xl px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem laudantium, porro est repellendus consequuntur
            maiores vitae odit dignissimos ratione placeat quod sapiente quaerat
            excepturi ipsa amet.
          </blockquote>
          <h6 className="text-[#757575] flex flex-col items-end border-t border-blue-600 mt-3 ml-auto w-fit">
            <strong className="text-blue-500">
              {localeConst.HOME.headSirName}
            </strong>
            <span>-{localeConst.HOME.headSirTitle}</span>
          </h6>
        </div>
      </div>
    </section>
  );
};

export default HeadMasterCard;
